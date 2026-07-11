import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <div className="footer__brand">
          FAN<span className="grad-text">FEST</span> 2026
        </div>
        <p className="footer__tagline">August 14–16, 2026 · For creators, by creators.</p>

        <p className="footer__bottom">
          © 2026 FanFest. All rights reserved. &nbsp;|&nbsp;
          <a href="#">Privacy Policy</a> &nbsp;|&nbsp;
          <a href="#">Contact Us</a>
        </p>
      </div>
    </footer>
  );
}
