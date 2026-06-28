import React from 'react';
import Hero from "@/components/ui/hero/Hero";
import Section from "@/components/ui/section/Section";
import EnrollmentForm from "@/components/forms/enrollment-form/EnrollmentForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Enrollment – BYNIXX Tech Solutions",
  description: "Enroll in our live project internships, tech bootcamps, or technical programs to jumpstart your career in technology with real-world experience.",
};

export default function TrainingEnrollment() {
  return (
    <>
      <Hero 
        title="Start Your Tech Journey Today" 
        subtitle="Complete the form below to enroll in our industry-leading training programs or apply for a live project internship. Our team will review your application and get back to you shortly."
      />

      <Section 
        title="Enrollment Form" 
        subtitle="Select your preferred program category and specific course to view details and apply."
      >
        <EnrollmentForm />
      </Section>

      <Section 
        title="Why Enroll with BYNIXX?" 
        subtitle="Join hundreds of successful graduates who have transformed their careers through our hands-on approach."
        dark
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem' }}>
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>🤝</div>
            <h4 style={{ marginBottom: '0.8rem' }}>Direct Mentorship</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Learn directly from senior engineers who build production systems for real clients every day.
            </p>
          </div>
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>📈</div>
            <h4 style={{ marginBottom: '0.8rem' }}>Industry-Ready Portfolio</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Exit with a portfolio of real-world projects that actually matter to employers.
            </p>
          </div>
          <div className="glass" style={{ padding: '2rem', borderRadius: '16px' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1.2rem' }}>📜</div>
            <h4 style={{ marginBottom: '0.8rem' }}>Verified Certification</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: '1.7' }}>
              Gain recognized credentials based on performance-measured results, not just attendance.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
