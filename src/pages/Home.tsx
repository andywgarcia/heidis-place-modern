import { useState } from 'react';
import './Home.css';
import AnimatedSection from '../components/AnimatedSection';
import Lightbox from '../components/Lightbox';

const galleryImages = [
  // Distinctive Framing
  { src: 'https://www.heidisplaceframes.com/Framing%20and%20other/P1010084.JPG', alt: 'Beautifully framed art pieces displayed on a wall' },
  { src: 'https://www.heidisplaceframes.com/Framing%20and%20other/P1010091.JPG', alt: 'Custom framed pictures with decorative accents' },
  { src: 'https://www.heidisplaceframes.com/Framing%20and%20other/P1010090.JPG', alt: 'Elegant frame selection showcasing design expertise' },
  { src: '/bourbon-bull.jpg', alt: 'Heidi with a vibrant large-scale Bourbon Street painting in custom frame' },
  { src: '/gallery.jpg', alt: 'Framed landscape photograph elegantly displayed on a white wall' },
  // Needlework
  { src: 'https://www.heidisplaceframes.com/Framing%20and%20other/DSC_0020.JPG', alt: 'Expertly framed needlework piece' },
  { src: 'https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_046.jpg', alt: 'Needlework being carefully stretched' },
  { src: '/needlework.jpg', alt: 'Finished needlework in elegant frame' },
  { src: '/kimono.jpg', alt: 'Intricate kimono needlework in gold frame with sage mat' },
  // A Unique Touch
  { src: 'https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_033.jpg', alt: 'Custom framing with unique personal touches' },
  { src: 'https://www.heidisplaceframes.com/Framing%20and%20other/April%202007%20149.jpg', alt: 'Custom uniform and memorabilia framing' },
  { src: 'https://www.heidisplaceframes.com/Framing%20and%20other/June%202006%20027.jpg', alt: 'Creative multi-opening custom frame design' },
  { src: '/gallery-nature.jpg', alt: 'Multi-panel ocean photography gallery wall installation' },
  // Quality
  { src: 'https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(38%20of%2049).jpg', alt: 'Heidi carefully crafting a custom frame' },
  { src: 'https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(45%20of%2049).jpg', alt: 'Precision framing tools and craftsmanship' },
  { src: 'https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(47%20of%2049).jpg', alt: 'High-quality frame corner detail' },
  { src: '/heidi-in-client.jpg', alt: 'Heidi delivering and installing custom framed art at a client location' },
];

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (src: string) => {
    const idx = galleryImages.findIndex(img => img.src === src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  return (
    <div className="home-container">
      {/* Hero Section - with background image */}
      <section className="hero-section" id="home">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">BOTHELL, WA · SINCE 2001</div>
          <h1 className="hero-headline">
            The framing you need to{' '}
            <span className="highlight">elevate your art</span>
          </h1>
          <p className="hero-description">
            Heidi's Place evolves your artwork into a living, breathing masterpiece.
            With over 20 years of experience and a Bachelor of Fine Arts degree,
            we bring unsurpassed quality and design to transform your pictures into works of art.
          </p>
          <div className="hero-cta">
            <a href="tel:4254892569" className="cta-button primary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Call (425) 489-2569
            </a>
            <a href="mailto:Heidis.frames@gmail.com" className="cta-button secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid - with SVG icons */}
      <section className="features-section">
        <AnimatedSection>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="2" />
                  <rect x="5" y="5" width="14" height="14" rx="1" />
                  <line x1="5" y1="8" x2="19" y2="8" />
                </svg>
              </div>
              <h3>Distinctive Framing</h3>
              <p>Expert color and design selection to enhance your valuable art piece</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L12 8" />
                  <path d="M12 8C12 8 8 12 8 16C8 18.2 9.8 20 12 20C14.2 20 16 18.2 16 16C16 12 12 8 12 8Z" />
                  <path d="M9 13H15" />
                  <path d="M9 16H15" />
                </svg>
              </div>
              <h3>Needlework Specialist</h3>
              <p>Hand-stretched with stainless steel pins, never glue or sticky boards</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3L14.5 8.5L20.5 9.3L16.3 13.3L17.3 19.3L12 16.5L6.7 19.3L7.7 13.3L3.5 9.3L9.5 8.5L12 3Z" />
                </svg>
              </div>
              <h3>A Unique Touch</h3>
              <p>Creative solutions including special cuts, plaques, and custom mat designs</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" />
                  <polyline points="9 12 11 14 15 10" />
                </svg>
              </div>
              <h3>Quality Materials</h3>
              <p>Acid-free rag mats, UV glass, and museum-quality mounting</p>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Distinctive Framing Gallery — standard layout */}
      <section className="gallery-section" id="distinctive-framing">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">Services</span>
            <h2>Distinctive Framing</h2>
            <p>The right custom framing can enhance your valuable art piece. Whether it's an original, poster, or a special photograph, Heidi's Place has the expertise to help you pick colors and designs to make your piece look its best.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div className="image-gallery-grid">
            <div className="gallery-item clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/Framing%20and%20other/P1010084.JPG')}>
              <img
                src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010084.JPG"
                alt="Beautifully framed art pieces displayed on a wall"
                loading="lazy"
              />
            </div>
            <div className="gallery-item clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/Framing%20and%20other/P1010091.JPG')}>
              <img
                src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010091.JPG"
                alt="Custom framed pictures with decorative accents"
                loading="lazy"
              />
            </div>
            <div className="gallery-item clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/Framing%20and%20other/P1010090.JPG')}>
              <img
                src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010090.JPG"
                alt="Elegant frame selection showcasing design expertise"
                loading="lazy"
              />
            </div>
          </div>
          <div className="section-cta">
            <p>Love what you see? Let us frame your favorite piece.</p>
            <a href="tel:4254892569" className="cta-button-inline">Schedule a Free Consultation →</a>
          </div>
          <div className="image-gallery-grid">
            <div className="gallery-item clickable" onClick={() => openLightbox('/bourbon-bull.jpg')}>
              <img
                src="/bourbon-bull.jpg"
                alt="Heidi with a vibrant large-scale Bourbon Street painting in custom frame"
                loading="lazy"
              />
            </div>
            <div className="gallery-item clickable" onClick={() => openLightbox('/gallery.jpg')}>
              <img
                src="/gallery.jpg"
                alt="Framed landscape photograph elegantly displayed on a white wall"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Needlework — reversed layout (text right, image left) */}
      <section className="gallery-section alt-bg" id="needlework-specialist">
        <AnimatedSection>
          <div className="split-section reverse">
            <div className="split-images">
              <div className="gallery-item large clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/Framing%20and%20other/DSC_0020.JPG')}>
                <img
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/DSC_0020.JPG"
                  alt="Expertly framed needlework piece"
                  loading="lazy"
                />
              </div>
              <div className="split-images-row">
                <div className="gallery-item clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_046.jpg')}>
                  <img
                    src="https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_046.jpg"
                    alt="Needlework being carefully stretched"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-item clickable" onClick={() => openLightbox('/needlework.jpg')}>
                  <img
                    src="/needlework.jpg"
                    alt="Finished needlework in elegant frame"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-item clickable" onClick={() => openLightbox('/kimono.jpg')}>
                  <img
                    src="/kimono.jpg"
                    alt="Intricate kimono needlework in gold frame with sage mat"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="split-text">
              <span className="section-label">Specialty</span>
              <h2>Needlework Specialist</h2>
              <p>We know that you spend valuable time making sure each stitch is done right, so we make sure it's framed right. Each piece is hand stretched using stainless steel pins. We never use glue or sticky boards that might damage or discolor your piece.</p>
              <div className="split-highlights">
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Hand-stretched with stainless steel pins</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>No glue or sticky boards ever used</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Rows lined up straight, no cut-off stitches</span>
                </div>
              </div>
              <div className="section-cta inline">
                <a href="mailto:Heidis.frames@gmail.com" className="cta-button-inline">Get Your Needlework Framed →</a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* A Unique Touch — wide gallery layout */}
      <section className="gallery-section" id="a-unique-touch">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">Creativity</span>
            <h2>A Unique Touch</h2>
            <p>Heidi's Place has creative solutions for your unique pieces. We are experienced with special cuts, inserting plaques, and even hand painting custom designs on the mats.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div className="image-gallery-grid wide">
            <div className="gallery-item featured clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_033.jpg')}>
              <img
                src="https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_033.jpg"
                alt="Custom framing with unique personal touches"
                loading="lazy"
              />
            </div>
            <div className="gallery-item clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/Framing%20and%20other/April%202007%20149.jpg')}>
              <img
                src="https://www.heidisplaceframes.com/Framing%20and%20other/April%202007%20149.jpg"
                alt="Custom uniform and memorabilia framing"
                loading="lazy"
              />
            </div>
            <div className="gallery-item clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/Framing%20and%20other/June%202006%20027.jpg')}>
              <img
                src="https://www.heidisplaceframes.com/Framing%20and%20other/June%202006%20027.jpg"
                alt="Creative multi-opening custom frame design"
                loading="lazy"
              />
            </div>
          </div>
          <div className="section-cta">
            <p>Have something special to frame? We love a creative challenge.</p>
            <a href="tel:4254892569" className="cta-button-inline">Let's Talk About Your Project →</a>
          </div>
          <div className="image-gallery-grid wide">
            <div className="gallery-item featured clickable" onClick={() => openLightbox('/gallery-nature.jpg')}>
              <img
                src="/gallery-nature.jpg"
                alt="Multi-panel ocean photography gallery wall installation"
                loading="lazy"
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Quality — split layout (text left, image right) */}
      <section className="gallery-section alt-bg" id="quality">
        <AnimatedSection>
          <div className="split-section">
            <div className="split-text">
              <span className="section-label">Craftsmanship</span>
              <h2>Quality Materials &amp; Craftsmanship</h2>
              <p>We want your art to be something you will treasure for a lifetime. Heidi's Place offers a full line of acid-free rag mats, UV glass, and museum quality mounting to protect your art from damaging effects of light and pollutants.</p>
              <div className="split-highlights">
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Acid-free rag mats</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>UV protective glass</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Museum-quality mounting</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Real wood frames only — no plastic</span>
                </div>
              </div>
              <div className="section-cta inline">
                <a href="mailto:Heidis.frames@gmail.com" className="cta-button-inline">Ask About Our Materials →</a>
              </div>
            </div>
            <div className="split-images">
              <div className="gallery-item large clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(38%20of%2049).jpg')}>
                <img
                  src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(38%20of%2049).jpg"
                  alt="Heidi carefully crafting a custom frame"
                  loading="lazy"
                />
              </div>
              <div className="split-images-row">
                <div className="gallery-item clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(45%20of%2049).jpg')}>
                  <img
                    src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(45%20of%2049).jpg"
                    alt="Precision framing tools and craftsmanship"
                    loading="lazy"
                  />
                </div>
                <div className="gallery-item clickable" onClick={() => openLightbox('https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(47%20of%2049).jpg')}>
                  <img
                    src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(47%20of%2049).jpg"
                    alt="High-quality frame corner detail"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="gallery-item clickable" onClick={() => openLightbox('/heidi-in-client.jpg')} style={{ marginTop: '16px' }}>
              <img
                src="/heidi-in-client.jpg"
                alt="Heidi delivering and installing custom framed art at a client location"
                loading="lazy"
                style={{ objectPosition: 'center 35%' }}
              />
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">What People Say</span>
            <h2>Trusted by Art Lovers</h2>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"Heidi has been framing my counted cross-stitch pieces for over 25 years. No matter which state I live in, I always mail Heidi my work. The quality of artistry is amazing! It is evident she takes a lot of pride in each frame she creates. I will never trust anyone else to frame my work."</p>
              <div className="testimonial-author">
                <strong>Cabin L.</strong>
                <span><a href="https://www.google.com/maps/place/Heidi's+Place+Custom+Framing/@47.8265546,-122.199975,17z" target="_blank" rel="noopener noreferrer" className="review-link">Google Review</a></span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"Heidi provides absolutely gorgeous and professional framing. She is kind, patient, and works with your vision and your budget to find the right materials for your project. The result was stunning and I will return!"</p>
              <div className="testimonial-author">
                <strong>Anjanette V.</strong>
                <span><a href="https://www.google.com/maps/place/Heidi's+Place+Custom+Framing/@47.8265546,-122.199975,17z" target="_blank" rel="noopener noreferrer" className="review-link">Google Review</a></span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"Heidi invests her time and expertise in your artwork. It felt like she had all the time in the world to help make choices that would create a showpiece. We are thrilled! Completed before scheduled and price competitive!"</p>
              <div className="testimonial-author">
                <strong>Clark H.</strong>
                <span><a href="https://www.google.com/maps/place/Heidi's+Place+Custom+Framing/@47.8265546,-122.199975,17z" target="_blank" rel="noopener noreferrer" className="review-link">Google Review</a></span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <AnimatedSection>
          <div className="about-content">
            <div className="about-text">
              <span className="section-label">Get in Touch</span>
              <h2>Personal Attention You Deserve</h2>
              <p>
                We know your time is valuable. Heidi's Place provides you with a personal
                appointment in our studio where you have one-on-one time with us. We can
                also come to you! If you'd like to match your framing with your decor,
                we make personal house or business calls, bringing our samples to you.
              </p>
              <div className="contact-info">
                <a href="tel:4254892569" className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <div>
                    <strong>Phone</strong>
                    <span>(425) 489-2569</span>
                  </div>
                </a>
                <a href="mailto:Heidis.frames@gmail.com" className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                  <div>
                    <strong>Email</strong>
                    <span>Heidis.frames@gmail.com</span>
                  </div>
                </a>
                <div className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
                  <div>
                    <strong>Location</strong>
                    <span>Bothell, WA 98012</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-right">
              <div className="about-image">
                <img
                  src="/heidi-studio.png"
                  alt="Heidi in her framing studio surrounded by custom frames and materials"
                />
              </div>
              <div className="about-map">
                <iframe
                  src="https://maps.google.com/maps?q=Heidi%27s+Place+Custom+Picture+Framing+Bothell+WA&output=embed&z=11"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Heidi's Place location - Bothell, WA"
                ></iframe>
                <p className="map-caption">Serving the Greater Seattle Area</p>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-logo">Heidi's Place</span>
            <span className="footer-tagline">Custom Picture Framing</span>
          </div>
          <div className="footer-info">
            <p>
              Heidis.frames@gmail.com &bull; (425) 489-2569 &bull; Bothell, WA 98012
            </p>
          </div>
          <div className="footer-bottom">
            <div className="social-media">
              <a
                href="https://www.facebook.com/p/Heidis-Place-Custom-Picture-Framing-100063298503509/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link facebook"
                aria-label="Visit our Facebook page"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Facebook</span>
              </a>
            </div>
            <p className="copyright">&copy; {currentYear} Heidi's Place. All rights reserved.</p>
          </div>
        </div>
      </footer>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </div>
  );
}
