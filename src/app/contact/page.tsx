import Hero from "@/components/Hero/Hero";
import Section from "@/components/Section/Section";
import ContactForm from "@/components/ContactForm/ContactForm";
import styles from "../page.module.css";

export default function Contact() {
    return (
        <>
            <Hero
                title="Let's Build Something Great."
                subtitle="Have a project in mind or want to join our next training cohort? Reach out to us below."
            />

            <Section
                title="Get in Touch"
                subtitle="We typically respond within 24 business hours."
            >
                <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
                    <div className="glass" style={{ padding: '3rem', borderRadius: '20px' }}>
                        <ContactForm />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                            <h4>Office Address</h4>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>123 Tech Avenue, Silicon Valley, CA 94025</p>
                        </div>

                        <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                            <h4>Direct Contact</h4>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>hello@bynixx.com</p>
                            <p style={{ color: 'var(--text-secondary)' }}>+1 (555) 000-1234</p>
                        </div>

                        <div className="glass" style={{ padding: '2rem', borderRadius: '20px' }}>
                            <h4>Business Hours</h4>
                            <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>Monday - Friday: 9 AM - 6 PM</p>
                            <p style={{ color: 'var(--text-secondary)' }}>Weekend: Support Only</p>
                        </div>
                    </div>
                </div>
            </Section>
        </>
    );
}
