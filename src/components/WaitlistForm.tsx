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
      setMessage("You're on the list. We'll be in touch.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="w-full max-w-md rounded-sm border border-accent/30 bg-accent/10 px-5 py-4 text-left"
        role="status"
      >
        <p className="font-display text-2xl tracking-wide text-accent">
          You&apos;re in
        </p>
        <p className="mt-1 text-sm text-fg-muted">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="w-full max-w-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-stretch">
        <label className="sr-only" htmlFor="waitlist-email">
          Email
        </label>
        <input
          id="waitlist-email"
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="min-h-12 flex-1 border border-line bg-bg-elevated/80 px-4 text-base text-fg outline-none transition placeholder:text-fg-muted/70 focus:border-accent disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="min-h-12 shrink-0 bg-accent px-6 font-display text-xl tracking-wide text-bg transition hover:bg-accent-dim disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "loading" ? "Joining…" : "Join the Waitlist"}
        </button>
      </div>
      {status === "error" && message ? (
        <p className="mt-3 text-sm text-ember" role="alert">
          {message}
        </p>
      ) : null}
    </form>
  );
}
