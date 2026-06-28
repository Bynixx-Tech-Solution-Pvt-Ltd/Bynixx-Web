import Hero from "@/components/ui/hero/Hero";
import Section from "@/components/ui/section/Section";
import styles from "./about.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us – BYNIXX Tech Solutions",
  description:
    "BYNIXX Tech Solutions is a hybrid digital transformation and live-project training company based in Theni, Tamil Nadu. We bridge academic learning with industrial execution.",
};

export default function About() {
  const values = [
    {
      title: "Hybrid Model",
      desc: "We combine software delivery with live-project training — creating industry-ready professionals while solving real business problems.",
    },
    {
      title: "Local Expertise",
      desc: "Deep-rooted in Tier-2 markets like Theni, Tamil Nadu, we understand the unique needs of regional SMEs better than anyone.",
    },
    {
      title: "ROI-Driven",
      desc: "Every solution we build delivers measurable returns — faster operations, reduced costs, and stronger digital presence.",
    },
    {
      title: "Faster Delivery",
      desc: "We move fast without compromising quality. Agile processes and local teams mean quicker turnarounds for your business.",
    },
    {
      title: "Transparent Process",
      desc: "No hidden steps, no surprises. You&apos;re involved at every stage — from requirements to final deployment.",
    },
    {
      title: "Long-Term Support",
      desc: "Our relationship doesn&apos;t end at launch. We offer ongoing Annual Maintenance Contracts to keep your systems running.",
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
        subtitle="A hybrid digital transformation and live-project training company based in Theni, Tamil Nadu — bridging the gap between academic learning and industrial execution."
      />

      <Section
        title="Our Story"
        subtitle="Born from a vision to empower Tier-2 India with enterprise-grade technology."
      >
        <div className={styles.storyGrid}>
          <div className={styles.storyContent}>
            <h3>A Local Company with a Big Mission</h3>
            <p>
              BYNIXX Tech Solutions was founded to address a very real problem: small and medium
              enterprises in Theni and across Tamil Nadu were being left behind in the digital revolution.
              They needed technology solutions that were affordable, customizable, and supported locally — not
              generic software from distant vendors.
            </p>
            <p>
              At the same time, hundreds of engineering graduates were entering the workforce with strong
              theoretical knowledge but little real-world project exposure — making them under-prepared for
              industry roles.
            </p>
            <p>
              BYNIXX was built to solve both problems simultaneously. Our hybrid model delivers enterprise
              technology solutions to businesses while training aspiring developers through the same live projects.
            </p>
          </div>
          <div className={`${styles.missionCard} glass`}>
            <div className={styles.missionBlock}>
              <strong>Our Mission</strong>
              <p>
                To bridge the gap between academic learning and industrial execution by delivering enterprise-grade
                digital solutions while creating industry-ready professionals through real-world project experience.
              </p>
            </div>
            <div className={styles.missionBlock}>
              <strong>Our Vision</strong>
              <p>
                To become the leading Tier-2 digital transformation and industry-integrated tech ecosystem
                in Tamil Nadu — combining software development, training, and innovation into a scalable model.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="Why Choose BYNIXX"
        subtitle="Six reasons businesses and students across Tamil Nadu trust us."
        dark
      >
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} className={`${styles.valueCard} glass`}>
              <div className={styles.valueIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                </svg>
              </div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="How We Work"
        subtitle="A structured, transparent process — from first conversation to long-term partnership."
      >
        <div className={styles.processTimeline}>
          {howWeWork.map((item, i) => (
            <div key={i} className={styles.processItem}>
              <div className={styles.processNumber}>{item.step}</div>
              <div className={styles.processBody}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Ready to Partner with BYNIXX?"
        subtitle="Let&apos;s talk about how we can digitally transform your business or kickstart your tech career."
        dark
      >
        <div className={`${styles.ctaCard} glass`}>
          <h3>Talk to Our Team</h3>
          <p>Based in Theni, Tamil Nadu — locally present, enterprise-ready.</p>
          <a href="/contact" className="btn-primary">
            Contact Us
          </a>
        </div>
      </Section>
    </>
  );
}
