'use client';

import React, { useState } from 'react';
import MidSection from './MidSection';
import LowerSection from './LowerSection';
import Footer from './Footer'
import styles from '../page.module.css';
import Image from 'next/image';



const HomePage = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  
    const toggleNav = () => {
      setIsNavOpen(!isNavOpen);
    };
  
    return (
      <>
  
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.topBar}>
            <div className={styles.contactInfo}>
                <p><a className={styles.phone} href="tel:6512450261">651-245-0261</a></p>
                <p><a className={styles.contactEmail} href="mailto:Ben.griffin.landscaping@gmail.com">Ben.griffin.landscaping@gmail.com</a></p>
            </div>
            <div className={styles.socialLinks}>
                <a href="https://www.facebook.com/ben.griffin.landscaping" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                    <Image src="/FacebookLink.png" alt="Facebook" width={24} height={24} />
                </a>
                <a href="https://nextdoor.com/pages/bb-landscape-llc-hugo-mn/" aria-label="Nextdoor" target="_blank" rel="noopener noreferrer">
                    <Image src="/nextdoor.svg" alt="Nextdoor" width={24} height={24} />
                </a>
                <a href="#" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                    <Image src="/InstaLink.png" alt="Instagram" width={24} height={24} />
                </a>
            </div>
          </div>
          <nav className={styles.navbar}>
            <div className={styles.logoContainer}>
              <Image
                src="/bb_logo_transparent.png" // Path to your image in the public directory
                alt="Logo"
                width={140}
                height={100}
                className={styles.logoImage}
              />
              <p>Where great landscapes begin</p>
            </div>
            <ul className={`${styles.navLinks} ${isNavOpen ? styles.navOpen : ''}`}>
              <li><a className={styles.navLink} href="#">Home</a></li>
              <li><a className={styles.navLink} href="#">Portfolio</a></li>
              <li><a className={styles.navLink} href="#">Services</a></li>
              <li><a className={styles.navLink} href="#">Shop</a></li>
              <div className={styles.quoteInMenu}>
                <a className={styles.quote} href="#">FREE QUOTE</a>
              </div>
            </ul>
            <button className={styles.burger} onClick={toggleNav}>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
              <span className={styles.burgerLine}></span>
            </button>
            <div className={styles.quoteDesktop}>
              <a className={styles.quote} href="#">FREE QUOTE</a>
            </div>
          </nav>
          <div className={styles.heroSection}>
            <Image
              src="/bb_background.jpeg" // Path to your image in the public directory
              alt="Hero Image"
              layout="fill"
              objectFit="cover"
              className={styles.heroImage}
            />
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>BB Landscaping Professionals</h1>
              <p className={styles.heroInfo}>Your low cost, full service landscaping company in the Twin Cities Metro Area.</p>
              <div className={styles.heroButtons}>
                <a href="#" className={styles.moreInfo}>MORE INFO</a>
                <a href="#" className={styles.getQuote}>GET A QUOTE</a>
              </div>
            </div>
            <div className={styles.heroOverlay}></div>
          </div>
        </header>
        <MidSection />
        <LowerSection />
        <Footer />
      </div>
      </>
    );
  };
  
  export default HomePage;
  