import Link from "next/link";
import Header from "@/components/Header";

export const metadata = {
  title: "Privacy notice — Ripely",
  description:
    "How Ripely handles the information you send through this website, and your rights over it.",
};

export default function Privacy() {
  return (
    <>
      <Header />
      <main className="legal">
        <div className="wrap legal-wrap">
          <span className="eyebrow">Legal</span>
          <h1>Privacy notice</h1>
          <p className="legal-updated">Last updated 29 August 2026.</p>

          <p>
            This notice explains what Ripely does with the information you give us through this
            website. We keep it short because we collect very little.
          </p>

          <h2>Who we are</h2>
          <p>
            Ripely builds operations software for soft-fruit growers, based in the United Kingdom.
            For anything about your data, email{" "}
            <a href="mailto:privacy@ripely.uk">privacy@ripely.uk</a> or use the contact form on the
            site.
          </p>

          <h2>What we collect</h2>
          <p>
            When you send an enquiry through our contact form, we collect the details you type in:
            your name, your email address, your company if you give it, and your message. Our host
            also keeps standard server logs (such as IP address and browser type) for security and
            to keep the site running.
          </p>

          <h2>Why we collect it</h2>
          <p>
            We use these details for one thing: to read your enquiry and reply to it. The lawful
            basis is our legitimate interest in responding to people who get in touch, and your
            consent in choosing to send the form.
          </p>

          <h2>How your message reaches us</h2>
          <p>
            Form submissions are delivered to our inbox by{" "}
            <a href="https://web3forms.com/privacy-policy" target="_blank" rel="noopener noreferrer">
              Web3Forms
            </a>
            , a form-to-email service that processes the message on our behalf. The site itself is
            hosted on{" "}
            <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">
              Vercel
            </a>
            .
          </p>

          <h2>Analytics and cookies</h2>
          <p>
            We measure visits with privacy-friendly, cookieless analytics that count page views
            without identifying you or tracking you across other sites. We do not use advertising or
            tracking cookies, so there is no cookie banner to click through.
          </p>

          <h2>How long we keep it</h2>
          <p>
            We hold your enquiry only as long as we need it to deal with your request and any
            follow-up, then we delete it. Server logs are rotated on our host&apos;s own schedule.
          </p>

          <h2>Your rights</h2>
          <p>
            Under UK data protection law you can ask us for a copy of your data, ask us to correct
            or delete it, or object to how we use it. Email us and we will sort it out. If you are
            not happy with our response, you can complain to the Information Commissioner&apos;s
            Office at{" "}
            <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer">
              ico.org.uk
            </a>
            .
          </p>

          <h2>Changes</h2>
          <p>
            If we change how we handle your data, we will update this page and the date at the top.
          </p>

          <p className="legal-back">
            <Link href="/">← Back to home</Link>
          </p>
        </div>
      </main>

      <footer>
        <div className="wrap foot">
          <Link className="logo-lockup" href="/" aria-label="Ripely home">
            <img className="mark mark--foot" src="/ripely-mark.png" alt="" />
            <span className="foot-word">Ripely</span>
          </Link>
          <small>&copy; 2026 Ripely. Farm data integration for soft-fruit growers. Built in the UK.</small>
        </div>
      </footer>
    </>
  );
}
