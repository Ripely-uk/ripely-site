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
              <span className="eyebrow">Farm data, joined up</span>
              <h1>
                The savings are hiding in the gaps{" "}
                <span className="accent">between your systems.</span>
              </h1>
              <p className="hero-sub">
                A big berry grower runs on a dozen tools that never speak to each other. Labour in
                one, transport in another, yield and quality somewhere else again. Ripely joins that
                data up and puts modern AI to work on it, so your team spends the day on the fruit
                instead of the spreadsheets.
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
              You&apos;ve already paid for the software: a tool for picking, one for payroll, another
              for haulage. None of them talk, so money leaks in the gaps between them, and someone
              loses an evening stitching it together by hand.
            </p>
            <div className="stats">
              <div className="stat">
                <div className="stat-num">~£1m/yr</div>
                <div className="stat-label">
                  What smarter picker transport alone saved one large grower. That is a single
                  project, not the whole of it.
                </div>
                <div className="stat-note">Estimate</div>
              </div>
              <div className="stat">
                <div className="stat-num">1,500+</div>
                <div className="stat-label">
                  Seasonal workers to place in the right field each day at peak, one of many moving
                  parts we pull together.
                </div>
                <div className="stat-note">At scale</div>
              </div>
              <div className="stat">
                <div className="stat-num">One season</div>
                <div className="stat-label">
                  To prove the saving on your own numbers before you commit to anything.
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
            <h2>Connect the data first. Then put it to work for you.</h2>
            <div className="cards">
              <div className="card">
                <span className="card-tag">The core</span>
                <h3>One integration layer</h3>
                <p>
                  Labour, transport, yield, quality and cost, lifted out of their separate tools and
                  into one place where the numbers line up. We add one integration at a time,
                  starting with whatever is costing you most.
                </p>
              </div>
              <div className="card">
                <span className="card-tag">Modern</span>
                <h3>AI that does the boring bit</h3>
                <p>
                  The stitching, chasing and reconciling that eats your team&apos;s week, handled by
                  agents running in the background. Your people spend their time on the judgement
                  calls, not on data entry.
                </p>
              </div>
              <div className="card">
                <span className="card-tag">Live now</span>
                <h3>Picker transport &amp; routing</h3>
                <p>
                  Our first project. Match the crews you have to the fields that are ready, and get
                  them there without the daily scramble. Fewer empty seats, fewer idle pickers, and
                  less fruit left too long on the cane. More projects follow.
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
              We build on a working farm, <b>not in a lab.</b> Ripely is developed alongside one of
              the UK&apos;s largest berry growers.
            </p>
            <div className="points">
              <div className="point">
                <div className="point-k">Berry-first</div>
                <h4>We know soft fruit</h4>
                <p>Built around the way berries are grown, picked and moved, down to the punnet.</p>
              </div>
              <div className="point">
                <div className="point-k">Built with growers</div>
                <h4>Earns its place on the farm</h4>
                <p>Everything we ship has to prove itself in a live operation before it reaches you.</p>
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
              <p>
                Send a line about your operation and the tools you already run. We&apos;ll tell you
                what we&apos;d connect first.
              </p>
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
            <svg className="mark mark--foot">
              <use href="#ripely-mark" />
            </svg>
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
