import "./About.css";

const FEATURES = [
  {
    icon: "🎤",
    title: "Live Panels & Talks",
    desc: "Host your own stage session, run a Q&A, or join a creator roundtable — real conversations with your real fans.",
  },
  {
    icon: "📸",
    title: "Meet & Greet Booths",
    desc: "Dedicated creator booths where fans can chat, snap photos, and grab exclusive merch.",
  },
  {
    icon: "🤝",
    title: "Brand Collaborations",
    desc: "Connect with top-tier sponsors looking for authentic creator partnerships on-site.",
  },
  {
    icon: "🎮",
    title: "Live Content Challenges",
    desc: "Compete in cross-creator content battles, streamed live and judged by the crowd.",
  },
  {
    icon: "🌐",
    title: "Global Streaming Reach",
    desc: "The full event streams to millions worldwide — your content travels far past the venue walls.",
  },
  {
    icon: "🎉",
    title: "Creator After-Party",
    desc: "An exclusive closing-night celebration to network, celebrate, and make memories off-camera.",
  },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">What Is FanFest 2026</span>
          <h2>
            Where Creators <span className="grad-text">Meet Their Fans</span>
          </h2>
          <p>
            Three days of panels, activations, live streams, brand deals,
            and unforgettable fan moments — all under one roof.
          </p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <span className="feature-card__icon">{f.icon}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
