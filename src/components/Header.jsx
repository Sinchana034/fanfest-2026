import { useEffect, useState } from "react";
import "./Header.css";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#perks", label: "Perks" },
  { href: "#timeline", label: "Timeline" },
  { href: "#faq", label: "FAQ" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="wrap site-header__inner">
        <a href="#top" className="brand">
          FAN<span className="grad-text">FEST</span>
          <span className="brand__year">2026</span>
        </a>

        <nav className={`nav ${open ? "nav--open" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#apply" className="btn btn-primary nav__cta" onClick={() => setOpen(false)}>
            Apply Now
          </a>
        </nav>

        <button
          className={`burger ${open ? "burger--open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
