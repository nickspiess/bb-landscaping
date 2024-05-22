import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { useInView } from 'react-intersection-observer';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import styles from './styles/OurWork.module.css';

const testimonials = [
  {
    name: 'John Doe',
    text: 'BB Landscaping did an amazing job with our yard. Highly recommend their services!',
  },
  {
    name: 'Jane Smith',
    text: 'Professional and efficient. Our garden looks beautiful thanks to BB Landscaping.',
  },
  {
    name: 'Sam Wilson',
    text: 'Great work! The team was friendly and the results were outstanding.',
  },
];

const OurWork = () => {
  const { ref: infoSectionRef, inView: infoSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <>
      <section className={styles.landingHeader}>
        <div
          className={`${styles.infoSection} ${infoSectionInView ? styles.visible : styles.hidden}`}
          ref={infoSectionRef}
        >
          <div>
            <h3>Family Owned & Operated</h3>
            <img className={styles.familyImg} src="/family.png" alt="Family Owned & Operated" />
          </div>
          <div>
            <h3 className={styles.starsHeader}>5 Star Reviews</h3>
            <img className={styles.starsImg} src="/quality.png" alt="5 Star Reviews" />
          </div>
          <div>
            <h3>Quality Service</h3>
            <img className={styles.qualityImg} src="/badge.png" alt="Quality Service" />
          </div>
        </div>
      </section>
      <div></div>
      <section className={styles.ourWork}>
        <div className={`${styles.content} ${inView ? styles.visible : styles.hidden}`} ref={ref}>
          <div className={styles.upperSection}>
            <div className={styles.aboutUsContainer}>
              <h3 className={styles.aboutTitle}>Who We Are</h3>
              <p className={styles.aboutText}>Brief explanation of your company and mission.  Lots of filler text to show the width of this text box</p>
              <p className={styles.aboutText}>Highlight how the differentiation from the competition occurs.<br/></p>
              <p className={styles.aboutText}>Any other information you'd like to share with your customer base.<br/></p>
              <button className={styles.aboutButton}>Contact Us</button>
            </div>
            <div className={styles.carouselContainer}>
            <h3 className={styles.workTitle}>See Our Work:</h3>
              <Carousel className={styles.carousel} autoPlay infiniteLoop showThumbs={false}>
                <div className={styles.imgContainer}>
                  <img className={styles.image} src="/bb_show_1.jpeg" alt="Work 1" />
                </div>
                <div className={styles.imgContainer}>
                  <img className={styles.image} src="/bb_show_2.jpeg" alt="Work 2" />
                </div>
                <div className={styles.imgContainer}>
                  <img className={styles.image} src="/bb_show_3.jpeg" alt="Work 3" />
                </div>
              </Carousel>
            </div>
          </div>
          <div className={styles.lowerSection}>
            <div className={styles.testimonialsHead}>Testimonials</div>
            <div className={styles.testimonialContainer}>
            {inView && (
              <Carousel
                className={styles.testimonialsCarousel}
                autoPlay
                interval={5000}
                infiniteLoop
                showThumbs={false}
                showArrows
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={styles.testimonialBox}>
                    <p className={styles.testimonialText}>"{testimonial.text}"</p>
                    <p className={styles.testimonialName}>- {testimonial.name}</p>
                  </div>
                ))}
              </Carousel>
            )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurWork;
