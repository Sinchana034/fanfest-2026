import { useEffect, useState } from "react";
import "./Hero.css";

const EVENT_DATE = new Date("2026-08-14T00:00:00");

function getTimeLeft() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  return { d, h, m, s };
}

const STATS = [
  { value: "AUG 14–16", label: "Event Dates" },
  { value: "2026", label: "Edition" },
  { value: "50K+", label: "Expected Fans" },
  { value: "200+", label: "Creator Spots" },
];

const TICKER = [
  "YOUTUBERS",
  "TIKTOKERS",
  "STREAMERS",
  "PODCASTERS",
  "ARTISTS",
  "VLOGGERS",
];

export default function Hero() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--pink" />
      <div className="hero__glow hero__glow--violet" />

      <div className="ticker" aria-hidden="true">
        <div className="ticker__track">
          {[...TICKER, ...TICKER].map((t, i) => (
            <span key={i}>
              {t} <span className="ticker__dot">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="wrap hero__inner">
        <span className="eyebrow">🎬 Open Applications — Limited Spots</span>

        <h1 className="hero__title">
          CREATE. <span className="grad-text">CONNECT.</span>
          <br />
          DOMINATE.
        </h1>

        <p className="hero__subtitle">
          FanFest 2026 is calling creators like you to join the biggest
          fan-powered event of the year. Share your world, grow your
          audience, and make history on the main stage.
        </p>

        <div className="hero__actions">
          <a href="#apply" className="btn btn-primary">
            Apply as a Creator →
          </a>
          <a href="#about" className="btn btn-ghost">
            Learn More
          </a>
        </div>

        <div className="countdown" role="timer" aria-label="Countdown to FanFest 2026">
          {[
            ["Days", time.d],
            ["Hours", time.h],
            ["Minutes", time.m],
            ["Seconds", time.s],
          ].map(([label, val]) => (
            <div className="countdown__item" key={label}>
              <span className="countdown__num">{String(val).padStart(2, "0")}</span>
              <span className="countdown__label">{label}</span>
            </div>
          ))}
        </div>

        <div className="stat-strip">
          {STATS.map((s) => (
            <div className="stat-strip__item" key={s.label}>
              <span className="stat-strip__value">{s.value}</span>
              <span className="stat-strip__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
