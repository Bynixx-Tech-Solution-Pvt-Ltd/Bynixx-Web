import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import ServiceCard from "@/components/Cards/ServiceCard";
import styles from "../page.module.css";

export default function Solutions() {
    const allServices = [
        {
            title: "Custom Software Development",
            description: "End-to-end development of bespoke software solutions tailored to your unique business needs.",
            icon: "💻",
            href: "/solutions/software"
        },
        {
            title: "Cloud Infrastructure",
            description: "Optimize your business with scalable, secure, and cost-effective cloud architectures.",
            icon: "☁️",
            href: "/solutions/cloud"
        },
        {
            title: "Mobile App Development",
            description: "Creating native and cross-platform mobile experiences that delight users.",
            icon: "📱",
            href: "/solutions/mobile"
        },
        {
            title: "Data Analytics & BI",
            description: "Turn your data into actionable insights with our expert analytics services.",
            icon: "📊",
            href: "/solutions/data"
        },
        {
            title: "Cybersecurity Audits",
            description: "Protect your digital assets with comprehensive security assessments and hardening.",
            icon: "🛡️",
            href: "/solutions/security"
        },
        {
            title: "Managed IT Services",
            description: "Focus on your core business while we handle your IT infrastructure 24/7.",
            icon: "⚙️",
            href: "/solutions/managed"
        }
    ];

    return (
        <>
            <Hero
                title="Scalable Solutions for the Digital Age."
                subtitle="From startups to enterprises, we provide the technical foundation for your digital growth."
                primaryAction={{ label: "Contact Us", href: "/contact" }}
            />

            <Section
                title="Our Expertise"
                subtitle="We specialize in bringing complex ideas to life with robust and scalable technologies."
            >
                <div className={styles.grid}>
                    {allServices.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </Section>

            <Section
                title="Why Choose Bynixx?"
                subtitle="We don't just write code; we build partnerships for long-term success."
                dark
            >
                <div className={styles.grid}>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                        <h3>Expert Team</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Our engineers are industry veterans with years of experience across multiple domains.</p>
                    </div>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                        <h3>Fast Delivery</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>We use agile methodologies to deliver value quickly without compromising quality.</p>
                    </div>
                    <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                        <h3>24/7 Support</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Our global support team is always available to ensure your systems run smoothly.</p>
                    </div>
                </div>
            </Section>
        </>
    );
}
