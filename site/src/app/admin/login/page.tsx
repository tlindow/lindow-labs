"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/cms/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (res.ok) {
      router.push("/admin");
    } else {
      setError("Incorrect password.");
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-violet/10 mb-4">
            <span className="text-xl">✦</span>
          </div>
          <h1 className="font-display text-2xl font-semibold text-foreground">CMS</h1>
          <p className="mt-1 text-sm text-muted">Enter your password to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
              className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-violet/40 transition-shadow"
            />
          </div>

          {error && (
            <p className="text-sm text-rose text-center">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading || !password}
            className="w-full rounded-xl bg-violet px-4 py-3 text-sm font-medium text-white hover:bg-indigo transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Checking…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}
