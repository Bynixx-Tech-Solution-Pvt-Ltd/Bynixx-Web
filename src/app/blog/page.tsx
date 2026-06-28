import Section from "@/components/ui/section/Section";
import styles from "./blog.module.css";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog – BYNIXX Tech Solutions",
  description:
    "Insights on digital transformation, ERP systems, web development, and building tech careers. Practical advice from the BYNIXX team.",
};

const featuredPost = {
  title: "Why Tier-2 Businesses in Tamil Nadu Need Custom ERP — Not Off-the-Shelf Software",
  excerpt:
    "Generic software forces you to adapt your business to the tool. Custom ERP does the opposite — it adapts to how you actually work. Here's why that distinction matters for SMEs.",
  category: "Digital Transformation",
  date: "Jun 25, 2026",
  readTime: "6 min read",
  slug: "#",
};

const posts = [
  {
    title: "How Live-Project Internships Bridge the Industry-Academia Gap",
    excerpt:
      "Theoretical education alone isn't enough. We break down how project-based learning creates job-ready developers faster than any bootcamp.",
    category: "Training",
    date: "Jun 20, 2026",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "The Real Cost of Not Automating Your Business Workflows",
    excerpt:
      "Manual processes cost more than you think. We quantify the hidden costs of spreadsheet-driven operations and how automation pays for itself.",
    category: "Automation",
    date: "Jun 15, 2026",
    readTime: "4 min read",
    slug: "#",
  },
  {
    title: "Building a Business Website That Actually Converts — A Guide for SMEs",
    excerpt:
      "Having a website isn't enough. It needs to work for your business. Here's what separates a functional website from a revenue-generating one.",
    category: "Web Development",
    date: "Jun 10, 2026",
    readTime: "7 min read",
    slug: "#",
  },
  {
    title: "From Theni to Tech — How Regional Companies Are Going Digital",
    excerpt:
      "A look at how small businesses in Theni district are embracing technology to compete with larger, urban enterprises.",
    category: "Case Study",
    date: "Jun 5, 2026",
    readTime: "5 min read",
    slug: "#",
  },
  {
    title: "What Makes a Good ERP System? 7 Non-Negotiable Features",
    excerpt:
      "Not all ERP systems are equal. Whether you're buying or building, these are the features that matter for small and medium enterprises.",
    category: "ERP",
    date: "May 28, 2026",
    readTime: "6 min read",
    slug: "#",
  },
  {
    title: "React vs. Next.js — When to Use What for Your Business App",
    excerpt:
      "A practical, jargon-free comparison to help business owners and developers pick the right tool for web application projects.",
    category: "Web Development",
    date: "May 22, 2026",
    readTime: "5 min read",
    slug: "#",
  },
];

const categories = ["All", "Digital Transformation", "Training", "Web Development", "ERP", "Automation", "Case Study"];

/* Simple SVG placeholder icon for blog images */
function ImagePlaceholder({ size = 40 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" width={size} height={size}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z" />
    </svg>
  );
}

export default function Blog() {
  return (
    <>
      {/* Hero — handled as a simple top section instead of the full-height Hero component */}
      <section style={{ paddingTop: "calc(var(--header-height) + 60px)", paddingBottom: "40px" }}>
        <div className="container" style={{ textAlign: "center", maxWidth: "640px", margin: "0 auto" }}>
          <h1 style={{ fontSize: "clamp(2.4rem, 6vw, 3.5rem)", letterSpacing: "-1.5px", marginBottom: "1rem" }}>
            Blog
          </h1>
          <p style={{ color: "var(--text-secondary)", fontSize: "1.1rem", lineHeight: "1.7" }}>
            Insights on digital transformation, ERP systems, web development, and building tech careers.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <Section>
        <div className={`${styles.featuredPost} glass`}>
          <div className={styles.featuredImage}>
            <div className={styles.imagePlaceholder}>
              <ImagePlaceholder size={64} />
            </div>
          </div>
          <div className={styles.featuredContent}>
            <span className={styles.featuredTag}>Featured</span>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className={styles.postMeta}>
              <span>{featuredPost.date}</span>
              <span className={styles.metaDot} />
              <span>{featuredPost.readTime}</span>
            </div>
            <Link href={featuredPost.slug} className={styles.readLink}>
              Read Article
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>

      {/* Category Filter + Post Grid */}
      <Section
        title="Latest Articles"
        subtitle="Practical advice from the BYNIXX team — no fluff, just useful insights."
        dark
      >
        <div className={styles.categories}>
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`${styles.categoryBtn} ${i === 0 ? styles.categoryBtnActive : ""}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className={styles.blogGrid}>
          {posts.map((post, i) => (
            <Link href={post.slug} key={i} className={`${styles.postCard} glass`} style={{ textDecoration: "none", color: "inherit" }}>
              <div className={styles.postImage}>
                <ImagePlaceholder />
              </div>
              <div className={styles.postBody}>
                <span className={styles.postTag}>{post.category}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className={styles.postMeta}>
                  <span>{post.date}</span>
                  <span className={styles.metaDot} />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Newsletter */}
      <Section>
        <div className={styles.newsletter}>
          <h3>Stay in the Loop</h3>
          <p>
            Get practical insights on digital transformation, tech careers, and building better software — delivered to your inbox.
          </p>
          <div className={styles.emailRow}>
            <input type="email" placeholder="your@email.com" aria-label="Email address" />
            <button className="btn-primary">Subscribe</button>
          </div>
        </div>
      </Section>
    </>
  );
}
