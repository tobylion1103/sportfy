"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = (await res.json()) as { error?: string };

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Something went wrong.");
        return;
      }

      setStatus("success");
      setMessage("You're on the list. We'll email you when Sporty launches.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="w-full max-w-lg rounded-xl border border-accent/20 bg-accent-soft px-5 py-4 text-left"
        role="status"
      >
        <p className="text-lg font-semibold text-accent">You&apos;re in!</p>
        <p className="mt-1 text-sm leading-relaxed text-fg-muted">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-lg">
      <label
        htmlFor="waitlist-email"
        className="mb-2 block text-sm font-medium text-fg"
      >
        Email address
      </label>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <input
          id="waitlist-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="min-h-12 flex-1 rounded-xl border border-line bg-bg-elevated px-4 text-base text-fg shadow-sm outline-none transition placeholder:text-fg-muted/70 focus:border-accent focus:ring-2 focus:ring-accent/20 disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-12 shrink-0 rounded-xl bg-accent px-6 text-base font-semibold text-white transition hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </button>
      </div>
      <p className="mt-2.5 text-xs text-fg-muted">
        No spam. Just launch updates and your welcome gift.
      </p>
      {status === "error" && message ? (
        <p className="mt-3 text-sm text-ember" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
