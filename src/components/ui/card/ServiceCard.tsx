import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon?: string;
    href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
    title,
    description,
    icon,
    href
}) => {
    return (
        <div className={`${styles.card} glass`}>
            <div className={styles.icon}>{icon || '🚀'}</div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
            <Link href={href} className={styles.link}>
                Learn More <span className={styles.arrow}>→</span>
            </Link>
        </div>
    );
};

export default ServiceCard;
