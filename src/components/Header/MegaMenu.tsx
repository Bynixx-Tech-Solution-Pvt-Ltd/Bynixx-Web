import React from 'react';
import styles from './MegaMenu.module.css';
import Link from 'next/link';

interface MegaMenuLink {
    title: string;
    description: string;
    icon: string;
    href: string;
}

interface MegaMenuProps {
    items: MegaMenuLink[];
    isOpen: boolean;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ items, isOpen }) => {
    if (!isOpen) return null;

    return (
        <div className={`${styles.wrapper} glass`}>
            <div className={`container ${styles.grid}`}>
                {items.map((item, index) => (
                    <Link key={index} href={item.href} className={styles.item}>
                        <span className={styles.icon}>{item.icon}</span>
                        <div className={styles.content}>
                            <span className={styles.title}>{item.title}</span>
                            <span className={styles.description}>{item.description}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MegaMenu;
