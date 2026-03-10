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
                            Bynixx<span className="text-gradient">.</span>
                        </Link>
                        <p className={styles.description}>
                            Empowering businesses through cutting-edge tech solutions and future-ready training programs.
                        </p>
                    </div>

                    <div className={styles.column}>
                        <h4>Solutions</h4>
                        <ul>
                            <li><Link href="/solutions/web">Web Development</Link></li>
                            <li><Link href="/solutions/cloud">Cloud Architecture</Link></li>
                            <li><Link href="/solutions/ai">AI Integration</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Training</h4>
                        <ul>
                            <li><Link href="/training/frontend">Frontend Mastery</Link></li>
                            <li><Link href="/training/backend">Backend Engineering</Link></li>
                            <li><Link href="/training/devops">DevOps Cycle</Link></li>
                        </ul>
                    </div>

                    <div className={styles.column}>
                        <h4>Contact</h4>
                        <p>hello@bynixx.com</p>
                        <p>+1 234 567 890</p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {currentYear} Bynixx Tech Solutions. All rights reserved.</p>
                    <div className={styles.legal}>
                        <Link href="/privacy">Privacy Policy</Link>
                        <Link href="/terms">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
