import React from "react";

function Footer() {
  return (
    <>
      <div className="subscription-container">
        {/* <h2 className="subscription-title">Subscribe to Our Newsletter</h2> */}
        <form className="subscription-form">
          <label className="subscription-title">
            Subscribe today to know updates on our products
          </label>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>Privacy Policy</li>
              <li>Refund Policy</li>
              <li>Shipping Policy</li>
              <li>Terms of Service</li>
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>Cancellation Policy</li>
              <li>My Account</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Programs</h3>
            <ul>
              <li>About Us</li>
              <li>Affiliate Program</li>
              <li>Wishlist</li>
              <li>Rewards</li>
              <li>Track Your Order</li>
              <li>Return & Exchanges</li>
              <li>Bulk Orders</li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Information</h3>
            <p>Get in touch</p>
            <p>1889745612356</p>
            <p>Follow us</p>
            <div className="social-media-icons">
              <a href="https://www.instagram.com">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.youtube.com">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.twitter.com">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.pinterest.com">
                <i className="fab fa-pinterest"></i>
              </a>
              <a href="https://www.linkedin.com">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          © 2023 INEXOFT STATIONARY PRODUCTS LLP. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
