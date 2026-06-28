import Hero from "@/components/ui/hero/Hero";
import Section from "@/components/ui/section/Section";
import ServiceCard from "@/components/ui/card/ServiceCard";
import CourseCard from "@/components/ui/card/CourseCard";
import styles from "./page.module.css";

export const metadata = {
  title: "BYNIXX Tech Solutions – Digital Transformation & Live-Project Training",
  description:
    "BYNIXX Tech Solutions empowers SMEs with enterprise-grade ERP systems, automation tools & modern websites, while building industry-ready talent through live project execution.",
};

export default function Home() {
  const services = [
    {
      title: "Website Development",
      description:
        "Business websites for SMEs with mobile-responsive design, SEO-ready structure, and fast deployment.",
      icon: "🌐",
      href: "/solutions",
    },
    {
      title: "Custom ERP Solutions",
      description:
        "Inventory management, billing & invoicing automation, workflow tracking — modular and scalable.",
      icon: "⚙️",
      href: "/solutions",
    },
    {
      title: "Workflow Automation",
      description:
        "Digitize manual processes, replace outdated systems, and improve operational efficiency.",
      icon: "🤖",
      href: "/solutions",
    },
  ];

  const courses = [
    {
      title: "Live Project Internship",
      duration: "30–90 Days",
      level: "All Levels",
      price: "Affordable",
      href: "/training",
    },
    {
      title: "Tech Bootcamp",
      duration: "Flexible",
      level: "Beginner",
      price: "Affordable",
      href: "/training",
    },
    {
      title: "IT Consulting & AMC",
      duration: "Ongoing",
      level: "Enterprise",
      price: "Custom",
      href: "/solutions",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects Delivered" },
    { value: "100+", label: "Students Trained" },
    { value: "25+", label: "SME Clients Served" },
    { value: "5+", label: "Industries Covered" },
  ];

  const industries = [
    { name: "Textile Manufacturing", icon: "🧵" },
    { name: "Food Processing", icon: "🥦" },
    { name: "Industrial Machinery", icon: "🏭" },
    { name: "Agriculture & Agro Business", icon: "🌾" },
    { name: "Retail & SMEs", icon: "🛒" },
  ];

  const testimonials = [
    {
      quote:
        "BYNIXX helped us move from manual billing to a complete ERP system. Our operations are now faster and more accurate.",
      author: "Business Owner",
      role: "Manufacturing SME, Theni",
    },
    {
      quote:
        "The internship gave real industry experience, not just theory. I worked on live client projects from day one.",
      author: "Intern Graduate",
      role: "Software Developer",
    },
  ];

  return (
    <>
      <Hero
        title="Building Intelligent Digital Systems for Real-World Businesses"
        subtitle="BYNIXX Tech Solutions empowers small and medium industries with enterprise-grade ERP systems, automation tools, and modern websites — while building industry-ready talent through live project execution."
        primaryAction={{ label: "Get Free Digital Audit", href: "/contact" }}
        secondaryAction={{ label: "Start Your Project", href: "/solutions" }}
      />

      {/* Stats Strip */}
      <section className={styles.statsStrip}>
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((stat, i) => (
              <div key={i} className={styles.statItem}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        title="Our Digital Solutions"
        subtitle="Enterprise-grade technology, tailored for small and medium businesses in Theni and beyond."
      >
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      {/* Problem We Solve */}
      <Section
        title="The Problems We Solve"
        subtitle="Real challenges faced by businesses and students — solved by BYNIXX."
        dark
      >
        <div className={styles.problemGrid}>
          <div className="glass" style={{ padding: "2.5rem", borderRadius: "20px" }}>
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
              🏭 For Businesses
            </h3>
            <ul className={styles.problemList}>
              <li>❌ Manual, error-prone operations</li>
              <li>❌ Lack of process automation</li>
              <li>❌ Poor or non-existent digital presence</li>
              <li>❌ Dependence on unreliable freelancers</li>
            </ul>
          </div>
          <div className="glass" style={{ padding: "2.5rem", borderRadius: "20px" }}>
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
              🎓 For Students
            </h3>
            <ul className={styles.problemList}>
              <li>❌ Purely theoretical education</li>
              <li>❌ No real project exposure</li>
              <li>❌ Low employability on graduation</li>
              <li>❌ Skill gap with industry expectations</li>
            </ul>
          </div>
          <div className="glass" style={{ padding: "2.5rem", borderRadius: "20px" }}>
            <h3 style={{ marginBottom: "1.5rem", fontSize: "1.4rem" }}>
              ✅ The BYNIXX Solution
            </h3>
            <ul className={styles.problemList}>
              <li>✅ Affordable, scalable ERP systems</li>
              <li>✅ Structured development process</li>
              <li>✅ Local on-ground expert support</li>
              <li>✅ Live-project execution model</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section
        title="Training & Internship Programs"
        subtitle="Learn through live client projects. Not simulations — real work that matters."
      >
        <div className={styles.grid}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </Section>

      {/* Industries */}
      <Section
        title="Industries We Serve"
        subtitle="Deep domain knowledge across key sectors in Tamil Nadu's economy."
        dark
      >
        <div className={styles.industryGrid}>
          {industries.map((ind, i) => (
            <div key={i} className={`glass ${styles.industryCard}`}>
              <span className={styles.industryIcon}>{ind.icon}</span>
              <p className={styles.industryName}>{ind.name}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section
        title="What Our Clients & Trainees Say"
        subtitle="Real impact. Real results. From Theni to the industry."
      >
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={`glass ${styles.testimonialCard}`}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <strong>{t.author}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Ready to Transform Your Business?"
        subtitle="Whether you need a custom solution or want to launch your tech career, we're right here in Theni."
      >
        <div className={styles.ctaBox + " glass"}>
          <h3>Start with a Free Digital Audit</h3>
          <p>
            Join growing businesses and ambitious students who have already partnered with BYNIXX Tech Solutions to build, automate, and thrive.
          </p>
          <div className={styles.ctaActions}>
            <a href="/contact" className="btn-primary">
              Get Free Consultation
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
