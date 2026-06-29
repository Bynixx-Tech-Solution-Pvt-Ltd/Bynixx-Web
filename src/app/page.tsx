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
      emoji: "🏭",
    },
    {
      quote:
        "The internship gave real industry experience, not just theory. I worked on live client projects from day one.",
      author: "Intern Graduate",
      role: "Software Developer",
      emoji: "👨‍💻",
    },
  ];

  return (
    <>
      <Hero
        title={`Building <span class="text-gradient">Intelligent</span> Digital Systems for Real Businesses`}
        subtitle="BYNIXX Tech Solutions empowers small and medium industries with enterprise-grade ERP systems, automation tools, and modern websites — while building industry-ready talent through live project execution."
        primaryAction={{ label: "Get Free Digital Audit", href: "/contact" }}
        secondaryAction={{ label: "Explore Solutions", href: "/solutions" }}
        eyebrow="Theni's Leading Tech Company"
        trustItems={["50+ Projects Delivered", "100+ Students Trained", "Local Expert Support"]}
      />

      {/* Stats Strip */}
      <section className={styles.statsStrip} id="stats">
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

      {/* Services */}
      <Section
        title="Our Digital Solutions"
        subtitle="Enterprise-grade technology, tailored for small and medium businesses in Theni and beyond."
        id="solutions"
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
        id="problems"
      >
        <div className={styles.problemGrid}>
          <div className={styles.problemCard}>
            <div className={styles.problemCardHeader}>
              <span style={{ fontSize: '1.8rem' }}>🏭</span>
              <h3>For Businesses</h3>
            </div>
            <ul className={styles.problemList}>
              <li>❌ Manual, error-prone operations</li>
              <li>❌ Lack of process automation</li>
              <li>❌ Poor or non-existent digital presence</li>
              <li>❌ Dependence on unreliable freelancers</li>
            </ul>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.problemCardHeader}>
              <span style={{ fontSize: '1.8rem' }}>🎓</span>
              <h3>For Students</h3>
            </div>
            <ul className={styles.problemList}>
              <li>❌ Purely theoretical education</li>
              <li>❌ No real project exposure</li>
              <li>❌ Low employability on graduation</li>
              <li>❌ Skill gap with industry expectations</li>
            </ul>
          </div>
          <div className={styles.problemCard}>
            <div className={styles.problemCardHeader}>
              <span style={{ fontSize: '1.8rem' }}>✅</span>
              <h3>The BYNIXX Solution</h3>
            </div>
            <ul className={styles.problemList}>
              <li>✅ Affordable, scalable ERP systems</li>
              <li>✅ Structured development process</li>
              <li>✅ Local on-ground expert support</li>
              <li>✅ Live-project execution model</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Training */}
      <Section
        title="Training & Internship Programs"
        subtitle="Learn through live client projects. Not simulations — real work that matters."
        id="training"
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
        id="industries"
      >
        <div className={styles.industryGrid}>
          {industries.map((ind, i) => (
            <div key={i} className={styles.industryCard}>
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
        id="testimonials"
      >
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialCard}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.testimonialAuthor}>
                <div className={styles.authorAvatar}>{t.emoji}</div>
                <div>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section
        title="Ready to Transform Your Business?"
        subtitle="Whether you need a custom solution or want to launch your tech career, we're right here in Theni."
        dark
        id="cta"
      >
        <div className={styles.ctaBox}>
          <h3>Start with a Free Digital Audit</h3>
          <p>
            Join growing businesses and ambitious students who have already partnered with BYNIXX Tech Solutions
            to build, automate, and thrive.
          </p>
          <div className={styles.ctaActions}>
            <a href="/contact" className="btn-primary" id="cta-contact">
              Get Free Consultation
              <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
            <a href="/training" className={styles.btnOutline} id="cta-training">
              Explore Training
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
