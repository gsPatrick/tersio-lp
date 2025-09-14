import Link from 'next/link';
import styles from './TopBar.module.css';
import { FaPhone, FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const TopBar = () => {
  const whatsappNumber = '18981162508';
  const whatsappLink = `https://wa.me/55${whatsappNumber}`;
  const email = 'drtersioidbas@hotmail.com';
  const phone = '(18) 3281-6625';
  const instagram = 'https://www.instagram.com/tersioidbasadv/';

  // Removido o <motion.div> e as props de animação
  return (
    <div className={styles.topBar}>
      <div className={`${styles.container} container`}>
        <div className={styles.contactInfo}>
          <a href={`mailto:${email}`}>
            <FaEnvelope /> <span>{email}</span>
          </a>
        </div>
        <div className={styles.rightSection}>
          <div className={styles.socialIcons}>
            <a href={instagram} target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>
          <Link href={whatsappLink} className={styles.ctaButton} target="_blank">
              <FaWhatsapp />
              <span>Consultoria WhatsApp</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;