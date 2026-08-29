import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export interface HomeContent {
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problem: { eyebrow: string; lead: string };
  stats: { num: string; label: string; note: string }[];
  product: {
    eyebrow: string;
    heading: string;
    cards: { tag: string; title: string; body: string }[];
  };
  approach: {
    eyebrow: string;
    leadStart: string;
    leadEmphasis: string;
    leadEnd: string;
    points: { kicker: string; title: string; body: string }[];
  };
  contact: { eyebrow: string; heading: string; sub: string };
}

const routePath =
  "M60 380 C 120 300, 360 320, 300 250 C 250 190, 150 210, 210 150 C 250 110, 320 130, 330 96";

export default function HomeView({ home }: { home: HomeContent }) {
  return (
    <>
      <Header />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">{home.hero.eyebrow}</span>
              <h1>
                {home.hero.headline} <span className="accent">{home.hero.headlineAccent}</span>
              </h1>
              <p className="hero-sub">{home.hero.sub}</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#contact">
                  {home.hero.ctaPrimary}
                </a>
                <a className="btn btn-ghost" href="#product">
                  {home.hero.ctaSecondary}
                </a>
              </div>
            </div>

            <div className="hero-art">
              <svg
                className="field-art"
                viewBox="0 0 460 420"
                role="img"
                aria-label="A berry field with planting rows and a picker route weaving through it"
              >
                <defs>
                  <linearGradient id="rowGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#3FA24B" stopOpacity="0.10" />
                    <stop offset="100%" stopColor="#A8CE3C" stopOpacity="0.30" />
                  </linearGradient>
                </defs>
                <g stroke="url(#rowGrad)" strokeWidth="2" fill="none">
                  <path d="M40 360 C 150 320, 310 320, 420 360" />
                  <path d="M60 300 C 160 268, 300 268, 400 300" />
                  <path d="M78 244 C 168 218, 292 218, 382 244" />
                  <path d="M96 192 C 176 172, 284 172, 364 192" />
                  <path d="M112 146 C 182 130, 278 130, 348 146" />
                  <path d="M126 106 C 188 94, 272 94, 334 106" />
                </g>
                <g>
                  <circle className="berry" cx="150" cy="332" r="5" />
                  <circle className="berry" cx="250" cy="330" r="5" />
                  <circle className="berry" cx="330" cy="336" r="5" />
                  <circle className="berry" cx="180" cy="276" r="4.5" />
                  <circle className="berry" cx="300" cy="276" r="4.5" />
                  <circle className="berry" cx="210" cy="224" r="4" />
                  <circle className="berry" cx="290" cy="200" r="3.6" />
                  <circle className="berry" cx="230" cy="152" r="3.4" />
                </g>
                <path
                  d={routePath}
                  fill="none"
                  stroke="#A8CE3C"
                  strokeWidth="2.4"
                  strokeDasharray="4 7"
                  strokeLinecap="round"
                  opacity="0.75"
                />
                <circle
                  className="route-dot"
                  r="6.5"
                  style={{ offsetPath: `path('${routePath}')` }}
                >
                  <animate
                    attributeName="opacity"
                    values="0.4;1;0.4"
                    dur="2.5s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>
        </section>

        {/* STAT BAND */}
        <section className="band">
          <div className="wrap">
            <span className="eyebrow">{home.problem.eyebrow}</span>
            <p className="band-lead">{home.problem.lead}</p>
            <div className="stats">
              {home.stats.map((stat, i) => (
                <div className="stat" key={i}>
                  <div className="stat-num">{stat.num}</div>
                  <div className="stat-label">{stat.label}</div>
                  <div className="stat-note">{stat.note}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCT */}
        <section className="paper" id="product">
          <div className="wrap">
            <span className="eyebrow">{home.product.eyebrow}</span>
            <h2>{home.product.heading}</h2>
            <div className="cards">
              {home.product.cards.map((card, i) => (
                <div className="card" key={i}>
                  <span className="card-tag">{card.tag}</span>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="approach" id="approach">
          <div className="wrap">
            <span className="eyebrow">{home.approach.eyebrow}</span>
            <p className="approach-lead">
              {home.approach.leadStart}
              <b>{home.approach.leadEmphasis}</b>
              {home.approach.leadEnd}
            </p>
            <div className="points">
              {home.approach.points.map((point, i) => (
                <div className="point" key={i}>
                  <div className="point-k">{point.kicker}</div>
                  <h4>{point.title}</h4>
                  <p>{point.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact-head">
              <span className="eyebrow">{home.contact.eyebrow}</span>
              <h2>{home.contact.heading}</h2>
              <p>{home.contact.sub}</p>
            </div>
            <ContactForm />
            <p className="contact-fineprint">
              Send us your details and we&apos;ll only ever use them to reply about your enquiry.
              See our <a href="/privacy">privacy notice</a>.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <a className="logo-lockup" href="#top" aria-label="Ripely home">
            <img className="mark mark--foot" src="/ripely-mark.png" alt="" />
            <span className="foot-word">Ripely</span>
          </a>
          <nav className="foot-links">
            <a href="#product">Product</a>
            <a href="#contact">Contact</a>
            <a href="/privacy">Privacy</a>
          </nav>
          <small>&copy; 2026 Ripely. Farm data integration for soft-fruit growers. Built in the UK.</small>
        </div>
      </footer>
    </>
  );
}
