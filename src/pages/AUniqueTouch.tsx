import './Home.css';

export default function AUniqueTouch() {
  return (
    <div className="home-container">
      <section className="gallery-section" style={{ paddingTop: '40px' }}>
        <div className="section-header">
          <span className="section-label">Creativity</span>
          <h2>A Unique Touch</h2>
          <p>
            Heidi's Place has creative solutions for your unique pieces. When you need
            just the right framing, we can help. Free design consultations with a framer
            trained in design and color theory give you the best options to enhance your unique piece.
          </p>
        </div>

        <div className="image-gallery-grid wide">
          <div className="gallery-item featured">
            <img
              src="https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_033.jpg"
              alt="Custom framing with unique personal touches"
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://www.heidisplaceframes.com/Framing%20and%20other/April%202007%20149.jpg"
              alt="Custom uniform and memorabilia framing"
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img
              src="https://www.heidisplaceframes.com/Framing%20and%20other/June%202006%20027.jpg"
              alt="Creative multi-opening custom frame design"
              loading="lazy"
            />
          </div>
        </div>

        <div className="unique-features" style={{ marginTop: '60px' }}>
          <div className="split-section">
            <div className="split-text">
              <h2>Creative Solutions for Every Piece</h2>
              <p>
                We are experienced with special cuts, inserting plaques, and even hand
                painting custom designs on the mats. At Heidi's Place you will find your
                unique styles for your personal enjoyment or gifts that last a lifetime.
              </p>
              <div className="split-highlights">
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Special cuts and openings</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Custom plaque insertions</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Hand-painted mat designs</span>
                </div>
                <div className="highlight-item">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                  <span>Free design consultations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Have Something Unique to Frame?</h2>
          <p>Let's get creative — schedule your free design consultation</p>
          <div className="hero-cta">
            <a href="tel:4254892569" className="cta-button primary">Call (425) 489-2569</a>
            <a href="mailto:Heidis.frames@gmail.com" className="cta-button secondary">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
