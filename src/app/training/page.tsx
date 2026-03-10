import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import CourseCard from "@/components/Cards/CourseCard";
import styles from "../page.module.css";

export default function Training() {
    const allCourses = [
        {
            title: "Frontend Mastery",
            duration: "10 Weeks",
            level: "Beginner",
            price: "$800",
            href: "/training/frontend"
        },
        {
            title: "Backend Engineering",
            duration: "12 Weeks",
            level: "Intermediate",
            price: "$950",
            href: "/training/backend"
        },
        {
            title: "Data Science & AI",
            duration: "14 Weeks",
            level: "Advanced",
            price: "$1200",
            href: "/training/data"
        },
        {
            title: "Cloud Engineering (AWS)",
            duration: "8 Weeks",
            level: "Intermediate",
            price: "$900",
            href: "/training/cloud"
        },
        {
            title: "UI/UX Design Systems",
            duration: "6 Weeks",
            level: "Beginner",
            price: "$600",
            href: "/training/design"
        },
        {
            title: "Cybersecurity Bootcamp",
            duration: "12 Weeks",
            level: "Advanced",
            price: "$1100",
            href: "/training/cyber"
        }
    ];

    return (
        <>
            <Hero
                title="Master the Skills of Tomorrow."
                subtitle="Up-skill your team or start your journey in tech with our industry-driven curriculum."
                primaryAction={{ label: "View Catalog", href: "#catalog" }}
            />

            <Section
                title="Training Catalog"
                subtitle="Choose from a variety of paths designed to make you industry-ready."
            >
                <div id="catalog" className={styles.grid}>
                    {allCourses.map((course, index) => (
                        <CourseCard key={index} {...course} />
                    ))}
                </div>
            </Section>

            <Section
                title="Learning Experience"
                subtitle="We focus on project-based learning to ensure practical mastery."
                dark
            >
                <div className={styles.grid}>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                        <h3>Practical Projects</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Work on real-world projects that you can showcase to employers.</p>
                    </div>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                        <h3>Expert Mentors</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Learn directly from senior engineers working at top tech firms.</p>
                    </div>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                        <h3>Job Placement</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Get career guidance and access to our network of hiring partners.</p>
                    </div>
                </div>
            </Section>
        </>
    );
}
