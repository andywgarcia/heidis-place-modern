import { useCallback, useEffect, useState } from 'react';
import type { CSSProperties, FormEvent } from 'react';
import './Home.css';
import AnimatedSection from '../components/AnimatedSection';
import Lightbox from '../components/Lightbox';
import ResponsiveImage from '../components/ResponsiveImage';
import {
  galleryImages,
  generatedWidthsFor,
  heidiShowcaseImages,
  heroImage,
  studioImage,
  uniqueTouchFeatureImage,
  type SiteImage,
} from '../data/images';

const googleReviewsUrl = "https://www.google.com/maps/place/Heidi's+Place+Custom+Framing/@47.1426321,-122.0641498,17z/data=!4m8!3m7!1s0x54900f572abb002b:0x4308b04eda5e424e!8m2!3d47.1426321!4d-122.0615695!9m1!1b1!16s%2Fg%2F113k9s1nr";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (src: string) => {
    const idx = galleryImages.findIndex(img => img.src === src);
    setLightboxIndex(idx >= 0 ? idx : 0);
  };

  const openFullGallery = useCallback(() => {
    setLightboxIndex(0);
  }, []);

  useEffect(() => {
    const handleOpenGallery = () => openFullGallery();
    window.addEventListener('heidis-place:open-gallery', handleOpenGallery);

    if (window.location.hash === '#gallery') {
      window.setTimeout(openFullGallery, 0);
      history.replaceState(null, '', window.location.pathname + window.location.search);
    }

    return () => window.removeEventListener('heidis-place:open-gallery', handleOpenGallery);
  }, [openFullGallery]);

  const handleRequestSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const body = [
      `Name: ${form.get('name') ?? ''}`,
      `Contact: ${form.get('contact') ?? ''}`,
      `Project: ${form.get('project') ?? ''}`,
    ].join('\n');

    window.location.href = `mailto:Heidis.frames@gmail.com?subject=${encodeURIComponent("Custom framing appointment request")}&body=${encodeURIComponent(body)}`;
  };

  const renderGalleryItem = (
    image: SiteImage,
    options: { className?: string; sizes?: string; style?: CSSProperties; imageStyle?: CSSProperties } = {},
  ) => {
    const classes = [
      'gallery-item',
      'clickable',
      image.thumbnailFit === 'contain' ? 'fit-contain' : undefined,
      options.className,
    ].filter(Boolean).join(' ');

    return (
      <button
        type="button"
        className={classes}
        onClick={() => openLightbox(image.src)}
        aria-label={`Open image: ${image.alt}`}
        style={options.style}
      >
        <ResponsiveImage
          src={image.src}
          alt={image.alt}
          widths={generatedWidthsFor(image)}
          sizes={options.sizes ?? '(max-width: 768px) 100vw, 33vw'}
          loading="lazy"
          decoding="async"
          style={options.imageStyle}
        />
      </button>
    );
  };

  return (
    <div className="home-container">
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-copy">
            <div className="hero-badge">Established 1993</div>
            <h1 className="hero-headline">
              Elevate your picture <span className="hero-mobile-break">to a</span>{' '}
              <span className="highlight">work of Art</span>
            </h1>
            <p className="hero-description">
              Heidi's Place evolves your artwork into a living, breathing masterpiece.
              With over 30 years of experience and a Bachelor of Fine Arts degree,
              we bring unsurpassed quality and design to transform your pictures into works of art.
            </p>
            <div className="hero-cta">
              <a href="tel:2064911368" className="cta-button primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call or Text (206) 491-1368
              </a>
              <a href="mailto:Heidis.frames@gmail.com" className="cta-button secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                Email Us
              </a>
            </div>
          </div>
          <button
            type="button"
            className="hero-portrait"
            onClick={() => openLightbox(heroImage.src)}
            aria-label="Open hero portrait in gallery"
          >
            <ResponsiveImage
              src={heroImage.src}
              alt={heroImage.alt}
              widths={generatedWidthsFor(heroImage)}
              sizes="(max-width: 768px) 100vw, 42vw"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </button>
        </div>
      </section>

      {/* Features Grid - with SVG icons */}
      <section className="features-section">
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
      </section>

      <section className="gallery-section studio-moments-section" id="gallery">
        <AnimatedSection>
          <div className="section-header">
            <span className="section-label">Gallery</span>
            <h2>Studio Moments</h2>
            <p>Step inside Heidi's Place: frame samples, design details, finished work, and the hands-on attention behind every custom project.</p>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={150}>
          <div className="image-gallery-grid studio-moments-grid">
            {heidiShowcaseImages.map((image, index) => renderGalleryItem(image, {
              className: index === 0 || index === 2 ? 'large' : undefined,
              sizes: '(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw',
            }))}
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
            {renderGalleryItem(galleryImages[0])}
            {renderGalleryItem(galleryImages[1])}
            {renderGalleryItem(galleryImages[2])}
          </div>
          <div className="section-cta">
            <p>Love what you see? Let us frame your favorite piece.</p>
            <a href="tel:2064911368" className="cta-button-inline">Call or text for an appointment →</a>
          </div>
          <div className="image-gallery-grid">
            {renderGalleryItem(galleryImages[3])}
            {renderGalleryItem(galleryImages[4])}
          </div>
        </AnimatedSection>
      </section>

      {/* Needlework — reversed layout (text right, image left) */}
      <section className="gallery-section alt-bg" id="needlework-specialist">
        <AnimatedSection>
          <div className="split-section reverse">
            <div className="split-images">
              {renderGalleryItem(galleryImages[5], { className: 'large', sizes: '(max-width: 768px) 100vw, 50vw' })}
              <div className="split-images-row">
                {renderGalleryItem(galleryImages[6], { sizes: '(max-width: 768px) 50vw, 25vw' })}
                {renderGalleryItem(galleryImages[7], { sizes: '(max-width: 768px) 50vw, 25vw' })}
                {renderGalleryItem(galleryImages[8], { sizes: '(max-width: 768px) 50vw, 25vw' })}
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
            {renderGalleryItem(galleryImages[9], { className: 'featured', sizes: '(max-width: 768px) 100vw, 50vw' })}
            {renderGalleryItem(galleryImages[10], { sizes: '(max-width: 768px) 100vw, 50vw' })}
            {renderGalleryItem(galleryImages[11], { sizes: '(max-width: 768px) 100vw, 50vw' })}
          </div>
          <div className="section-cta">
            <p>Have something special to frame? We love a creative challenge.</p>
            <a href="tel:2064911368" className="cta-button-inline">Let's Talk About Your Project →</a>
          </div>
          <div className="image-gallery-grid wide">
            {renderGalleryItem(uniqueTouchFeatureImage, {
              className: 'featured',
              sizes: '(max-width: 768px) 100vw, 50vw',
            })}
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
              {renderGalleryItem(galleryImages[13], { className: 'large', sizes: '(max-width: 768px) 100vw, 50vw' })}
              <div className="split-images-row">
                {renderGalleryItem(galleryImages[14], { sizes: '(max-width: 768px) 50vw, 25vw' })}
                {renderGalleryItem(galleryImages[15], { sizes: '(max-width: 768px) 50vw, 25vw' })}
              </div>
            </div>
            {renderGalleryItem(galleryImages[16], {
              sizes: '(max-width: 768px) 100vw, 50vw',
              style: { marginTop: '16px' },
            })}
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
                <span><a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="review-link">Google Reviews</a></span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"Heidi provides absolutely gorgeous and professional framing. She is kind, patient, and works with your vision and your budget to find the right materials for your project. The result was stunning and I will return!"</p>
              <div className="testimonial-author">
                <strong>Anjanette V.</strong>
                <span><a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="review-link">Google Reviews</a></span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p>"Heidi invests her time and expertise in your artwork. It felt like she had all the time in the world to help make choices that would create a showpiece. We are thrilled! Completed before scheduled and price competitive!"</p>
              <div className="testimonial-author">
                <strong>Clark H.</strong>
                <span><a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="review-link">Google Reviews</a></span>
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
                We know your time is valuable. Heidi's Place works by appointment in Buckley
                with one-on-one design time in the studio. We can also come to you across
                Buckley, Enumclaw, Bonney Lake, Sumner, and the Greater Puget Sound area,
                bringing samples when your framing needs to match your home or business.
              </p>
              <div className="contact-info">
                <a href="tel:2064911368" className="contact-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  <div>
                    <strong>Call or Text</strong>
                    <span>(206) 491-1368</span>
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
                    <span>12729 Pioneer Way E, Buckley, WA 98321</span>
                  </div>
                </div>
              </div>
              <form className="request-form" onSubmit={handleRequestSubmit}>
                <h3>Request an Appointment</h3>
                <div className="form-field">
                  <label htmlFor="request-name">Name</label>
                  <input id="request-name" name="name" autoComplete="name" required />
                </div>
                <div className="form-field">
                  <label htmlFor="request-contact">Phone or Email</label>
                  <input id="request-contact" name="contact" autoComplete="email" required />
                </div>
                <div className="form-field">
                  <label htmlFor="request-project">What are you framing?</label>
                  <textarea id="request-project" name="project" rows={4} required />
                </div>
                <button type="submit" className="request-submit">Send Request</button>
              </form>
            </div>
            <div className="about-right">
              <div className="about-image">
                <ResponsiveImage
                  src={studioImage.src}
                  alt={studioImage.alt}
                  widths={generatedWidthsFor(studioImage)}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about-map">
                <iframe
                  src="https://maps.google.com/maps?q=Heidi%27s+Place+Custom+Framing+12729+Pioneer+Way+E+Buckley+WA+98321&output=embed&z=14"
                  width="100%"
                  height="200"
                  style={{ border: 0, borderRadius: '16px' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Heidi's Place location - Buckley, WA"
                ></iframe>
                <p className="map-caption">Serving Buckley and the Greater Puget Sound area</p>
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
            <span className="footer-tagline">Elevate your picture to a work of Art</span>
          </div>
          <div className="footer-info">
            <p>
              Heidis.frames@gmail.com &bull; (206) 491-1368 &bull; 12729 Pioneer Way E, Buckley, WA 98321
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
