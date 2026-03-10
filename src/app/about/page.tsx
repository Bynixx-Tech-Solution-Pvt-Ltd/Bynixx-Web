import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import styles from "../page.module.css";

export default function About() {
    return (
        <>
            <Hero
                title="Engineering Excellence since 2024."
                subtitle="Bynixx was founded with a mission to bridge the gap between complex tech challenges and elegant software solutions."
            />

            <Section
                title="Our Story"
                subtitle="Innovation driven by passion and expertise."
            >
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div>
                        <h3 style={{ marginBottom: '1.5rem', fontSize: '2rem' }}>How we started</h3>
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            Born out of a small group of tech enthusiasts, Bynixx has grown into a full-service tech solutions provider.
                            We realized that many businesses struggle with outdated legacy systems, while the next generation of engineers
                            lacks the practical experience needed for modern industry demands.
                        </p>
                        <br />
                        <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            Bynixx was created to solve both problems—providing top-tier technical consulting to businesses and
                            world-class training to aspiring developers.
                        </p>
                    </div>
                    <div className="glass" style={{ height: '300px', borderRadius: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem' }}>
                        🚀
                    </div>
                </div>
            </Section>

            <Section
                title="Our Values"
                subtitle="The principles that guide everything we do."
                dark
            >
                <div className={styles.grid}>
                    <div className="glass" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                        <span style={{ fontSize: '2rem' }}>💎</span>
                        <h3 style={{ marginTop: '1rem' }}>Quality First</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>We never compromise on the quality of our code or the depth of our training.</p>
                    </div>
                    <div className="glass" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                        <span style={{ fontSize: '2rem' }}>🤝</span>
                        <h3 style={{ marginTop: '1rem' }}>Transparency</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>Honest communication and clear expectations are at the heart of our partnerships.</p>
                    </div>
                    <div className="glass" style={{ padding: '2.5rem', borderRadius: '20px' }}>
                        <span style={{ fontSize: '2rem' }}>⚡</span>
                        <h3 style={{ marginTop: '1rem' }}>Agility</h3>
                        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem' }}>We adapt quickly to the ever-changing technical landscape to keep our clients ahead.</p>
                    </div>
                </div>
            </Section>
        </>
    );
}
