import Hero from "@/components/ui/hero/Hero";
import Section from "@/components/ui/section/Section";
import styles from "./announcements.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Announcements – BYNIXX Tech Solutions",
  description:
    "Stay updated with the latest news, hiring updates, events, training programs, and company announcements from BYNIXX Tech Solutions.",
};

type AnnouncementCategory = "announcement" | "update" | "event" | "job" | "training";

interface Announcement {
  id: number;
  title: string;
  description: string;
  date: { day: string; month: string; year: string };
  category: AnnouncementCategory;
  isNew?: boolean;
}

const announcements: Announcement[] = [
  {
    id: 1,
    title: "BYNIXX Tech Solutions is Now Accepting Internship Applications for Q3 2026",
    description:
      "We're opening 15 seats for our flagship Live Project Internship program. Work on real client projects across web development, ERP systems, and workflow automation. Applications close on July 25, 2026.",
    date: { day: "28", month: "Jun", year: "2026" },
    category: "training",
    isNew: true,
  },
  {
    id: 2,
    title: "We're Hiring — Full-Stack Developers & UI/UX Designers",
    description:
      "BYNIXX is expanding its core development team. We are looking for passionate full-stack developers (React/Next.js + Node.js/PostgreSQL) and UI/UX designers with industry experience. Remote and on-site options available at our Theni office.",
    date: { day: "25", month: "Jun", year: "2026" },
    category: "job",
    isNew: true,
  },
  {
    id: 3,
    title: "New ERP Module Launch: Inventory & Billing Pro",
    description:
      "We've released our enhanced Inventory & Billing Pro module for SMEs. This update brings real-time stock tracking, multi-branch billing, GST automation, and WhatsApp invoice delivery. Existing clients will receive the upgrade at no extra cost.",
    date: { day: "20", month: "Jun", year: "2026" },
    category: "update",
  },
  {
    id: 4,
    title: "BYNIXX Digital Transformation Summit — Theni 2026",
    description:
      "Join us for a full-day summit dedicated to digital transformation for Tier-2 businesses. Guest speakers from top IT companies, live ERP demos, panel discussions, and networking. Venue: Theni District Collectorate Hall. Registration is free.",
    date: { day: "15", month: "Jun", year: "2026" },
    category: "event",
  },
  {
    id: 5,
    title: "Partnership Announcement: BYNIXX x LocalMart Network",
    description:
      "We are proud to announce a strategic partnership with LocalMart Network to digitize 200+ retail stores in Theni district. This project will bring POS integration, inventory automation, and customer analytics to local businesses.",
    date: { day: "08", month: "Jun", year: "2026" },
    category: "announcement",
  },
  {
    id: 6,
    title: "Free Workshop: Build Your First Business Website in 2 Hours",
    description:
      "We're hosting a free hands-on workshop for entrepreneurs and small business owners. Learn how to create a professional business website with SEO, mobile responsiveness, and contact forms. No prior coding experience required.",
    date: { day: "01", month: "Jun", year: "2026" },
    category: "event",
  },
  {
    id: 7,
    title: "Training Curriculum Update: React 19 & Next.js 15 Added",
    description:
      "Our internship curriculum has been updated to include React 19 (with the new compiler), Next.js 15 (App Router), TypeScript, and Prisma ORM. All enrolled students will benefit from the refreshed content immediately.",
    date: { day: "22", month: "May", year: "2026" },
    category: "training",
  },
  {
    id: 8,
    title: "BYNIXX Completes 50th Project Milestone",
    description:
      "We are thrilled to announce that BYNIXX Tech Solutions has successfully delivered its 50th client project — a full-scale ERP system for a textile manufacturing unit in Theni. Thank you to every client, trainee, and team member who made this possible.",
    date: { day: "15", month: "May", year: "2026" },
    category: "announcement",
  },
];

const stats = [
  { value: "8+", label: "This Month" },
  { value: "3", label: "Open Positions" },
  { value: "2", label: "Upcoming Events" },
  { value: "15", label: "Training Seats" },
];

const categoryLabel: Record<AnnouncementCategory, string> = {
  announcement: "Announcement",
  update: "Product Update",
  event: "Event",
  job: "We're Hiring",
  training: "Training",
};

export default function Announcements() {
  // Featured = first/pinned
  const featured = announcements[0];
  const rest = announcements.slice(1);

  return (
    <>
      <Hero
        title={`Latest <span class="text-gradient">Announcements</span>`}
        subtitle="Stay in the loop with product updates, hiring notices, upcoming events, training programs, and company news from BYNIXX Tech Solutions."
        eyebrow="What's New"
        isPage
      />

      <Section>
        <div>
          {/* Stats Row */}
          <div className={styles.statsRow}>
            {stats.map((s, i) => (
              <div key={i} className={styles.statCard}>
                <div className={styles.statValue}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Featured / Pinned */}
          <div className={styles.featuredCard}>
            <div className={styles.featuredBadge}>Pinned</div>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <div className={styles.featuredMeta}>
              <span className={styles.featuredMetaItem}>
                🗓️ {featured.date.day} {featured.date.month} {featured.date.year}
              </span>
              <span className={styles.featuredMetaItem}>
                🏷️ {categoryLabel[featured.category]}
              </span>
              <button className={styles.featuredBtn}>
                Learn More
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Filter Bar */}
          <div className={styles.filterBar}>
            <span className={styles.filterLabel}>Filter:</span>
            <button className={`${styles.filterBtn} ${styles.filterBtnActive}`} id="filter-all">All</button>
            <button className={styles.filterBtn} id="filter-announcement">Announcements</button>
            <button className={styles.filterBtn} id="filter-update">Updates</button>
            <button className={styles.filterBtn} id="filter-event">Events</button>
            <button className={styles.filterBtn} id="filter-job">Hiring</button>
            <button className={styles.filterBtn} id="filter-training">Training</button>
          </div>

          {/* Announcement Cards */}
          <div className={styles.announcementsList}>
            {rest.map((item) => (
              <div key={item.id} className={styles.announcementCard} id={`announcement-${item.id}`}>
                {/* Color accent */}
                <div className={`${styles.cardAccent} ${styles[item.category]}`} />

                {/* Date */}
                <div className={styles.cardDate}>
                  <div className={styles.dateDay}>{item.date.day}</div>
                  <div className={styles.dateMonth}>{item.date.month}</div>
                  <div className={styles.dateYear}>{item.date.year}</div>
                </div>

                {/* Body */}
                <div className={styles.cardBody}>
                  <div className={styles.cardBodyTop}>
                    <span className={`${styles.cardTag} ${styles[item.category]}`}>
                      {categoryLabel[item.category]}
                    </span>
                    {item.isNew && <span className={styles.newBadge}>New</span>}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                {/* Arrow */}
                <div className={styles.cardAction}>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter CTA */}
          <div className={styles.newsletterBox}>
            <div className={styles.newsletterContent}>
              <h3>Never Miss an Update</h3>
              <p>Subscribe to get BYNIXX announcements delivered directly to your inbox. Hiring notices, product updates, events, and more.</p>
            </div>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Your email address"
                className={styles.newsletterInput}
                id="newsletter-email"
              />
              <button className="btn-primary" id="newsletter-subscribe">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
