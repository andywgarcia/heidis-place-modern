import './Home.css';

export default function Quality() {
  return (
    <div className="home-container">
      <section className="gallery-section" style={{ paddingTop: '40px' }}>
        <div className="section-header">
          <span className="section-label">Craftsmanship</span>
          <h2>Quality Materials &amp; Craftsmanship</h2>
          <p>
            We want your art to be something you will treasure for a lifetime. Heidi's Place
            offers a full line of acid-free rag mats, UV glass, and museum quality mounting
            to protect your art from damaging effects of light and pollutants.
          </p>
        </div>

        <div className="split-section">
          <div className="split-text">
            <h2>Only the Finest Materials</h2>
            <p>
              We never compromise on quality and we use only real wood frames, no plastic
              or composite resin. At Heidi's Place quality and unique design come together
              to fit your style and decor at a price you can afford.
            </p>
            <div className="split-highlights">
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Acid-free rag mats for archival protection</span>
              </div>
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>UV protective glass available</span>
              </div>
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Museum-quality mounting techniques</span>
              </div>
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Real wood frames only — no plastic or resin</span>
              </div>
            </div>
          </div>
          <div className="split-images">
            <div className="gallery-item large">
              <img
                src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(38%20of%2049).jpg"
                alt="Heidi carefully crafting a custom frame"
                loading="lazy"
              />
            </div>
            <div className="split-images-row">
              <div className="gallery-item">
                <img
                  src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(45%20of%2049).jpg"
                  alt="Precision framing tools and craftsmanship"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(47%20of%2049).jpg"
                  alt="High-quality frame corner detail"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Quality You Can Trust</h2>
          <p>Protect your art with museum-quality framing</p>
          <div className="hero-cta">
            <a href="tel:4254892569" className="cta-button primary">Call (425) 489-2569</a>
            <a href="mailto:Heidis.frames@gmail.com" className="cta-button secondary">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
