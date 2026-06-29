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
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 0 0 0-4.5H6v4.5Zm0 0H3.75m2.25 0v4.5m0-4.5h4.5M6 15h2.25" />
        </svg>
      ),
    },
    {
      title: "Local Expertise",
      desc: "Deep-rooted in Tier-2 markets like Theni, Tamil Nadu, we understand the unique needs of regional SMEs better than anyone.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
      ),
    },
    {
      title: "ROI-Driven",
      desc: "Every solution we build delivers measurable returns — faster operations, reduced costs, and stronger digital presence.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
        </svg>
      ),
    },
    {
      title: "Faster Delivery",
      desc: "We move fast without compromising quality. Agile processes and local teams mean quicker turnarounds for your business.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      ),
    },
    {
      title: "Transparent Process",
      desc: "No hidden steps, no surprises. You&apos;re involved at every stage — from requirements to final deployment.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        </svg>
      ),
    },
    {
      title: "Long-Term Support",
      desc: "Our relationship doesn&apos;t end at launch. We offer ongoing Annual Maintenance Contracts to keep your systems running.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
        </svg>
      ),
    },
  ];

  // Process steps split into rows of 4
  const phase1 = [
    { step: "01", title: "Business Analysis", desc: "We understand your business inside-out before writing a single line of code." },
    { step: "02", title: "Requirement Gathering", desc: "Structured discovery sessions to capture every functional and technical need." },
    { step: "03", title: "System Design", desc: "Architecture blueprints and UI/UX prototypes reviewed and approved by you." },
    { step: "04", title: "Development", desc: "Agile sprints with regular demos — you see progress every week." },
  ];

  const phase2 = [
    { step: "07", title: "Post-Launch Support", desc: "Ongoing AMC, system updates, and technical support whenever you need us." },
    { step: "06", title: "Deployment", desc: "Smooth go-live with zero downtime and comprehensive team training." },
    { step: "05", title: "Testing & QA", desc: "Rigorous quality checks across functionality, performance, and security." },
    { step: "04b", title: "Approval", desc: "Client sign-off on every milestone before the next phase begins." },
  ];

  return (
    <>
      <Hero
        title={`Who We <span class="text-gradient">Are</span>`}
        subtitle="A hybrid digital transformation and live-project training company based in Theni, Tamil Nadu — bridging the gap between academic learning and industrial execution."
        eyebrow="Our Story"
        isPage
      />

      {/* Story */}
      <Section
        title="A Local Company with a Big Mission"
        subtitle="Born from a vision to empower Tier-2 India with enterprise-grade technology."
      >
        <div className={styles.storyGrid}>
          <div className={styles.storyContent}>
            <h3>Why BYNIXX Exists</h3>
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
          <div className={styles.missionCard}>
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

      {/* Values */}
      <Section
        title="Why Choose BYNIXX"
        subtitle="Six reasons businesses and students across Tamil Nadu trust us."
        dark
      >
        <div className={styles.valuesGrid}>
          {values.map((v, i) => (
            <div key={i} className={styles.valueCard}>
              <div className={styles.valueIcon}>{v.icon}</div>
              <h3>{v.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: v.desc }} />
            </div>
          ))}
        </div>
      </Section>

      {/* How We Work — Graph Flow */}
      <Section
        title="How We Work"
        subtitle="A structured, transparent process — from first conversation to long-term partnership."
      >
        <div className={styles.processFlow}>
          {/* Phase 1: Discovery → Development */}
          <div className={styles.phaseLabel}>Phase 1 — Discovery &amp; Build</div>
          <div className={styles.processRow}>
            {phase1.map((item, i) => (
              <div key={i} className={styles.processStep}>
                <div className={styles.stepCircle}>{item.step}</div>
                <div className={styles.stepBody}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Row turn arrow */}
          <div className={styles.rowConnector}>
            <div className={styles.connectorArrow}>↓</div>
          </div>

          {/* Phase 2: QA → Support (reversed) */}
          <div className={`${styles.phaseLabel}`} style={{ justifyContent: 'flex-end', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            Phase 2 — Launch &amp; Support
            <span style={{ width: '20px', height: '2px', background: 'linear-gradient(135deg, #7c3aed, #1a56db)', display: 'inline-block', borderRadius: '2px' }} />
          </div>
          <div className={styles.processRow}>
            {phase2.map((item, i) => (
              <div key={i} className={styles.processStep}>
                <div className={styles.stepCircle}>{item.step}</div>
                <div className={styles.stepBody}>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Ready to Partner with BYNIXX?"
        subtitle="Let's talk about how we can digitally transform your business or kickstart your tech career."
        dark
      >
        <div className={styles.ctaCard}>
          <h3>Talk to Our Team</h3>
          <p>Based in Theni, Tamil Nadu — locally present, enterprise-ready.</p>
          <div className={styles.ctaActions}>
            <a href="/contact" className="btn-primary">
              Contact Us
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="/training" className={styles.btnOutline}>
              Explore Training
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
