import './Home.css';

export default function DistinctiveFraming() {
  return (
    <div className="home-container">
      <section className="gallery-section" style={{ paddingTop: '40px' }}>
        <div className="section-header">
          <span className="section-label">Services</span>
          <h2>Distinctive Framing</h2>
          <p>
            The right custom framing can enhance your valuable art piece. Whether it's an original,
            poster, or a special photograph, Heidi's Place has the expertise to help you pick colors
            and designs to make your piece look its best.
          </p>
        </div>

        <div className="split-section">
          <div className="split-text">
            <h2>Expert Design & Color Selection</h2>
            <p>
              We are a home-based business with over 20 years experience bringing unsurpassed
              quality and design. Custom framing is an investment of your time and should not
              be rushed or interrupted.
            </p>
            <p>
              Heidi's Place will also come to you! If you would like to match your framing
              with your decor, we make personal house or business calls, bringing our samples
              to you. We value you as a customer and look forward to giving you the best
              custom framing service available.
            </p>
            <div className="split-highlights">
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Over 20 years of framing experience</span>
              </div>
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Bachelor of Fine Arts degree</span>
              </div>
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Personal in-home consultations available</span>
              </div>
            </div>
          </div>
          <div className="split-images">
            <div className="gallery-item large">
              <img
                src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010084.JPG"
                alt="Beautifully framed art pieces displayed on a wall"
                loading="lazy"
              />
            </div>
            <div className="split-images-row">
              <div className="gallery-item">
                <img
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010091.JPG"
                  alt="Custom framed pictures with decorative accents"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010090.JPG"
                  alt="Elegant frame selection showcasing design expertise"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Frame Your Art?</h2>
          <p>Schedule a personal consultation today</p>
          <div className="hero-cta">
            <a href="tel:4254892569" className="cta-button primary">Call (425) 489-2569</a>
            <a href="mailto:Heidis.frames@gmail.com" className="cta-button secondary">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
