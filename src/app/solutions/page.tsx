import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import ServiceCard from "@/components/Cards/ServiceCard";
import styles from "../page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Solutions – BYNIXX Tech Solutions",
  description:
    "Website development, custom ERP, workflow automation, IT consulting, and AMC services for small and medium enterprises across Tamil Nadu.",
};

export default function Solutions() {
  const allServices = [
    {
      title: "Website Development",
      description:
        "Professional business websites for SMEs — mobile-responsive, SEO-optimized, and deployed fast. Your digital storefront, built right.",
      icon: "🌐",
      href: "/contact",
    },
    {
      title: "Custom ERP Solutions",
      description:
        "Inventory management, billing & invoicing automation, and workflow tracking tailored specifically to your business operations.",
      icon: "📦",
      href: "/contact",
    },
    {
      title: "Workflow Automation",
      description:
        "Replace slow manual processes with smart, digital workflows. Save time, reduce errors, and run operations more efficiently.",
      icon: "🤖",
      href: "/contact",
    },
    {
      title: "IT Consulting",
      description:
        "Infrastructure planning, digital transformation roadmaps, and system optimization to keep your technology aligned with your goals.",
      icon: "🧩",
      href: "/contact",
    },
    {
      title: "AMC Services",
      description:
        "Annual Maintenance Contracts with ongoing system updates, proactive monitoring, and technical support when you need it most.",
      icon: "🔧",
      href: "/contact",
    },
    {
      title: "Digital Transformation Advisory",
      description:
        "End-to-end guidance for businesses transitioning from legacy systems to modern, scalable digital infrastructure.",
      icon: "🚀",
      href: "/contact",
    },
  ];

  const industries = [
    { name: "Textile Manufacturing", icon: "🧵", desc: "Inventory, order management & production tracking systems." },
    { name: "Food Processing", icon: "🍎", desc: "Quality control, supply chain, and compliance management tools." },
    { name: "Industrial Machinery", icon: "⚙️", desc: "Maintenance scheduling, parts inventory & client portals." },
    { name: "Agriculture & Agro Business", icon: "🌾", desc: "Yield tracking, market pricing, and farmer coordination platforms." },
    { name: "Retail & SMEs", icon: "🛒", desc: "POS integration, e-commerce, and loyalty programs for local businesses." },
  ];

  return (
    <>
      <Hero
        title="Scalable Digital Solutions for Tamil Nadu's Businesses"
        subtitle="We don't sell off-the-shelf software. Every solution we build is tailored to your industry, your processes, and your growth ambitions."
        primaryAction={{ label: "Get Free Digital Audit", href: "/contact" }}
      />

      <Section
        title="Our Services"
        subtitle="From websites to full ERP systems — we handle the technology so you can focus on your business."
      >
        <div className={styles.grid}>
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      <Section
        title="Industries We Specialize In"
        subtitle="Deep domain knowledge across the sectors that drive Tamil Nadu's economy."
        dark
      >
        <div className={styles.industryDetailGrid}>
          {industries.map((ind, i) => (
            <div key={i} className="glass" style={{ padding: "2rem", borderRadius: "20px", display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
              <span style={{ fontSize: "2.5rem", flexShrink: 0 }}>{ind.icon}</span>
              <div>
                <h4 style={{ marginBottom: "0.5rem" }}>{ind.name}</h4>
                <p style={{ color: "var(--text-secondary)", lineHeight: "1.6" }}>{ind.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Why BYNIXX Over Generic Software?"
        subtitle="We're not a SaaS vendor. We're your long-term technology partner."
      >
        <div className={styles.grid}>
          <div className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
            <span style={{ fontSize: "2rem" }}>📍</span>
            <h3 style={{ marginTop: "1rem" }}>Local On-Ground Support</h3>
            <p style={{ color: "var(--text-secondary)", marginTop: "1rem", lineHeight: "1.7" }}>
              We're based in Theni, Tamil Nadu. When you need help, we're right there — not behind a ticket system.
            </p>
          </div>
          <div className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
            <span style={{ fontSize: "2rem" }}>💰</span>
            <h3 style={{ marginTop: "1rem" }}>Affordable for SMEs</h3>
            <p style={{ color: "var(--text-secondary)", marginTop: "1rem", lineHeight: "1.7" }}>
              Enterprise-grade technology at pricing that makes sense for small and medium businesses — no bloated enterprise fees.
            </p>
          </div>
          <div className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
            <span style={{ fontSize: "2rem" }}>🏗️</span>
            <h3 style={{ marginTop: "1rem" }}>Built Around Your Process</h3>
            <p style={{ color: "var(--text-secondary)", marginTop: "1rem", lineHeight: "1.7" }}>
              Your workflows, your terminology, your logic — we build software that fits how YOU work, not the other way around.
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Start with a Free Digital Audit"
        subtitle="We'll analyze your current operations and show you exactly where technology can save you time and money."
        dark
      >
        <div className={styles.ctaBox + " glass"}>
          <h3>No Obligation. 100% Value.</h3>
          <p>
            Our team will visit or connect online to understand your business and recommend the right digital roadmap — completely free.
          </p>
          <div className={styles.ctaActions}>
            <a href="/contact" className="btn-primary">
              Book Your Free Audit
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
