import React from 'react';
import styles from './Card.module.css';
import Link from 'next/link';

interface CourseCardProps {
    title: string;
    duration: string;
    level: string;
    price?: string;
    href: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
    title,
    duration,
    level,
    price,
    href
}) => {
    return (
        <div className={`${styles.card} ${styles.course} glass`}>
            <div className={styles.badge}>{level}</div>
            <h3 className={styles.title}>{title}</h3>
            <div className={styles.meta}>
                <span>🕒 {duration}</span>
                {price && <span className={styles.price}>{price}</span>}
            </div>
            <Link href={href} className="btn-primary" style={{ marginTop: 'auto', width: '100%', textAlign: 'center', fontSize: '0.9rem' }}>
                Enroll Now
            </Link>
        </div>
    );
};

export default CourseCard;
