import { useState } from "react";
import "./FAQ.css";

const ITEMS = [
  {
    q: "Is there a minimum follower count to apply?",
    a: "There's no hard minimum — we evaluate creators holistically based on content quality, engagement, and audience connection. Even nano-creators with highly engaged communities are welcome.",
  },
  {
    q: "Is travel reimbursement provided?",
    a: "We cover accommodation for all selected creators. Travel reimbursement is offered case-by-case for international creators, with details shared in your acceptance letter.",
  },
  {
    q: "Can I apply as a team or co-creators?",
    a: "Yes! You can apply as a duo or small team. List every member in the application and include all relevant social links.",
  },
  {
    q: "What is the Creator Code of Conduct?",
    a: "FanFest 2026 requires all participating creators to maintain a respectful, inclusive environment for fans and fellow creators. The full policy is available on our website.",
  },
  {
    q: "Will I be paid to participate?",
    a: "Selected creators receive a full perks package including accommodation, a dedicated stage slot, and promotional exposure. Paid partnerships are available separately through our brand matching program.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section" id="faq">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2>
            Got <span className="grad-text">Questions?</span>
          </h2>
        </div>

        <div className="faq-list">
          {ITEMS.map((item, i) => (
            <div className={`faq-item ${open === i ? "faq-item--open" : ""}`} key={item.q}>
              <button
                className="faq-item__q"
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
              >
                {item.q}
                <span className="faq-item__icon">{open === i ? "−" : "+"}</span>
              </button>
              <div className="faq-item__a">
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
