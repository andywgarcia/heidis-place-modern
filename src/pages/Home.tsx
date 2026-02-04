import '../styles.css';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-content">
          <div className="hero-badge">YOUR CUSTOM FRAMING</div>
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
              Schedule Appointment
            </a>
            <a href="mailto:Heidis.frames@gmail.com" className="cta-button secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>Distinctive Framing</h3>
            <p>Expert color and design selection to enhance your valuable art piece</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🧵</div>
            <h3>Needlework Specialist</h3>
            <p>Hand-stretched with stainless steel pins, never glue or sticky boards</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">✨</div>
            <h3>A Unique Touch</h3>
            <p>Creative solutions including special cuts, plaques, and custom mat designs</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⭐</div>
            <h3>Quality Materials</h3>
            <p>Acid-free rag mats, UV glass, and museum-quality mounting</p>
          </div>
        </div>
      </section>

      {/* Distinctive Framing Gallery */}
      <section className="gallery-section" id="distinctive-framing">
        <div className="section-header">
          <h2>Distinctive Framing</h2>
          <p>The right custom framing can enhance your valuable art piece. Whether it's an original, poster, or a special photograph, Heidi's Place has the expertise to help you pick colors and designs to make your piece look its best.</p>
        </div>
        <div className="image-gallery-grid">
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010084.JPG" 
              alt="Framed pieces" 
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010091.JPG" 
              alt="Framed pictures" 
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/Framing%20and%20other/P1010090.JPG" 
              alt="Framed piece" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Needlework Specialist Gallery */}
      <section className="gallery-section" id="needlework-specialist">
        <div className="section-header">
          <h2>Needlework Specialist</h2>
          <p>We know that you spend valuable time making sure each stitch is done right, so we make sure it's framed right. Each piece is hand stretched using stainless steel pins. We never use glue or sticky boards that might damage or discolor your piece.</p>
        </div>
        <div className="image-gallery-grid">
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/Framing%20and%20other/DSC_0020.JPG" 
              alt="Needlework" 
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_046.jpg" 
              alt="Needlework in process" 
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/Framing%20and%20other/finished.jpg" 
              alt="Finished needlework" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* A Unique Touch Gallery */}
      <section className="gallery-section" id="a-unique-touch">
        <div className="section-header">
          <h2>A Unique Touch</h2>
          <p>Heidi's Place has creative solutions for your unique pieces. We are experienced with special cuts, inserting plaques, and even hand painting custom designs on the mats.</p>
        </div>
        <div className="image-gallery-grid">
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/Framing%20and%20other/May_2011_033.jpg" 
              alt="Custom framing with unique touch" 
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/Framing%20and%20other/April%202007%20149.jpg" 
              alt="Custom uniform framing" 
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/Framing%20and%20other/June%202006%20027.jpg" 
              alt="Custom openings framing" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Quality Gallery */}
      <section className="gallery-section" id="quality">
        <div className="section-header">
          <h2>Quality Materials & Craftsmanship</h2>
          <p>We want your art to be something you will treasure for a lifetime. Heidi's Place offers a full line of acid-free rag mats, UV glass, and museum quality mounting to protect your art from damaging effects of light and pollutants.</p>
        </div>
        <div className="image-gallery-grid">
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(38%20of%2049).jpg" 
              alt="Quality craftsmanship" 
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(45%20of%2049).jpg" 
              alt="Working on framing" 
              loading="lazy"
            />
          </div>
          <div className="gallery-item">
            <img 
              src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(47%20of%2049).jpg" 
              alt="Quality frame" 
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section" id="about">
        <div className="about-content">
          <div className="about-text">
            <h2>Personal Attention You Deserve</h2>
            <p>
              We know your time is valuable. Heidi's Place provides you with a personal 
              appointment in our studio where you have one-on-one time with us. We can 
              also come to you! If you'd like to match your framing with your decor, 
              we make personal house or business calls, bringing our samples to you.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <strong>Phone:</strong> <a href="tel:4254892569">(425) 489-2569</a>
              </div>
              <div className="contact-item">
                <strong>Email:</strong> <a href="mailto:Heidis.frames@gmail.com">Heidis.frames@gmail.com</a>
              </div>
              <div className="contact-item">
                <strong>Location:</strong> Bothell, WA 98012
              </div>
            </div>
          </div>
          <div className="about-image">
            <img 
              src="https://www.heidisplaceframes.com/images/Heidi%202_24_11%20(30%20of%2049)%20copy.gif" 
              alt="Heidi's Studio" 
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
        <p>
          Heidi's Place&copy;2011 &bull; Heidis.frames@gmail.com &bull; (425)489-2569 &bull; Bothell, WA 98012
        </p>
      </footer>
    </div>
  );
}
