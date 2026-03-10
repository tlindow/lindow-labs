# Support Investigator Prompt

Use this prompt with Cursor, Claude Code, or a similar coding agent when you want
to generate an investigation artifact for one ticket in this hello-world project.

## Goal

Given a single scenario from `fixtures/scenarios.json`, produce one JSON file at:

`runs/manual/<ticket-id>.json`

The output should represent the result of a support investigation in the age of
AI:

1. Gather the relevant context.
2. Identify where the failure happened.
3. Decide whether the report maps to a known issue, expected behavior, a bug, or
   a needs-more-info response.
4. Draft a safe customer reply.
5. Draft a bug report only when the issue should be escalated.

This mirrors the support flow described in the Cursor support post: support work
starts as a research problem, then narrows into failure-point identification,
bug-vs-expected-behavior classification, and finally a customer-safe reply plus
an escalation when needed.

## Constraints

- Use only the scenario fixture as your source of truth.
- Do not mention internal tools, traces, or team-only notes in the customer
  reply.
- Keep the customer reply actionable and calm.
- Only create a bug report when the disposition is `bug`.
- Add evidence entries that point back to the scenario context.

## Required JSON shape

```json
{
  "ticket_id": "login-loop-sso",
  "summary": "One paragraph summary of what happened.",
  "failure_point": "auth",
  "disposition": "known_issue",
  "confidence": 0.86,
  "evidence": [
    {
      "source": "customer_message",
      "note": "Why the customer report matters."
    },
    {
      "source": "known_issue",
      "note": "Why the known issue or runbook matches."
    }
  ],
  "customer_reply": "Reply that is safe to send to the customer.",
  "follow_up_questions": [],
  "bug_report": null
}
```

`failure_point` must be one of:

- `client`
- `api`
- `dependency`
- `auth`
- `unknown`

`disposition` must be one of:

- `known_issue`
- `expected_behavior`
- `bug`
- `needs_more_info`

`evidence[].source` should be one of:

- `customer_message`
- `account`
- `logs`
- `known_issue`
- `runbook`

When `disposition` is `bug`, use this bug report shape:

```json
{
  "title": "Short bug title",
  "body": "Repro summary, evidence, impact, and next steps."
}
```

## Suggested agent instruction

```text
Read examples/agent-evals-hello-world/fixtures/scenarios.json and
examples/agent-evals-hello-world/prompts/support-investigator.md.

Generate a support investigation artifact for the scenario with id
"repo-index-timeout". Save it as
examples/agent-evals-hello-world/runs/manual/repo-index-timeout.json.

Follow the required JSON shape exactly. Be explicit about the failure point,
include evidence entries, keep the customer reply safe for external use, and
only include bug_report if the disposition is "bug".
```

## Eval loop

After generating manual runs, score them with:

```bash
npm run eval -- runs/manual
```

Then tighten the prompt or the artifact structure and rerun the eval. The point
of the loop is to make regressions obvious without relying on vibes.
