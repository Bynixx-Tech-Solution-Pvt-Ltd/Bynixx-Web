import Hero from "@/components/ui/hero/Hero";
import Section from "@/components/ui/section/Section";
import CourseCard from "@/components/ui/card/CourseCard";
import styles from "../page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training & Internships – BYNIXX Tech Solutions",
  description:
    "Live-project internships (30–90 days) and tech bootcamps for school and college students. Gain real industry experience — not just classroom theory.",
};

export default function Training() {
  const programs = [
    {
      title: "Live Project Internship",
      duration: "30–90 Days",
      level: "All Levels",
      price: "Affordable",
      href: "/training-enrollment",
    },
    {
      title: "Tech Bootcamp",
      duration: "Flexible Schedule",
      level: "Beginner",
      price: "Affordable",
      href: "/training-enrollment",
    },
  ];

  const internshipFeatures = [
    {
      icon: "💻",
      title: "Real Client Projects",
      desc: "Work on live projects for actual BYNIXX clients — not simulated assignments or toy projects.",
    },
    {
      icon: "🏢",
      title: "Industry-Level Practices",
      desc: "Learn code reviews, version control, agile sprints, and deployment pipelines used in real companies.",
    },
    {
      icon: "📜",
      title: "Performance-Based Certification",
      desc: "Earn a certificate that reflects your actual contribution — verified by client project outcomes.",
    },
    {
      icon: "👨‍💼",
      title: "Mentorship by Practitioners",
      desc: "Guided by professionals who build and deliver real software daily — not just lecturers.",
    },
    {
      icon: "🚀",
      title: "Career-Oriented Learning",
      desc: "Build a portfolio of real work. Walk out with projects you can confidently present to employers.",
    },
    {
      icon: "🔗",
      title: "Industry Network Access",
      desc: "Get connected to BYNIXX's growing client and partner network for placement and freelance opportunities.",
    },
  ];

  const bootcampTopics = [
    { name: "Web Development Fundamentals", icon: "🌐" },
    { name: "Frontend with React & Next.js", icon: "⚛️" },
    { name: "Backend with Node.js & APIs", icon: "🔧" },
    { name: "Database Design (SQL & NoSQL)", icon: "🗄️" },
    { name: "Version Control with Git", icon: "📂" },
    { name: "Project Deployment & DevOps Basics", icon: "🚀" },
  ];

  const whoShouldJoin = [
    {
      title: "Final Year Engineering Students",
      desc: "Complete your mandatory industrial training while building a real-world portfolio.",
    },
    {
      title: "Freshers & Recent Graduates",
      desc: "Bridge the gap between your degree and your first developer job.",
    },
    {
      title: "School Students (Bootcamp)",
      desc: "Get a head start on coding with our school-friendly tech bootcamps.",
    },
    {
      title: "Career Switchers",
      desc: "Transition into tech with practical, project-driven learning — no prior CS degree required.",
    },
  ];

  return (
    <>
      <Hero
        title="Learn by Doing. Build What's Real."
        subtitle="BYNIXX's training programs give you hands-on live-project experience — because the fastest way to become a great developer is to work on real problems, for real clients."
        primaryAction={{ label: "Enroll Now", href: "/training-enrollment" }}
        secondaryAction={{ label: "View Programs", href: "#programs" }}
      />

      <Section
        id="programs"
        title="Our Training Programs"
        subtitle="From live internships to focused bootcamps — designed to make you industry-ready."
      >
        <div className={styles.grid}>
          {programs.map((program, index) => (
            <CourseCard key={index} {...program} />
          ))}
        </div>
      </Section>

      <Section
        title="Live Project Internship"
        subtitle="30 to 90 days of real work experience — the edge that separates you from other candidates."
        dark
      >
        <div className={styles.grid}>
          {internshipFeatures.map((f, i) => (
            <div key={i} className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
              <span style={{ fontSize: "2rem" }}>{f.icon}</span>
              <h3 style={{ marginTop: "1rem", marginBottom: "0.8rem" }}>{f.title}</h3>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Tech Bootcamp Topics"
        subtitle="Practical, career-oriented coding skills for school and college students."
      >
        <div className={styles.topicsGrid}>
          {bootcampTopics.map((topic, i) => (
            <div key={i} className={`glass ${styles.topicChip}`}>
              <span>{topic.icon}</span>
              <span>{topic.name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Who Should Join?"
        subtitle="BYNIXX training programs are built for anyone ready to go beyond textbooks."
        dark
      >
        <div className={styles.grid}>
          {whoShouldJoin.map((item, i) => (
            <div key={i} className="glass" style={{ padding: "2rem", borderRadius: "20px" }}>
              <h4 style={{ marginBottom: "0.8rem", color: "var(--primary)" }}>{item.title}</h4>
              <p style={{ color: "var(--text-secondary)", lineHeight: "1.7" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        title="Ready to Launch Your Tech Career?"
        subtitle="Apply today and start working on real projects with real clients."
      >
        <div className={styles.ctaBox + " glass"}>
          <h3>Limited Seats per Cohort</h3>
          <p>
            We keep batches small to ensure every intern gets personalized mentorship and meaningful project work.
            Apply early to secure your spot.
          </p>
          <div className={styles.ctaActions}>
            <a href="/training-enrollment" className="btn-primary">
              Enroll Now
            </a>
            <a href="/about" className={styles.btnOutline}>
              Learn About Us
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
