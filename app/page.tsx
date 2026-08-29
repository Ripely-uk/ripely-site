import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

const routePath =
  "M60 380 C 120 300, 360 320, 300 250 C 250 190, 150 210, 210 150 C 250 110, 320 130, 330 96";

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* HERO */}
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">Soft-fruit operations, integrated</span>
              <h1>
                Get the right pickers to the right rows,{" "}
                <span className="accent">on the right day.</span>
              </h1>
              <p className="hero-sub">
                Ripely builds the software that moves labour and fruit around a large berry
                operation. We start with picker transport, then grow into the data layer that ties
                your whole season together.
              </p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#contact">
                  Book a call
                </a>
                <a className="btn btn-ghost" href="#product">
                  See what we build
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
            <span className="eyebrow">The problem</span>
            <p className="band-lead">
              A big grower runs on spreadsheets that never meet. Labour, transport, yield and quality
              each sit in their own corner, and money leaks in the gaps between them.
            </p>
            <div className="stats">
              <div className="stat">
                <div className="stat-num">~£1m/yr</div>
                <div className="stat-label">
                  Estimated saving from smarter picker transport at a single large grower.
                </div>
                <div className="stat-note">Estimate</div>
              </div>
              <div className="stat">
                <div className="stat-num">1,500+</div>
                <div className="stat-label">
                  Seasonal workers to route to the right field, every day, at peak.
                </div>
                <div className="stat-note">At scale</div>
              </div>
              <div className="stat">
                <div className="stat-num">One season</div>
                <div className="stat-label">
                  To prove it on your real rows before you commit to anything.
                </div>
                <div className="stat-note">How we start</div>
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCT */}
        <section className="paper" id="product">
          <div className="wrap">
            <span className="eyebrow">What we build</span>
            <h2>Two things, in order. The tool that pays for itself, then the layer underneath.</h2>
            <div className="cards">
              <div className="card">
                <span className="card-tag">01 — Live now</span>
                <h3>Picker transport &amp; routing</h3>
                <p>
                  Match the crews you have to the fields that are ready, and move them there without
                  the daily scramble. Fewer empty seats, fewer idle pickers, less fruit left too long
                  on the cane.
                </p>
              </div>
              <div className="card">
                <span className="card-tag">02 — Where it grows</span>
                <h3>The operations data layer</h3>
                <p>
                  Your labour, transport, yield and quality data pulled into one place, so you can see
                  the whole season at once and act before a gap costs you. We build it one integration
                  at a time.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APPROACH */}
        <section className="approach" id="approach">
          <div className="wrap">
            <span className="eyebrow">How we work</span>
            <p className="approach-lead">
              We build in the field, <b>not the lab.</b> Ripely is developed alongside one of the
              UK&apos;s largest berry growers, on real rows and real crews.
            </p>
            <div className="points">
              <div className="point">
                <div className="point-k">Berry-first</div>
                <h4>We know soft fruit</h4>
                <p>Built for the way berries are actually grown, picked and moved, down to the punnet.</p>
              </div>
              <div className="point">
                <div className="point-k">Built with growers</div>
                <h4>Shipped on real fields</h4>
                <p>Everything we make earns its place in a working operation before it reaches you.</p>
              </div>
              <div className="point">
                <div className="point-k">Prove it first</div>
                <h4>A season to earn trust</h4>
                <p>We show the saving on your own numbers before you sign up to more.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact-head">
              <span className="eyebrow">Talk to us</span>
              <h2>Tell us where your season leaks.</h2>
              <p>Send us a line about your operation and we&apos;ll show you what we&apos;d build first.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap foot">
          <a className="logo-lockup" href="#top" aria-label="Ripely home">
            <svg className="mark mark--foot">
              <use href="#ripely-mark" />
            </svg>
            <span className="foot-word">Ripely</span>
          </a>
          <small>&copy; 2026 Ripely. Soft-fruit operations software. Built in the UK.</small>
        </div>
      </footer>
    </>
  );
}
