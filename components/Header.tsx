"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap nav">
        <a className="logo-lockup" href="/" aria-label="Ripely home">
          <img className="logo-img logo-img--nav" src="/ripely-logo-stacked.svg" alt="Ripely" />
        </a>
        <nav className="nav-links">
          <a href="/#product">Product</a>
          <a href="/#approach">Approach</a>
          <a href="/#contact">Contact</a>
        </nav>
        <a className="btn btn-primary" href="/#contact">
          Book a call
        </a>
      </div>
    </header>
  );
}
