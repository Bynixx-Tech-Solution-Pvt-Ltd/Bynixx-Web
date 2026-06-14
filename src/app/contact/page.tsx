import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "../page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us – BYNIXX Tech Solutions",
  description:
    "Reach out to BYNIXX Tech Solutions in Theni, Tamil Nadu. Get a free digital audit, start your project, or apply for our training programs.",
};

export default function Contact() {
  return (
    <>
      <Hero
        title="Let's Build Something That Matters."
        subtitle="Whether you need a website, a full ERP system, or want to join our live-project training program — we're here to help. Reach out to our team in Theni."
      />

      <Section
        title="Get in Touch"
        subtitle="We typically respond within 24 business hours. For urgent queries, call us directly."
      >
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: "4rem" }}>
          <div className="glass" style={{ padding: "3rem", borderRadius: "20px" }}>
            <ContactForm />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
              <h4 style={{ marginBottom: "0.8rem" }}>📍 Office Address</h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.8" }}>
                Sri Bharathi Nagar,<br />
                Opp. Pons Water Company,<br />
                Koduvalarpatti to Vayalpatti Road,<br />
                Theni, Tamil Nadu – 625532
              </p>
            </div>

            <div className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
              <h4 style={{ marginBottom: "0.8rem" }}>📞 Phone</h4>
              <p style={{ color: "var(--text-secondary)" }}>
                <a href="tel:+917530008380" style={{ color: "var(--primary)", fontWeight: 600 }}>
                  +91 75300 08380
                </a>
              </p>
            </div>

            <div className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
              <h4 style={{ marginBottom: "0.8rem" }}>🕐 Business Hours</h4>
              <p style={{ color: "var(--text-secondary)" }}>Monday – Saturday: 9 AM – 6 PM</p>
              <p style={{ color: "var(--text-secondary)" }}>Sunday: Support Only</p>
            </div>

            <div className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
              <h4 style={{ marginBottom: "0.8rem" }}>🚀 What to Expect</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li style={{ color: "var(--text-secondary)", padding: "0.4rem 0" }}>✅ Free digital audit for businesses</li>
                <li style={{ color: "var(--text-secondary)", padding: "0.4rem 0" }}>✅ Project requirement discussion</li>
                <li style={{ color: "var(--text-secondary)", padding: "0.4rem 0" }}>✅ Training & internship enquiries</li>
                <li style={{ color: "var(--text-secondary)", padding: "0.4rem 0" }}>✅ Custom pricing for your needs</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
