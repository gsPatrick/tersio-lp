import styles from './WhatsAppButton.module.css';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // Mesmo número e link que usamos na seção de contato
  const whatsappNumber = '18981162508';
  const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá, vi o site e gostaria de mais informações.`;

  return (
    <a
      href={whatsappLink}
      className={styles.whatsappButton}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
};

export default WhatsAppButton;