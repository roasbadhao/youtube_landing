import { useState } from 'react';
import './App.css';
import Raushan from "./assets/Raushan_saxena-removebg-preview.png"

function App() {
  const [form, setForm] = useState({
    name: '', contact: '', businessName: '', location: '',
    industry: '', revenue: '', reason: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMsg, setSubmitMsg] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setSubmitMsg(null);

    const required = ['name', 'contact', 'businessName', 'location', 'industry', 'reason'];
    const missing = required.filter(f => !form[f].trim());
    if (missing.length) {
      setSubmitMsg({ type: 'error', text: 'Please fill in all required fields.' });
      return;
    }

    const contact = form.contact.replace(/\D/g, '');
    if (!/^[6-9]\d{9}$/.test(contact)) {
      setSubmitMsg({ type: 'error', text: 'Please enter a valid 10-digit Indian mobile number.' });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch('https://roasbadhao.com/api/youtubeleads.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitMsg({ type: 'success', text: data.message });
        setForm({ name: '', contact: '', businessName: '', location: '', industry: '', revenue: '', reason: '' });
      } else {
        setSubmitMsg({ type: 'error', text: data.message || 'Something went wrong. Please try again.' });
      }
    } catch {
      setSubmitMsg({ type: 'error', text: 'Network error. Please check your connection and try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="App">

      {/* ========== NAVBAR ========== */}
      <nav className="navbar">
        <div className="nav-brand">Raushan Saxena</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#mission">Mission</a>
          <a href="#why-feature">Why Feature</a>
          <a href="#apply">Apply</a>
        </div>
        <a href="#apply" className="apply-now-btn">Apply Now &nbsp;›</a>
      </nav>

      {/* ========== HERO SECTION ========== */}
      <section className="hero">
        <h1 className="hero-title">
          Get Your Business<br />
          Featured on YouTube
        </h1>
        <p className="hero-subtitle">
          Showcase your business, your journey, and your work to a growing<br />
          audience of entrepreneurs across India.
        </p>
        <div className="host-card">
          <p>
            Hosted by <span className="host-name">Raushan Saxena</span> — Performance Marketer with 6+ years
            of experience, helped 100+ businesses and managed ₹18+ crore in ad spend.
          </p>
        </div>
        <a href="#apply" className="apply-feature-btn">Apply for Feature &nbsp;›</a>
      </section>

      {/* ========== ABOUT SECTION ========== */}
      <section className="about" id="about">
        <div className="about-container">
          <div className="about-left">
            <h2 className="section-title about-title">About Me</h2>
            <p className="about-para">
              Raushan Saxena is a Performance Marketer and Growth
              Strategist with 6+ years of experience.
            </p>
            <p className="about-para">
              He has helped 100+ businesses grow and managed ₹18+ crore
              in advertising spend.
            </p>
            <p className="about-para">
              He documents real Indian businesses, founder journeys, and
              how businesses actually work behind the scenes.
            </p>
            <div className="stats-row">
              <div className="stat-card">
                <span className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
                  </svg>
                </span>
                <span className="stat-number">6+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </span>
                <span className="stat-number">100+</span>
                <span className="stat-label">Businesses</span>
              </div>
              <div className="stat-card">
                <span className="stat-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                  </svg>
                </span>
                <span className="stat-number">₹18+ Cr</span>
                <span className="stat-label">Ad Spend</span>
              </div>
            </div>
          </div>
          <div className="about-right">
            <img
              src={Raushan}
              alt="Raushan Saxena"
              className="about-img"
            />
          </div>
        </div>
      </section>

      {/* ========== MISSION SECTION ========== */}
      <section className="mission" id="mission">
        <h2 className="section-title center">My Mission</h2>
        <div className="mission-body">
          <p className="mission-para">
            My mission is to create <strong>1000+ entrepreneurs and business owners</strong> by sharing real,
            practical, and actionable knowledge from existing businesses.
          </p>
          <p className="mission-para">
            Through the vision of <strong>Har Ghar Business Yojana</strong>, I aim to inspire people across India to start
            and grow their own businesses.
          </p>
          <div className="mission-badge">
            <span className="mission-badge-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
              </svg>
            </span>
            <span className="mission-badge-text">Empowering 1000+ Entrepreneurs</span>
          </div>
        </div>
      </section>

      {/* ========== REAL BUSINESS STORIES (Why Feature) ========== */}
      <section className="real-stories" id="why-feature">
        <h2 className="section-title dark-bg">Real Business Stories. Real Growth.</h2>
        <p className="stories-sub-bold">This is not just an interview.</p>
        <p className="stories-sub-light">We create high-quality business videos where we showcase:</p>

        <div className="cards-grid">
          <div className="feature-card">
            <span className="feature-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/><polyline points="16 3 12 7 8 3"/>
              </svg>
            </span>
            <h3 className="feature-card-title">Your Business Journey</h3>
            <p className="feature-card-desc">Share your story, challenges, and how you built your business from the ground up.</p>
          </div>
          <div className="feature-card">
            <span className="feature-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                <polyline points="7 10 10 13 15 8"/>
              </svg>
            </span>
            <h3 className="feature-card-title">Office / Factory Tour</h3>
            <p className="feature-card-desc">Showcase your operations, workspace, and what makes your business unique.</p>
          </div>
          <div className="feature-card">
            <span className="feature-card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="6" height="13"/><rect x="9" y="3" width="6" height="17"/><rect x="16" y="10" width="6" height="10"/>
              </svg>
            </span>
            <h3 className="feature-card-title">How Your Business Works</h3>
            <p className="feature-card-desc">Deep dive into your business model, processes, and day-to-day operations.</p>
          </div>
        </div>
      </section>

      {/* ========== WHY GET FEATURED ========== */}
      <section className="why-featured">
        <h2 className="section-title center">Why Get Featured?</h2>
        <div className="cards-grid">
          <div className="feature-card center-card">
            <span className="feature-card-icon circle-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
              </svg>
            </span>
            <h3 className="feature-card-title">Build Your Brand Authority</h3>
            <p className="feature-card-desc">Establish yourself as an industry leader and gain credibility in your market.</p>
          </div>
          <div className="feature-card center-card">
            <span className="feature-card-icon circle-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </span>
            <h3 className="feature-card-title">Free Business Exposure</h3>
            <p className="feature-card-desc">Reach thousands of potential customers and partners through our growing audience.</p>
          </div>
          <div className="feature-card center-card">
            <span className="feature-card-icon circle-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2"/><polyline points="16 3 12 7 8 3"/>
              </svg>
            </span>
            <h3 className="feature-card-title">High-Quality Content</h3>
            <p className="feature-card-desc">Get professional video content you can use for your marketing and social media.</p>
          </div>
        </div>
      </section>

      {/* ========== WHO SHOULD APPLY ========== */}
      <section className="who-apply">
        <h2 className="section-title center">Who Should Apply?</h2>
        <p className="who-apply-sub center">This is ideal for:</p>
        <div className="who-grid">
          {[
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="6" height="13"/><rect x="9" y="3" width="6" height="17"/><rect x="16" y="10" width="6" height="10"/></svg>, label: 'Business\nOwners' },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="7 10 10 13 15 8"/></svg>, label: 'Manufacturers' },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>, label: 'Startup\nFounders' },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>, label: 'D2C Brands' },
            { icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>, label: 'Service\nBusinesses' },
          ].map((item, i) => (
            <div className="who-card" key={i}>
              <span className="who-icon">{item.icon}</span>
              <span className="who-label">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== WHO WE PREFER ========== */}
      <section className="who-prefer">
        <h2 className="section-title center">Who We Prefer to Feature</h2>
        <p className="who-prefer-sub center">We select businesses that:</p>
        <div className="prefer-list">
          {[
            'Have a working business setup',
            'Are actively growing or scaling',
            'Can share real insights',
            'Are open to being filmed on location',
            'Have an interesting story or model',
          ].map((item, i) => (
            <div className="prefer-item" key={i}>
              <span className="prefer-check">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1a5c2a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
                </svg>
              </span>
              <span className="prefer-text">{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ========== APPLY FORM ========== */}
      <section className="apply-section" id="apply">
        <div className="apply-box">
          <h2 className="section-title center">Apply to Get Featured</h2>
          <p className="apply-sub center">
            If you want your business to be seen, your story to be heard, and your brand to<br />
            grow — apply now.
          </p>
          <div className="apply-form">
            <div className="form-row">
              <div className="form-group">
                <label>Name <span className="req">*</span></label>
                <input name="name" value={form.name} onChange={handleChange} placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Contact Number <span className="req">*</span></label>
                <input name="contact" value={form.contact} onChange={handleChange} placeholder="Your phone number" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Business Name <span className="req">*</span></label>
                <input name="businessName" value={form.businessName} onChange={handleChange} placeholder="Your business name" />
              </div>
              <div className="form-group">
                <label>Location <span className="req">*</span></label>
                <input name="location" value={form.location} onChange={handleChange} placeholder="City, State" />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Industry <span className="req">*</span></label>
                <input name="industry" value={form.industry} onChange={handleChange} placeholder="e.g., Manufacturing, SaaS, Retail" />
              </div>
              <div className="form-group">
                <label>Monthly Revenue (Optional)</label>
                <input name="revenue" value={form.revenue} onChange={handleChange} placeholder="Approximate monthly revenue" />
              </div>
            </div>
            <div className="form-group full-width">
              <label>Why should we feature your business? <span className="req">*</span></label>
              <textarea
                name="reason"
                value={form.reason}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your business story, what makes it unique, and what value you can provide to our audience..."
              />
            </div>

            {/* Success / Error Message */}
            {submitMsg && (
              <div style={{
                padding: '12px 16px',
                borderRadius: '8px',
                marginBottom: '16px',
                fontSize: '15px',
                fontWeight: '500',
                backgroundColor: submitMsg.type === 'success' ? '#d1fae5' : '#fee2e2',
                color: submitMsg.type === 'success' ? '#065f46' : '#991b1b',
                border: `1px solid ${submitMsg.type === 'success' ? '#6ee7b7' : '#fca5a5'}`,
              }}>
                {submitMsg.type === 'success' ? '✅ ' : '❌ '}{submitMsg.text}
              </div>
            )}

            <button
              className="submit-btn"
              onClick={handleSubmit}
              disabled={submitting}
              style={{ opacity: submitting ? 0.7 : 1, cursor: submitting ? 'not-allowed' : 'pointer' }}
            >
              {submitting ? 'Submitting...' : 'Apply Now \u00a0›'}
            </button>
          </div>
        </div>
      </section>

      {/* ========== FOOTER ========== */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo">Raushan Saxena</div>
            <p className="footer-tagline">Performance Marketer &amp; Growth Strategist</p>
            <p className="footer-tagline">Empowering entrepreneurs across India</p>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <a href="#about" className="footer-link">About</a>
            <a href="#mission" className="footer-link">Mission</a>
            <a href="#why-feature" className="footer-link">Why Feature</a>
            <a href="#apply" className="footer-link">Apply</a>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Contact</h4>
            <p className="footer-contact">
              <span className="footer-contact-icon">✉</span> hello@roasbadhao.com
            </p>
            <p className="footer-contact">
              <span className="footer-contact-icon">📞</span> +91 9911689427
            </p>
          </div>
          <div className="footer-col">
            <h4 className="footer-heading">Follow Me</h4>
            <div className="social-icons">
              <a href="#yt" className="social-icon" aria-label="YouTube">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
                </svg>
              </a>
              <a href="#ig" className="social-icon" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a href="#fb" className="social-icon" aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="footer-divider" />
        <p className="footer-copy">© 2026 Raushan Saxena. All rights reserved.</p>
      </footer>

      {/* ========== FLOATING BUTTON ========== */}
      <a href="#apply" className="floating-btn">Apply for Feature ›</a>

    </div>
  );
}

export default App;