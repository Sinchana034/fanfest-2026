import "./Timeline.css";

const STEPS = [
  {
    date: "May 15 – Jun 30, 2026",
    title: "Applications Open",
    desc: "Submit your creator application with your details and profile links.",
  },
  {
    date: "Jul 1 – Jul 15, 2026",
    title: "Review & Selection",
    desc: "Our team reviews every submission. Shortlisted creators are contacted directly.",
  },
  {
    date: "Jul 20, 2026",
    title: "Confirmation & Onboarding",
    desc: "Selected creators get official confirmation, event details, and an onboarding kit.",
  },
  {
    date: "Aug 14–16, 2026",
    title: "FanFest 2026 — Live",
    desc: "Three days of content, connection, and unforgettable fan experiences.",
  },
];

export default function Timeline() {
  return (
    <section className="section section--tinted" id="timeline">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Key Dates</span>
          <h2>
            Application <span className="grad-text">Timeline</span>
          </h2>
        </div>

        <ol className="timeline">
          {STEPS.map((s, i) => (
            <li className="timeline__item" key={s.title}>
              <span className="timeline__num">{i + 1}</span>
              <div className="timeline__body">
                <span className="timeline__date">{s.date}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
