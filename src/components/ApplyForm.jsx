import { useState } from "react";
import "./ApplyForm.css";

const COUNTRIES = [
  "India",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "Philippines",
  "Indonesia",
  "Brazil",
  "Other",
];

const NICHES = [
  "Gaming & Esports",
  "Lifestyle & Vlogging",
  "Fashion & Beauty",
  "Food & Cooking",
  "Fitness & Health",
  "Tech & Reviews",
  "Music & Entertainment",
  "Education & How-to",
  "Travel",
  "Art & Design",
  "Comedy & Skits",
  "Other",
];

const PLATFORMS = ["YouTube", "Instagram", "TikTok", "Twitch", "Podcast", "X (Twitter)", "Other"];
const FOLLOWER_RANGES = ["1K – 10K", "10K – 50K", "50K – 100K", "100K – 500K", "500K – 1M", "1M+"];
const VIEW_RANGES = ["Under 1K", "1K – 10K", "10K – 50K", "50K – 100K", "100K – 500K", "500K+"];
const INTERESTS = [
  "Hosting a Panel or Talk",
  "Meet & Greet Booth",
  "Creator Collaborations",
  "Brand Sponsorship Opportunities",
  "Live Content Challenges",
];
const SOURCES = ["Instagram", "YouTube", "TikTok", "From another creator", "Email / Newsletter", "Google Search", "Other"];

const INITIAL = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  country: "",
  city: "",
  handle: "",
  niche: "",
  platforms: [],
  followers: "",
  avgViews: "",
  profileLink: "",
  otherLinks: "",
  interests: [],
  about: "",
  experience: "",
  source: "",
  agreeTerms: false,
  agreeMedia: false,
  agreeUpdates: false,
};

function toggleArrayValue(arr, value) {
  return arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value];
}

