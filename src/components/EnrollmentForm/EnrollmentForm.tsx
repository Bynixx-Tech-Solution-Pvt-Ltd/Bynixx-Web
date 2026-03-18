"use client";

import React, { useState, useEffect } from 'react';
import styles from './EnrollmentForm.module.css';

interface Program {
  id: string;
  title: string;
  category: 'internship' | 'bootcamp' | 'program';
  duration: string;
  level: string;
  price: string;
  description: string;
  icon: string;
}

const programs: Program[] = [
  {
    id: 'internship-live',
    title: "Live Project Internship",
    category: 'internship',
    duration: "30-90 Days",
    level: "All Levels",
    price: "Affordable",
    description: "Work on real-world projects for actual clients under senior mentorship. Gain practical experience that textbooks can't teach.",
    icon: "💻"
  },
  {
    id: 'bootcamp-tech',
    title: "Tech Bootcamp",
    category: 'bootcamp',
    duration: "Flexible",
    level: "Beginner",
    price: "Affordable",
    description: "Intensive coding bootcamp designed for school and college students to build industry-ready skills from scratch.",
    icon: "🚀"
  },
  {
    id: 'program-frontend',
    title: "Frontend Mastery",
    category: 'program',
    duration: "10 Weeks",
    level: "Intermediate",
    price: "$800",
    description: "Master React, Next.js, and modern CSS to build high-performance web applications.",
    icon: "🎨"
  },
  {
    id: 'program-backend',
    title: "Backend Engineering",
    category: 'program',
    duration: "12 Weeks",
    level: "Advanced",
    price: "$950",
    description: "Build scalable APIs and servers with Node.js, Express, and modern database architectures.",
    icon: "🔧"
  },
  {
    id: 'program-data',
    title: "Data Science & AI",
    category: 'program',
    duration: "14 Weeks",
    level: "Advanced",
    price: "$1200",
    description: "Master Python and Machine Learning models to transform raw data into intelligent insights.",
    icon: "🧬"
  }
];

const EnrollmentForm: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [selectedProgramId, setSelectedProgramId] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Filter programs based on selected category
  const filteredPrograms = programs.filter(p => !category || p.category === category);
  const selectedProgram = programs.find(p => p.id === selectedProgramId);

  // Reset program selection when category changes
  useEffect(() => {
    setSelectedProgramId('');
  }, [category]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
    }, 2000);
  };

  if (status === 'success') {
    return (
      <div className={`${styles.success} glass`}>
        <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎉</div>
        <h3>Enrollment Request Received!</h3>
        <p>Your details have been submitted. Our team will contact you shortly to complete the process.</p>
        <button className="btn-primary" onClick={() => {
          setStatus('idle');
          setCategory('');
          setSelectedProgramId('');
        }}>
          Back to Form
        </button>
      </div>
    );
  }

  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.group}>
          <label htmlFor="fullName">Full Name</label>
          <input type="text" id="fullName" placeholder="John Doe" required />
        </div>

        <div className={styles.group}>
          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" placeholder="john@example.com" required />
        </div>

        <div className={styles.group}>
          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" placeholder="+91 XXXXX XXXXX" required />
        </div>

        <div className={styles.group}>
          <label htmlFor="category">Category</label>
          <select 
            id="category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Select a category</option>
            <option value="internship">Internship</option>
            <option value="bootcamp">Bootcamp</option>
            <option value="program">Technical Programs</option>
          </select>
        </div>

        <div className={styles.group}>
          <label htmlFor="why">Why do you want to join this program?</label>
          <textarea id="why" rows={4} placeholder="Tell us about your background and interests" required />
        </div>

        <button type="submit" className="btn-primary" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Submitting...' : 'Confirm Enrollment'}
        </button>
      </form>

      <div className={`${styles.previewCard} glass`}>
        <div className={styles.group} style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="program">Select {category || 'Program'}</label>
          <select 
            id="program" 
            value={selectedProgramId}
            onChange={(e) => setSelectedProgramId(e.target.value)}
            required
            disabled={!category}
          >
            <option value="">Choose a specific program...</option>
            {filteredPrograms.map(p => (
              <option key={p.id} value={p.id}>{p.title}</option>
            ))}
          </select>
        </div>

        {selectedProgram ? (
          <div>
            <div className={styles.previewHeader}>
              <div className={styles.previewIcon}>{selectedProgram.icon}</div>
              <h3 className={styles.previewTitle}>{selectedProgram.title}</h3>
            </div>
            <div className={styles.previewInfo}>
              <div className={styles.infoItem}>
                <label>Duration</label>
                <p>{selectedProgram.duration}</p>
              </div>
              <div className={styles.infoItem}>
                <label>Level</label>
                <p>{selectedProgram.level}</p>
              </div>
              <div className={styles.infoItem}>
                <label>Price</label>
                <p className="text-gradient">{selectedProgram.price}</p>
              </div>
            </div>
            <div className={styles.previewDescription}>
              <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.8rem' }}>Course Overview</label>
              <p>{selectedProgram.description}</p>
            </div>
          </div>
        ) : (
          <div className={styles.emptyPreview}>
            <div style={{ fontSize: '3rem', opacity: 0.3 }}>{category ? '➕' : '🛒'}</div>
            <p>{category ? 'Now select a program from the dropdown above.' : 'Select a category first to see programs.'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EnrollmentForm;
