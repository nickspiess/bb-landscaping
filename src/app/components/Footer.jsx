import React from 'react';
import styles from './styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={`${styles.navCol} ${styles.col}`}>
            <h4>Navigation</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Shop</a></li>
            </ul>
          </div>
          <div className={`${styles.contactCol} ${styles.col}`}>
            <h4>Contact Us</h4>
            <ul>
              <li><p><a className={styles.phone} href="tel:6512450261">651-245-0261</a></p></li>
            <li><p><a className={styles.contactEmail} href="mailto:Ben.griffin.landscaping@gmail.com">Ben.griffin.landscaping@gmail.com</a></p></li>
              <li>143rd Ct N, Hugo, MN 55038</li>
            </ul>
          </div>
          <div className={`${styles.socialCol} ${styles.col}`}>
            <h4>Follow Us</h4>
            <div className={styles.socialIcons}>
              <a href="https://www.facebook.com/ben.griffin.landscaping" aria-label="Facebook"  target="_blank" rel="noopener noreferrer">
                <img src="/FacebookLink.png" alt="Facebook" />
              </a>
              <a href="https://nextdoor.com/pages/bb-landscape-llc-hugo-mn/" aria-label="Nextdoor"  target="_blank" rel="noopener noreferrer">
                <img src="/nextdoor.svg" alt="Nextdoor" />
              </a>
              <a href="https://www.instagram.com/" aria-label="Instagram"  target="_blank" rel="noopener noreferrer">
                <img src="/InstaLink.png" alt="Instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <p>&copy; {new Date().getFullYear()} BB Landscaping. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
