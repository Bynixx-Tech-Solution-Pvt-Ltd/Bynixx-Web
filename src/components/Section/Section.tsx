import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    dark?: boolean;
    id?: string;
}

const Section: React.FC<SectionProps> = ({
    title,
    subtitle,
    children,
    dark = false,
    id
}) => {
    return (
        <section id={id} className={`${styles.section} ${dark ? styles.dark : ''}`}>
            <div className="container">
                {(title || subtitle) && (
                    <div className={styles.header}>
                        {title && <h2 className={styles.title}>{title}</h2>}
                        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
                    </div>
                )}
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
