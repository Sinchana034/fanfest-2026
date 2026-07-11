
import "./Hero.css";

const STATS = [
  { value: "AUG 14–16", label: "Event Dates" },
  { value: "2026", label: "Edition" },
  { value: "50K+", label: "Expected Fans" },
  { value: "200+", label: "Creator Spots" },
];


export default function Hero() {

  return (
    <section className="hero" id="top">
      <div className="hero__glow hero__glow--pink" />
      <div className="hero__glow hero__glow--violet" />

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
