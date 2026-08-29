"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

// Web3Forms access keys are public by design — they're meant to be used from
// the browser. This is injected at build time from NEXT_PUBLIC_WEB3FORMS_KEY.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    // Honeypot: bots fill this, humans never see it. Pretend it worked.
    if (data.botcheck) {
      setStatus("ok");
      form.reset();
      return;
    }

    if (!ACCESS_KEY) {
      setStatus("error");
      setError("The form isn't configured yet. Please email us directly.");
      return;
    }

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Ripely enquiry from ${data.name || "the website"}`,
          from_name: "Ripely website",
          name: data.name,
          email: data.email,
          replyto: data.email,
          company: data.company || "(not given)",
          message: data.message,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus("ok");
        form.reset();
      } else {
        setStatus("error");
        setError("The message couldn't be sent. Please email us directly.");
      }
    } catch {
      setStatus("error");
      setError("Couldn't reach the server. Try again in a moment.");
    }
  }

  if (status === "ok") {
    return (
      <div className="form">
        <p className="form-msg ok" role="status">
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
          placeholder="A line or two about your operation and the tools you already run."
        />
      </div>

      <div className="form-actions">
        <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send enquiry"}
        </button>
        <span className="form-msg err" role="status" aria-live="polite">
          {status === "error" ? error : ""}
        </span>
      </div>
    </form>
  );
}
