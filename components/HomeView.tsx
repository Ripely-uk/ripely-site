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
  stats: { heading: string; sub: string }[];
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

// Network graph: a few hub nodes, their spokes, and bridge nodes that link
// the hubs together — a stand-in for how Ripely joins up separate systems.
const graphNodes: { id: string; x: number; y: number; r: number; c: "a" | "b" | "c"; pulse?: boolean }[] = [
  { id: "hub1", x: 150, y: 180, r: 11, c: "a", pulse: true },
  { id: "hub2", x: 330, y: 130, r: 10, c: "b", pulse: true },
  { id: "hub3", x: 350, y: 320, r: 10, c: "a", pulse: true },
  { id: "n1", x: 70, y: 90, r: 5, c: "b" },
  { id: "n2", x: 110, y: 55, r: 4, c: "c" },
  { id: "n3", x: 175, y: 45, r: 5, c: "a" },
  { id: "n4", x: 235, y: 75, r: 4, c: "b" },
  { id: "n5", x: 60, y: 165, r: 4, c: "a" },
  { id: "n6", x: 55, y: 235, r: 5, c: "c" },
  { id: "n7", x: 95, y: 285, r: 4, c: "b" },
  { id: "n8", x: 260, y: 40, r: 4, c: "a" },
  { id: "n9", x: 300, y: 28, r: 5, c: "c" },
  { id: "n10", x: 365, y: 38, r: 4, c: "b" },
  { id: "n11", x: 415, y: 68, r: 5, c: "a" },
  { id: "n12", x: 432, y: 122, r: 4, c: "c" },
  { id: "n13", x: 412, y: 175, r: 5, c: "b" },
  { id: "n14", x: 420, y: 288, r: 5, c: "a" },
  { id: "n15", x: 440, y: 340, r: 4, c: "c" },
  { id: "n16", x: 405, y: 382, r: 5, c: "b" },
  { id: "n17", x: 345, y: 392, r: 4, c: "a" },
  { id: "n18", x: 288, y: 368, r: 4, c: "c" },
  { id: "bridge1", x: 250, y: 122, r: 4, c: "b", pulse: true },
  { id: "bridge2", x: 232, y: 250, r: 4, c: "a", pulse: true },
  { id: "bridge3", x: 372, y: 195, r: 4, c: "b", pulse: true },
];

const graphEdges: [string, string][] = [
  ["hub1", "n1"], ["hub1", "n2"], ["hub1", "n3"], ["hub1", "n4"],
  ["hub1", "n5"], ["hub1", "n6"], ["hub1", "n7"],
  ["hub1", "bridge1"], ["hub1", "bridge2"],
  ["hub2", "n8"], ["hub2", "n9"], ["hub2", "n10"], ["hub2", "n11"],
  ["hub2", "n12"], ["hub2", "n13"],
  ["hub2", "bridge1"], ["hub2", "bridge3"],
  ["hub3", "n14"], ["hub3", "n15"], ["hub3", "n16"], ["hub3", "n17"], ["hub3", "n18"],
  ["hub3", "bridge2"], ["hub3", "bridge3"],
];

const nodeById = Object.fromEntries(graphNodes.map((n) => [n.id, n]));

// The signal dot travels around the loop connecting the three hubs.
const signalPath = "M150,180 L250,122 L330,130 L372,195 L350,320 L232,250 Z";

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
                className="network-art"
                viewBox="0 0 460 420"
                role="img"
                aria-label="A network graph of connected data points, representing separate farm systems linking together"
              >
                <g className="graph-edges" stroke="var(--forest-line)" strokeWidth="1.5">
                  {graphEdges.map(([fromId, toId]) => {
                    const from = nodeById[fromId];
                    const to = nodeById[toId];
                    return (
                      <line
                        key={`${fromId}-${toId}`}
                        x1={from.x}
                        y1={from.y}
                        x2={to.x}
                        y2={to.y}
                      />
                    );
                  })}
                </g>
                <g className="graph-nodes">
                  {graphNodes.map((n) => (
                    <circle
                      key={n.id}
                      className={`node node-${n.c}${n.pulse ? " node-pulse" : ""}`}
                      cx={n.x}
                      cy={n.y}
                      r={n.r}
                    />
                  ))}
                </g>
                <circle
                  className="signal-dot"
                  r="5"
                  style={{ offsetPath: `path('${signalPath}')` }}
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
                  <div className="stat-num">{stat.heading}</div>
                  <div className="stat-label">{stat.sub}</div>
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
            <img className="logo-img logo-img--foot" src="/ripely-logo-horizontal.svg" alt="Ripely" />
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
