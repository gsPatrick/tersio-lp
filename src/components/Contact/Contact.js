import styles from './Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const whatsappNumber = '18981162508';
  const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá, gostaria de agendar uma consulta.`;

  return (
    <section id="contato" className={styles.contactSection}>
      <div className={`${styles.container} container`}>
        {/* Coluna de Informações */}
        <div className={styles.infoColumn}>
          <p className={styles.preTitle}>FALE CONOSCO</p>
          <h2 className={styles.title}>Estamos Prontos Para Ouvir e Ajudar</h2>
          <p className={styles.subtitle}>
            Preencha o formulário ao lado ou utilize um de nossos canais de atendimento. Nossa equipe retornará o mais breve possível.
          </p>
          <ul className={styles.contactList}>
            <li>
              <FaMapMarkerAlt />
              <span>Rua Álvaro Coelho, 183, Centro, Presidente Epitácio/SP</span>
            </li>
            <li>
              <FaPhone />
              <span>(18) 3281-6625 | (18) 98116-2508</span>
            </li>
            <li>
              <FaEnvelope />
              <span>drtersioidbas@hotmail.com</span>
            </li>
          </ul>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
            <FaWhatsapp /> Fale Pelo WhatsApp
          </a>
        </div>

        {/* Coluna do Formulário */}
        <div className={styles.formColumn}>
          <form name="contact" method="POST" data-netlify="true">
            <input type="hidden" name="form-name" value="contact" />
            <div className={styles.formGroup}>
              <input type="text" id="name" name="name" required />
              <label htmlFor="name">Nome Completo</label>
            </div>
            <div className={styles.formGroup}>
              <input type="email" id="email" name="email" required />
              <label htmlFor="email">Seu Melhor E-mail</label>
            </div>
            <div className={styles.formGroup}>
              <input type="tel" id="phone" name="phone" required />
              <label htmlFor="phone">Telefone / WhatsApp</label>
            </div>
            <div className={styles.formGroup}>
              <textarea id="message" name="message" rows="5" required></textarea>
              <label htmlFor="message">Como podemos ajudar?</label>
            </div>
            <button type="submit" className={styles.submitButton}>Enviar Mensagem</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;