import React from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './styles/LowerSection.module.css';

const teamMembers = [
  {
    name: 'B',
    position: 'Owner and Founder',
    image: '/person.jpeg',
    bio: 'B has over 20 years of experience in the landscaping industry.',
  },
  {
    name: 'B',
    position: 'Owner and Founder',
    image: '/person.jpeg',
    bio: 'B specializes in creating beautiful and sustainable garden designs.',
  },
  {
    name: 'Sample Name',
    position: 'Manager',
    image: '/person.jpeg',
    bio: '{Person} ensures all projects are completed on time and within budget.',
  },
  {
    name: 'Sample Name',
    position: 'Secretary',
    image: '/person.jpeg',
    bio: '{Manager} handles all in-office activities.',
  },
  {
    name: 'Sample Name',
    position: 'Field Lead',
    image: '/person.jpeg',
    bio: '{Field Lead} oversees and ensures all projects are handled correctly in the field.',
  },
  {
    name: 'Sample Name',
    position: 'Field Tech',
    image: '/person.jpeg',
    bio: '{Field Tech} is one of our field techs and will be on-site building and working your space.',
  },
];

const TeamAndCTA = () => {
  const { ref: teamSectionRef, inView: teamSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: ctaSectionRef, inView: ctaSectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={styles.lowerBackground}>
      <section
        className={`${styles.teamSection} ${teamSectionInView ? styles.visible : styles.hidden}`}
        ref={teamSectionRef}
      >
        <h2 className={styles.teamTitle}>Meet the Team</h2>
        <div className={styles.teamContainer}>
          {teamMembers.map((member, index) => (
            <div key={index} className={styles.teamMember}>
              <img src={member.image} alt={member.name} className={styles.teamImage} />
              <h3 className={styles.teamName}>{member.name}</h3>
              <p className={styles.teamPosition}>{member.position}</p>
              <p className={styles.teamBio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className={`${styles.ctaSection} ${ctaSectionInView ? styles.visible : styles.hidden}`}
        ref={ctaSectionRef}
      >
        <h2 className={styles.ctaTitle}>Ready to Build the Site BB Landscaping Deserves?</h2>
        <p className={styles.ctaText}>
          Contact Nick Spiess (651-216-9512) today to get a free consultation and to talk next steps based on your business needs!
        </p>
        <a href="tel:+16512169512" className={styles.ctaButton}>Give Me a Call</a>
      </section>
    </div>
  );
};

export default TeamAndCTA;
