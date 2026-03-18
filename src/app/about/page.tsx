import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import styles from "../page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – BYNIXX Tech Solutions",
  description:
    "BYNIXX Tech Solutions is a hybrid digital transformation and live-project training company based in Theni, Tamil Nadu. We bridge academic learning with industrial execution.",
};

export default function About() {
  const values = [
    {
      icon: "🤝",
      title: "Hybrid Model",
      desc: "We combine software service delivery with live-project training — creating industry-ready professionals while solving real business problems.",
    },
    {
      icon: "📍",
      title: "Local Expertise",
      desc: "Deep-rooted in Tier-2 markets like Theni, Tamil Nadu, we understand the unique needs of regional SMEs better than anyone.",
    },
    {
      icon: "💰",
      title: "ROI-Driven Solutions",
      desc: "Every solution we build is designed to deliver measurable returns — faster operations, reduced costs, and better digital presence.",
    },
    {
      icon: "⚡",
      title: "Faster Customization",
      desc: "We move fast without compromising quality. Agile processes and local teams mean quicker turnarounds for your business.",
    },
    {
      icon: "🔍",
      title: "Transparent Process",
      desc: "No hidden steps, no surprises. You're involved at every stage — from requirement gathering to final deployment.",
    },
    {
      icon: "🔧",
      title: "Long-Term AMC Support",
      desc: "Our relationship doesn't end at launch. We offer ongoing Annual Maintenance Contracts to keep your systems running smoothly.",
    },
  ];

  const howWeWork = [
    { step: "01", title: "Business Analysis", desc: "We understand your business inside-out before writing a single line of code." },
    { step: "02", title: "Requirement Gathering", desc: "Structured discovery sessions to capture every functional and technical need." },
    { step: "03", title: "System Design", desc: "Architecture blueprints and UI/UX prototypes reviewed and approved by you." },
    { step: "04", title: "Development", desc: "Agile sprints with regular demos — you see progress every week." },
    { step: "05", title: "Testing & QA", desc: "Rigorous quality checks across functionality, performance, and security." },
    { step: "06", title: "Deployment", desc: "Smooth go-live with zero downtime and comprehensive team training." },
    { step: "07", title: "Post-Launch Support", desc: "Ongoing AMC, system updates, and technical support whenever you need us." },
  ];

  return (
    <>
      <Hero
        title="Who We Are"
        subtitle="BYNIXX Tech Solutions is a hybrid digital transformation and live-project training company based in Theni, Tamil Nadu — bridging the gap between academic learning and industrial execution."
      />

      <Section
        title="Our Story"
        subtitle="Born from a vision to empower Tier-2 India with enterprise-grade technology."
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
          <div>
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.8rem" }}>
              A Local Company with a Big Mission
            </h3>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.9", marginBottom: "1.2rem" }}>
              BYNIXX Tech Solutions was founded to address a very real problem: small and medium
              enterprises in Theni and across Tamil Nadu were being left behind in the digital revolution.
              They needed technology solutions that were affordable, customizable, and supported locally — not
              generic software from distant vendors.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.9", marginBottom: "1.2rem" }}>
              At the same time, hundreds of engineering graduates were entering the workforce with strong
              theoretical knowledge but little real-world project exposure — making them under-prepared for
              industry roles.
            </p>
            <p style={{ color: "var(--text-secondary)", lineHeight: "1.9" }}>
              BYNIXX was built to solve both problems simultaneously. Our hybrid model delivers enterprise
              technology solutions to businesses while training aspiring developers through the same live projects.
            </p>
          </div>
          <div
            className="glass"
            style={{
              padding: "3rem",
              borderRadius: "30px",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            <div style={{ textAlign: "center", fontSize: "3.5rem", marginBottom: "0.5rem" }}>🚀</div>
            <div style={{ borderLeft: "3px solid var(--primary)", paddingLeft: "1.2rem" }}>
              <strong style={{ color: "var(--text-primary)" }}>Our Mission</strong>
              <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem", lineHeight: "1.7" }}>
                To bridge the gap between academic learning and industrial execution by delivering enterprise-grade
                digital solutions while creating industry-ready professionals through real-world project experience.
              </p>
            </div>
            <div style={{ borderLeft: "3px solid var(--secondary)", paddingLeft: "1.2rem" }}>
              <strong style={{ color: "var(--text-primary)" }}>Our Vision</strong>
              <p style={{ color: "var(--text-secondary)", marginTop: "0.5rem", lineHeight: "1.7" }}>
                To become the leading Tier-2 digital transformation and industry-integrated tech ecosystem
                in Tamil Nadu — combining software development, training, and innovation into a scalable model.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Why Choose BYNIXX?"
        subtitle="Six reasons businesses and students across Tamil Nadu trust us."
        dark
      >
        <div className={styles.grid}>
          {values.map((v, i) => (
            <div key={i} className="glass" style={{ padding: "2.5rem", borderRadius: "20px" }}>
              <span style={{ fontSize: "2rem" }}>{v.icon}</span>
              <h3 style={{ marginTop: "1rem", marginBottom: "0.8rem" }}>{v.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="How We Work"
        subtitle="A structured, transparent process — from first conversation to long-term partnership."
      >
        <div className={styles.processGrid}>
          {howWeWork.map((step, i) => (
            <div key={i} className={styles.processStep}>
              <div className={styles.stepNumber}>{step.step}</div>
              <div>
                <h4 className={styles.stepTitle}>{step.title}</h4>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Ready to Partner with BYNIXX?"
        subtitle="Let's talk about how we can digitally transform your business or kickstart your tech career."
        dark
      >
        <div className={styles.ctaBox + " glass"}>
          <h3>Talk to Our Team</h3>
          <p>Based in Theni, Tamil Nadu — locally present, enterprise-ready.</p>
          <div className={styles.ctaActions}>
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
