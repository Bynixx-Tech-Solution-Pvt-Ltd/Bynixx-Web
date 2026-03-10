"use client";

import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import MegaMenu from './MegaMenu';

interface NavLink {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
}

interface HeaderProps {
  logo?: string;
  links?: NavLink[];
}

const Header: React.FC<HeaderProps> = ({
  logo = "Bynixx",
  links = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions", hasMegaMenu: true },
    { label: "Training", href: "/training", hasMegaMenu: true },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ]
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const solutionsItems = [
    { title: "Web Development", description: "Modern, high-performance web apps.", icon: "🌐", href: "/solutions/web" },
    { title: "Cloud Architecture", description: "Scalable cloud infrastructure.", icon: "☁️", href: "/solutions/cloud" },
    { title: "AI & Automation", description: "Smart solutions for business.", icon: "🤖", href: "/solutions/ai" },
    { title: "Cybersecurity", description: "Comprehensive digital protection.", icon: "🛡️", href: "/solutions/security" },
    { title: "Managed IT", description: "Focus on business while we handle IT.", icon: "⚙️", href: "/solutions/managed" },
    { title: "Data Analytics", description: "Transform data into insights.", icon: "📊", href: "/solutions/data" },
  ];

  const trainingItems = [
    { title: "Frontend Mastery", description: "Learn React, Next.js, and CSS.", icon: "🎨", href: "/training/frontend" },
    { title: "Backend Engineering", description: "Build scalable APIs and servers.", icon: "🔧", href: "/training/backend" },
    { title: "Data Science", description: "Master Python and ML models.", icon: "🧬", href: "/training/datascience" },
    { title: "Cloud Engineering", description: "AWS/Azure certification prep.", icon: "🏗️", href: "/training/cloud" },
    { title: "DevOps Bootcamp", description: "Automation and CI/CD pipelines.", icon: "🚀", href: "/training/devops" },
    { title: "UX/UI Design", description: "Design beautiful user experiences.", icon: "✨", href: "/training/design" },
  ];

  return (
    <header
      className={`${styles.header} glass`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo}>
          {logo}<span className="text-gradient">.</span>
        </Link>

        <nav className={styles.links}>
          {links.map((link) => (
            <div
              key={link.href}
              onMouseEnter={() => link.hasMegaMenu ? setActiveMenu(link.label) : setActiveMenu(null)}
              className={styles.linkWrapper}
            >
              <Link href={link.href} className={styles.link}>
                {link.label}
                {link.hasMegaMenu && <span className={styles.caret}>▾</span>}
              </Link>
            </div>
          ))}
        </nav>

        <div className={styles.actions}>
          <Link href="/contact" className="btn-primary">
            Get Started
          </Link>
        </div>
      </div>

      <MegaMenu
        isOpen={activeMenu === "Solutions"}
        items={solutionsItems}
      />
      <MegaMenu
        isOpen={activeMenu === "Training"}
        items={trainingItems}
      />
    </header>
  );
};

export default Header;
