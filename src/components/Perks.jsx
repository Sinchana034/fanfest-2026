import "./Perks.css";

const PERKS = [
  {
    n: "01",
    title: "All-Access Badge",
    desc: "Backstage, VIP zones, the creator lounge, and every event area across all three days.",
  },
  {
    n: "02",
    title: "Complimentary Accommodation",
    desc: "Hotel stay covered for the full event for every verified creator.",
  },
  {
    n: "03",
    title: "Dedicated Creator Stage",
    desc: "Your own scheduled slot on the main creator stage or a breakout room.",
  },
  {
    n: "04",
    title: "Professional Content Crew",
    desc: "On-site videographers and photographers ready to capture your FanFest moments.",
  },
  {
    n: "05",
    title: "Promotion Package",
    desc: "Featured across official FanFest social channels, site, and an email list of 500K+ subscribers.",
  },
  {
    n: "06",
    title: "Exclusive Merch Kit",
    desc: "A limited-edition FanFest 2026 creator kit shipped to you ahead of the event.",
  },
];

export default function Perks() {
  return (
    <section className="section section--tinted" id="perks">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Creator Perks</span>
          <h2>
            What <span className="grad-text">You Get</span>
          </h2>
          <p>
            Every creator who joins FanFest 2026 gets a full support package
            designed to help you shine.
          </p>
        </div>

        <div className="perks-grid">
          {PERKS.map((p) => (
            <div className="perk" key={p.n}>
              <span className="perk__num">{p.n}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
