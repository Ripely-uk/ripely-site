"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();

      if (res.ok && json.ok) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setError(json.error || "Something went wrong. Try again, or email us directly.");
      }
    } catch {
      setStatus("error");
      setError("Could not reach the server. Try again in a moment.");
    }
  }

  if (status === "ok") {
    return (
      <div className="form">
        <p className="form-msg ok">
          Thanks, that&apos;s with us. We&apos;ll get back to you shortly at the address you gave.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      {/* honeypot: bots fill this, humans never see it */}
      <input
        className="hp"
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="form-row">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" type="text" required placeholder="Your name" />
        </div>
        <div className="field">
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" placeholder="Your operation" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="email">Email</label>
        <input id="email" name="email" type="email" required placeholder="you@yourfarm.co.uk" />
      </div>

      <div className="field">
        <label htmlFor="message">Where does your season leak?</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="A line or two about your operation and where the gaps are."
        />
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send enquiry"}
        </button>
        {status === "error" && <span className="form-msg err">{error}</span>}
      </div>
    </form>
  );
}
