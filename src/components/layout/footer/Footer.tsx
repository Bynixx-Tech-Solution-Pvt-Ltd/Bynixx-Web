import React from 'react';
import styles from './Footer.module.css';
import Link from 'next/link';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            BYNIXX<span className="text-gradient">.</span>
                        </Link>
                        <p className={styles.description}>
                            Empowering small and medium businesses with enterprise-grade digital solutions
                            and training the next generation of developers through live-project execution.
                        </p>
                        <div className={styles.tagline}>
                            🏡 Proudly based in Theni, Tamil Nadu
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link href="/solutions">Website Development</Link></li>
                            <li><Link href="/solutions">Custom ERP Systems</Link></li>
                            <li><Link href="/solutions">Workflow Automation</Link></li>
                            <li><Link href="/solutions">IT Consulting</Link></li>
                            <li><Link href="/solutions">AMC Services</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Training</h4>
                        <ul>
                            <li><Link href="/training">Live Project Internship</Link></li>
                            <li><Link href="/training">Tech Bootcamp</Link></li>
                            <li><Link href="/training-enrollment">Apply Now</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <p className={styles.contactItem}>
                            📍 Sri Bharathi Nagar, Theni,<br />
                            Tamil Nadu – 625532
                        </p>
                        <p className={styles.contactItem}>
                            <a href="tel:+917530008380">📞 +91 75300 08380</a>
                        </p>
                        <p className={styles.contactItem}>
                            <a href="/contact">✉️ Get in Touch</a>
                        </p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} BYNIXX Tech Solutions Pvt. Ltd. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="/about">About Us</Link>
                        <Link href="/contact">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