export default function ApplyForm() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key, value) => setForm((f) => ({ ...f, [key]: value }));

  function validate() {
    const e = {};
    if (!form.firstName.trim()) e.firstName = "First name is required.";
    if (!form.lastName.trim()) e.lastName = "Last name is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email address.";
    if (!form.country) e.country = "Select your country.";
    if (!form.handle.trim()) e.handle = "Your creator handle is required.";
    if (!form.niche) e.niche = "Select your content niche.";
    if (form.platforms.length === 0) e.platforms = "Select at least one platform.";
    if (!form.followers) e.followers = "Select your follower range.";
    if (!form.profileLink.trim()) e.profileLink = "Your primary profile link is required.";
    if (!form.about.trim()) e.about = "Tell us why you want to join.";
    if (!form.agreeTerms) e.agreeTerms = "You must agree to continue.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!validate()) {
      const firstKey = Object.keys(errors)[0];
      document.getElementById(firstKey)?.focus();
      return;
    }
    setSubmitted(true);
    window.scrollTo({ top: document.getElementById("apply").offsetTop - 100, behavior: "smooth" });
  }

  if (submitted) {
    return (
      <section className="section" id="apply">
        <div className="wrap">
          <div className="form-success">
            <span className="form-success__icon">🎉</span>
            <h2>You're In the Queue, {form.firstName || "Creator"}!</h2>
            <p>
              Thanks for applying to FanFest 2026. Our team reviews every
              submission and typically responds within 5–7 business days.
              Keep an eye on <strong>{form.email || "your inbox"}</strong>.
            </p>
            <button className="btn btn-ghost" onClick={() => { setForm(INITIAL); setSubmitted(false); }}>
              Submit Another Application
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section" id="apply">
      <div className="wrap">
        <div className="section-head">
          <span className="eyebrow">Application</span>
          <h2>
            Apply as a <span className="grad-text">Creator</span>
          </h2>
          <p>Fill in the form below and we'll review your application within 5–7 business days.</p>
        </div>

        <form className="apply-form" onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend>Personal Information</legend>
            <div className="form-grid">
              <Field label="First Name" required error={errors.firstName}>
                <input id="firstName" value={form.firstName} onChange={(e) => set("firstName", e.target.value)} />
              </Field>
              <Field label="Last Name" required error={errors.lastName}>
                <input id="lastName" value={form.lastName} onChange={(e) => set("lastName", e.target.value)} />
              </Field>
              <Field label="Email Address" required error={errors.email}>
                <input id="email" type="email" value={form.email} onChange={(e) => set("email", e.target.value)} />
              </Field>
              <Field label="Phone Number">
                <input id="phone" type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} />
              </Field>
              <Field label="Country" required error={errors.country}>
                <select id="country" value={form.country} onChange={(e) => set("country", e.target.value)}>
                  <option value="">Select your country</option>
                  {COUNTRIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="City">
                <input id="city" value={form.city} onChange={(e) => set("city", e.target.value)} />
              </Field>
            </div>
          </fieldset>

          <fieldset>
            <legend>Creator Profile</legend>
            <div className="form-grid">
              <Field label="Primary Creator Handle / Name" required error={errors.handle}>
                <input id="handle" value={form.handle} onChange={(e) => set("handle", e.target.value)} />
              </Field>
              <Field label="Content Niche" required error={errors.niche}>
                <select id="niche" value={form.niche} onChange={(e) => set("niche", e.target.value)}>
                  <option value="">Select your niche</option>
                  {NICHES.map((n) => <option key={n}>{n}</option>)}
                </select>
              </Field>

              <Field label="Primary Platform(s)" required error={errors.platforms} full>
                <div className="checkbox-row" id="platforms">
                  {PLATFORMS.map((p) => (
                    <label className="checkbox-chip" key={p}>
                      <input
                        type="checkbox"
                        checked={form.platforms.includes(p)}
                        onChange={() => set("platforms", toggleArrayValue(form.platforms, p))}
                      />
                      {p}
                    </label>
                  ))}
                </div>
              </Field>

              <Field label="Total Followers / Subscribers" required error={errors.followers}>
                <select id="followers" value={form.followers} onChange={(e) => set("followers", e.target.value)}>
                  <option value="">Select range</option>
                  {FOLLOWER_RANGES.map((r) => <option key={r}>{r}</option>)}
                </select>
              </Field>
              <Field label="Average Views per Post">
                <select id="avgViews" value={form.avgViews} onChange={(e) => set("avgViews", e.target.value)}>
                  <option value="">Select range</option>
                  {VIEW_RANGES.map((r) => <option key={r}>{r}</option>)}
                </select>
              </Field>

              <Field label="Primary Channel / Profile Link" required error={errors.profileLink}>
                <input id="profileLink" placeholder="https://" value={form.profileLink} onChange={(e) => set("profileLink", e.target.value)} />
              </Field>
              <Field label="Other Social Media Links">
                <input id="otherLinks" value={form.otherLinks} onChange={(e) => set("otherLinks", e.target.value)} />
              </Field>
            </div>
          </fieldset>

          <fieldset>
            <legend>Participation Preferences</legend>
            <div className="form-grid">
              <Field label="Interested In (select all that apply)" full>
                <div className="checkbox-row">
                  {INTERESTS.map((i) => (
                    <label className="checkbox-chip" key={i}>
                      <input
                        type="checkbox"
                        checked={form.interests.includes(i)}
                        onChange={() => set("interests", toggleArrayValue(form.interests, i))}
                      />
                      {i}
                    </label>
                  ))}
                </div>
              </Field>

              <Field label="Tell Us About Yourself & Why You Want to Join" required error={errors.about} full>
                <textarea id="about" rows={4} value={form.about} onChange={(e) => set("about", e.target.value)} />
              </Field>

              <Field label="Previous Event Experience" full>
                <textarea id="experience" rows={3} value={form.experience} onChange={(e) => set("experience", e.target.value)} />
              </Field>

              <Field label="How Did You Hear About FanFest 2026?">
                <select id="source" value={form.source} onChange={(e) => set("source", e.target.value)}>
                  <option value="">Select one</option>
                  {SOURCES.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
            </div>
          </fieldset>

          <div className="agreements">
            <label className="checkbox-line">
              <input
                id="agreeTerms"
                type="checkbox"
                checked={form.agreeTerms}
                onChange={(e) => set("agreeTerms", e.target.checked)}
              />
              I agree to FanFest 2026's Terms & Conditions and Creator Code of Conduct. *
            </label>
            {errors.agreeTerms && <span className="field-error">{errors.agreeTerms}</span>}

            <label className="checkbox-line">
              <input type="checkbox" checked={form.agreeMedia} onChange={(e) => set("agreeMedia", e.target.checked)} />
              I consent to photos and videos of me being used in FanFest marketing materials.
            </label>

            <label className="checkbox-line">
              <input type="checkbox" checked={form.agreeUpdates} onChange={(e) => set("agreeUpdates", e.target.checked)} />
              Keep me updated with FanFest news and future opportunities.
            </label>
          </div>

          <button type="submit" className="btn btn-primary form-submit">
            Submit My Application →
          </button>
          <p className="form-footnote">
            Applications close June 30, 2026. We'll respond within 5–7 business days. Limited spots available.
          </p>
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, error, full, children }) {
  return (
    <div className={`field ${full ? "field--full" : ""}`}>
      <label className="field__label" htmlFor={children?.props?.id}>
        {label} {required && <span className="field__required">*</span>}
      </label>
      {children}
      {error && <span className="field-error">{error}</span>}
    </div>
  );
}
