import './Home.css';

export default function NeedleworkSpecialist() {
  return (
    <div className="home-container">
      <section className="gallery-section" style={{ paddingTop: '40px' }}>
        <div className="section-header">
          <span className="section-label">Specialty</span>
          <h2>Needlework Specialist</h2>
          <p>
            We know that you spend valuable time making sure each stitch is done right,
            so we make sure it's framed right. With over 20 years experience, Heidi's Place
            ensures your needlework is stretched and framed correctly.
          </p>
        </div>

        <div className="split-section reverse">
          <div className="split-images">
            <div className="gallery-item large">
              <img
                src="https://www.heidisplaceframes.com/Framing%20and%20other/DSC_0020.JPG"
                alt="Expertly framed needlework piece"
                loading="lazy"
              />
            </div>
            <div className="split-images-row">
              <div className="gallery-item">
                <img
                  src="https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_046.jpg"
                  alt="Needlework being carefully stretched and prepared"
                  loading="lazy"
                />
              </div>
              <div className="gallery-item">
                <img
                  src="/needlework.jpg"
                  alt="Finished needlework with professional framing"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="split-text">
            <h2>Framing Done Right</h2>
            <p>
              Each piece is hand stretched using stainless steel pins. We never use glue or
              sticky boards that might damage or discolor your piece. Needlework rows are
              lined up straight and mats do not cut off rows or valuable stitches you took
              time to make.
            </p>
            <p>
              Then Heidi's Place helps you choose matting and a frame to enhance your piece
              and make it look its best. From stretching to fitting we provide the finest
              quality and service.
            </p>
            <div className="split-highlights">
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Hand-stretched with stainless steel pins</span>
              </div>
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>No glue or sticky boards — ever</span>
              </div>
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Rows perfectly aligned, no cut-off stitches</span>
              </div>
              <div className="highlight-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4a0e0e" strokeWidth="2"><polyline points="20 6 9 17 4 12" /></svg>
                <span>Expert matting and frame selection</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-content">
          <h2>Have Needlework to Frame?</h2>
          <p>Trust the specialist — schedule a consultation today</p>
          <div className="hero-cta">
            <a href="tel:4254892569" className="cta-button primary">Call (425) 489-2569</a>
            <a href="mailto:Heidis.frames@gmail.com" className="cta-button secondary">Email Us</a>
          </div>
        </div>
      </section>
    </div>
  );
}
