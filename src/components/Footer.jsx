import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          FAN<span className="grad-text">FEST</span> 2026
          <p>August 14–16, 2026 · For creators, by creators.</p>
        </div>

        <div className="footer__links">
          <a href="#about">About</a>
          <a href="#perks">Perks</a>
          <a href="#apply">Apply</a>
          <a href="#faq">FAQ</a>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <span>© 2026 FanFest. All rights reserved.</span>
        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
}
