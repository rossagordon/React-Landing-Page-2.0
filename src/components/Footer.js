import React from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join our monthly newsletter for the latest news on our upcoming
          roasts, events, and coupons.
        </p>
        <p className="footer-subscription text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">Our Mission</Link>
            <Link to="/about">Locations</Link>
            <Link to="/about">Careers</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
            </Link>
          </div>
          <div className="social-icons">
            <Link
              to="/"
              className="social-icon-link facebook"
              target="_blank"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </Link>

            <Link
              to="/"
              className="social-icon-link instagram"
              target="_blank"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </Link>

            <Link
              to="/"
              className="social-icon-link twitter"
              target="_blank"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>
      </section>
      <div className="copyright">
      <small className="website-rights">© 2022</small>
      </div>
    </div>
  );
}

export default Footer;
