"use client";

import React, { useState } from 'react';
import styles from './ContactForm.module.css';

const ContactForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    if (status === 'success') {
        return (
            <div className={styles.success}>
                <h3>Message Sent!</h3>
                <p>Thank you for reaching out. Our team will get back to you shortly.</p>
                <button className="btn-primary" onClick={() => setStatus('idle')}>Send Another Message</button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.group}>
                <label htmlFor="name">Full Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
            </div>

            <div className={styles.group}>
                <label htmlFor="email">Email Address</label>
                <input type="email" id="email" placeholder="john@example.com" required />
            </div>

            <div className={styles.group}>
                <label htmlFor="subject">Subject</label>
                <select id="subject" required>
                    <option value="">Select a subject</option>
                    <option value="solutions">Tech Solutions inquiry</option>
                    <option value="training">Training Courses</option>
                    <option value="other">Other</option>
                </select>
            </div>

            <div className={styles.group}>
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={5} placeholder="How can we help you?" required></textarea>
            </div>

            <button type="submit" className="btn-primary" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
        </form>
    );
};

export default ContactForm;
