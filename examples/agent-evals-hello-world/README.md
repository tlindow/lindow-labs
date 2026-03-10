# Agent Evals Hello World

This is a tiny, runnable project for learning how to evaluate support-oriented
agent behavior without needing an API integration or a large benchmark first.

It is designed for people who already use Cursor, Claude Code, or a similar
coding agent in day-to-day development and troubleshooting.

## Why this project exists

Two ideas shape this example:

- In the Cursor support write-up, technical support is framed as a research
  problem: gather context, identify where the failure occurred, decide whether
  the issue is a bug or expected behavior, draft a safe customer reply, and
  escalate only when needed.
- In the OpenAI evals write-up, the useful loop is: define success, capture an
  agent run, score it with lightweight checks, and compare the result over time.

This project combines those ideas into a support-flavored hello world:

- the "agent run" is a JSON investigation artifact
- the eval harness scores that artifact
- the dataset is just four support scenarios
- the loop is small enough to run locally in a few seconds

## What you are evaluating

You are not evaluating whether a model "sounds smart."

You are evaluating whether an agent can do a support investigation well enough
to be useful:

1. Identify the failure point.
2. Classify the ticket correctly.
3. Cite the right evidence sources.
4. Write a customer-safe reply.
5. Draft a bug report only when the case should be escalated.

That keeps the project grounded in behavior instead of vibes.

## Project layout

- `fixtures/scenarios.json` — four support tickets plus the expected outcomes
- `prompts/support-investigator.md` — prompt template for Cursor / Claude Code
- `runs/baseline/` — intentionally rough examples that fail checks
- `runs/improved/` — examples that pass the deterministic evals
- `scripts/eval-runs.mjs` — the eval harness

## Quick start

No install step is required. This project uses only built-in Node.js features.

```bash
cd examples/agent-evals-hello-world
npm run eval:baseline
npm run eval:improved
```

You should see the baseline runs fail multiple checks and the improved runs pass
everything.

## How to use this with Cursor or Claude Code

### 1. Read the fixture and prompt

Open:

- `fixtures/scenarios.json`
- `prompts/support-investigator.md`

Pick one scenario, such as `repo-index-timeout`.

### 2. Ask your coding agent to create a run artifact

From the repo root, use a prompt like this:

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

### 3. Score the run

```bash
mkdir -p runs/manual
npm run eval -- runs/manual
```

The harness will tell you exactly which checks passed and failed.

### 4. Tighten the prompt and rerun

If the run fails:

- tighten the prompt
- make the output schema stricter
- add examples
- clarify the definition of done

Then rerun the same scenario. This is the smallest possible version of an eval
loop for support workflows.

## Definition of done

Each scenario includes a tiny "golden expectation" in `fixtures/scenarios.json`.
The eval harness checks for:

- correct `failure_point`
- correct `disposition`
- enough evidence entries
- required evidence sources
- required customer-reply keywords
- forbidden internal-only language
- bug report presence or absence
- required bug-report keywords
- follow-up questions when more context is needed

These are intentionally lightweight, deterministic checks. They are meant to be
fast, explainable, and easy to extend.

## Why the JSON artifact matters

In a real support workflow, the interesting work often happens before a customer
reply is ever sent:

- what context was gathered?
- what failed?
- was it already known?
- should engineering get involved?
- what is safe to say externally?

The artifact in this project captures that reasoning in a format that is easy to
score. That makes it a better starting point for evals than grading free-form
chat transcripts.

## Suggested next steps

Once this feels comfortable, extend the project by:

1. adding 5–10 more scenarios
2. creating a second prompt optimized for bug-ticket drafting
3. scoring a second artifact such as `customer_reply.md`
4. adding rubric-based grading for clarity and tone
5. replacing the fake fixtures with exports from real support tools

## A good mental model

Think of this project as:

- a support ticket in
- an investigation artifact out
- deterministic checks in the middle

That is enough to start building agent eval habits before you introduce live
models, MCP servers, or larger support datasets.
