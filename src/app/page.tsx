import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import ServiceCard from "@/components/Cards/ServiceCard";
import CourseCard from "@/components/Cards/CourseCard";
import styles from "./page.module.css";

export default function Home() {
  const services = [
    {
      title: "Web Development",
      description: "Custom high-performance websites and web applications built with modern frameworks.",
      icon: "🌐",
      href: "/solutions/web"
    },
    {
      title: "Cloud Architecture",
      description: "Scalable cloud infrastructure design and migration using AWS, Azure, and Google Cloud.",
      icon: "☁️",
      href: "/solutions/cloud"
    },
    {
      title: "AI & Automation",
      description: "Integrating intelligent AI models and automating workflows to enhance productivity.",
      icon: "🤖",
      href: "/solutions/ai"
    }
  ];

  const courses = [
    {
      title: "Full-Stack Engineering",
      duration: "12 Weeks",
      level: "Intermediate",
      price: "$999",
      href: "/training/fullstack"
    },
    {
      title: "Data Science & ML",
      duration: "10 Weeks",
      level: "Advanced",
      price: "$1200",
      href: "/training/datascience"
    },
    {
      title: "Cybersecurity Essentials",
      duration: "8 Weeks",
      level: "Beginner",
      price: "$750",
      href: "/training/cyber"
    }
  ];

  return (
    <>
      <Hero
        title="Innovating the Tech Frontier."
        subtitle="Empowering your business with scalable tech solutions and equipping your team with industry-leading technical expertise."
        primaryAction={{ label: "View Solutions", href: "/solutions" }}
        secondaryAction={{ label: "Explore Courses", href: "/training" }}
      />

      <Section
        title="Our Tech Solutions"
        subtitle="We help businesses scale with modern technology and robust architecture."
      >
        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </Section>

      <Section
        title="Technical Training"
        subtitle="Learn from the best in the industry and master the skills of the future."
        dark
      >
        <div className={styles.grid}>
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </Section>

      <Section
        title="Ready to Transform?"
        subtitle="Whether you need a custom solution or want to upgrade your skills, we're here to help."
      >
        <div className={styles.ctaBox + " glass"}>
          <h3>Start Your Journey Today</h3>
          <p>Join hundreds of businesses and individuals who have scaled their potential with Bynixx.</p>
          <div className={styles.ctaActions}>
            <button className="btn-primary">Connect with Experts</button>
          </div>
        </div>
      </Section>
    </>
  );
}
