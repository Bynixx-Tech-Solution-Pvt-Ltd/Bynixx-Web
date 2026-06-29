import React from 'react';
import styles from './Hero.module.css';
import Link from 'next/link';

interface HeroProps {
    title: string;
    subtitle: string;
    primaryAction?: { label: string; href: string };
    secondaryAction?: { label: string; href: string };
    eyebrow?: string;
    trustItems?: string[];
    isPage?: boolean; // Smaller hero for inner pages
}

const Hero: React.FC<HeroProps> = ({
    title,
    subtitle,
    primaryAction,
    secondaryAction,
    eyebrow,
    trustItems,
    isPage = false
}) => {
    return (
        <section className={`${styles.hero} ${isPage ? styles.heroPage : ''}`}>
            <div className={styles.glow} />
            <div className={styles.glowSecondary} />
            <div className="container">
                <div className={styles.content}>
                    {eyebrow && (
                        <div className={styles.eyebrow}>{eyebrow}</div>
                    )}

                    <h1 className={styles.title}
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p className={styles.subtitle}>{subtitle}</p>

                    {(primaryAction || secondaryAction) && (
                        <div className={styles.actions}>
                            {primaryAction && (
                                <Link href={primaryAction.href} className="btn-primary">
                                    {primaryAction.label}
                                    <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </Link>
                            )}
                            {secondaryAction && (
                                <Link href={secondaryAction.href} className={styles.btnSecondary}>
                                    {secondaryAction.label}
                                </Link>
                            )}
                        </div>
                    )}

                    {trustItems && trustItems.length > 0 && (
                        <div className={styles.trustBar}>
                            {trustItems.map((item, i) => (
                                <div key={i} className={styles.trustItem}>
                                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                    </svg>
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
