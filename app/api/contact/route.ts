import { NextResponse } from "next/server";

export async function POST(req: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Bad request." }, { status: 400 });
  }

  const name = String(payload.name || "").trim();
  const email = String(payload.email || "").trim();
  const company = String(payload.company || "").trim();
  const message = String(payload.message || "").trim();
  const botcheck = String(payload.botcheck || "").trim();

  // Silently accept honeypot hits so bots think they succeeded.
  if (botcheck) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Please fill in your name, email and message." },
      { status: 400 }
    );
  }

  const key = process.env.WEB3FORMS_KEY;
  if (!key) {
    return NextResponse.json(
      { ok: false, error: "The contact form isn't configured yet." },
      { status: 500 }
    );
  }

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: key,
        subject: `Ripely enquiry from ${name}`,
        from_name: "Ripely website",
        name,
        email,
        replyto: email,
        company: company || "(not given)",
        message,
      }),
    });

    const result = await res.json();
    if (result.success) {
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json(
      { ok: false, error: "The message could not be sent. Please email us directly." },
      { status: 502 }
    );
  } catch {
    return NextResponse.json(
      { ok: false, error: "The message could not be sent. Please email us directly." },
      { status: 502 }
    );
  }
}
