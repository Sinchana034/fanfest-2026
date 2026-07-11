import "./Eligibility.css";

const NICHES = [
  ["📹", "YouTubers"],
  ["🎵", "TikTokers"],
  ["📸", "Instagrammers"],
  ["🎙️", "Podcasters"],
  ["🎮", "Streamers"],
  ["✍️", "Bloggers"],
  ["🎨", "Digital Artists"],
  ["💪", "Fitness Creators"],
  ["🍳", "Food Creators"],
  ["👗", "Fashion Creators"],
];

export default function Eligibility() {
  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Eligibility</span>
          <h2>
            Who Can <span className="grad-text">Apply?</span>
          </h2>
          <p>
            We welcome creators across every niche, platform, and audience
            size. If you create — this is for you.
          </p>
        </div>

        <div className="pill-grid">
          {NICHES.map(([icon, label]) => (
            <a href="#apply" className="pill" key={label}>
              <span>{icon}</span>
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
