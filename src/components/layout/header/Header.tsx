"use client";

import React, { useState } from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import MegaMenu from './MegaMenu';
import Image from 'next/image';
import logoImg from "@/assets/main_logo.png";

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
  logo = "BYNIXX",
  links = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    // { label: "Solutions", href: "/solutions", hasMegaMenu: true },
    // { label: "Training", href: "/training", hasMegaMenu: true },
    { label: "Blog", href: "/blog" },
    { label: "Announcements", href: "/announcements" },
    { label: "Contact", href: "/contact" },
  ]
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const solutionsItems = [
    { title: "Website Development", description: "Mobile-responsive, SEO-ready business websites for SMEs.", icon: "🌐", href: "/solutions" },
    { title: "Custom ERP Systems", description: "Inventory, billing & workflow automation built for your business.", icon: "📦", href: "/solutions" },
    { title: "Workflow Automation", description: "Digitize manual processes and boost operational efficiency.", icon: "🤖", href: "/solutions" },
    { title: "IT Consulting", description: "Digital transformation roadmaps and infrastructure planning.", icon: "🧩", href: "/solutions" },
    { title: "AMC Services", description: "Ongoing maintenance, updates & 24/7 technical support.", icon: "🔧", href: "/solutions" },
    { title: "Free Digital Audit", description: "Let us analyze your business and recommend the ideal tech stack.", icon: "🎯", href: "/contact" },
  ];

  const trainingItems = [
    { title: "Live Project Internship", description: "30–90 day programs with real client project exposure.", icon: "💻", href: "/training-enrollment" },
    { title: "Tech Bootcamp", description: "Practical coding for school and college students.", icon: "🚀", href: "/training-enrollment" },
    { title: "Web Development", description: "Frontend & backend training with React, Node.js & more.", icon: "🌐", href: "/training-enrollment" },
    { title: "ERP & Automation", description: "Build enterprise systems from scratch with senior mentors.", icon: "⚙️", href: "/training-enrollment" },
    { title: "Performance Certification", description: "Earn verified credentials based on your project outcomes.", icon: "📜", href: "/training-enrollment" },
    { title: "Enroll in Programs", description: "Limited seats — apply today to secure your spot.", icon: "✅", href: "/training-enrollment" },
  ];

  return (
    <header
      className={`${styles.header} glass`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className={`container ${styles.nav}`}>
        <Link href="/" className={styles.logo} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Image src={logoImg} alt="BYNIXX Logo" width={32} height={32} style={{ objectFit: 'contain' }} />
          <span>{logo}<span className="text-gradient">.</span></span>
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
            Get Free Audit
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
