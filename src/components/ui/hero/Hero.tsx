import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

interface HeroProps {
    title: string;
    subtitle: string;
    primaryAction?: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    primaryAction,
    secondaryAction
}) => {
    return (
        <section className={styles.hero}>
            <div className={styles.glow} />
            <div className="container">
                <div className={styles.content}>
                    <h1 className={styles.title}>{title}</h1>
                    <p className={styles.subtitle}>{subtitle}</p>

                    <div className={styles.actions}>
                        {primaryAction && (
                            <Link href={primaryAction.href} className="btn-primary">
                                {primaryAction.label}
                            </Link>
                        )}
                        {secondaryAction && (
                            <Link href={secondaryAction.href} className={styles.btnSecondary}>
                                {secondaryAction.label}
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
