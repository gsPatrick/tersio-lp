'use client'; // Necessário para usar hooks como useState

import { useState } from 'react'; // Importar o useState
import styles from './Contact.module.css';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

const Contact = () => {
  const whatsappNumber = '18981162508';
  const whatsappLink = `https://wa.me/55${whatsappNumber}?text=Olá, gostaria de agendar uma consulta.`;

  // 1. Estado para gerenciar os dados do formulário e o status do envio
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: '',
  });

  // Função para atualizar o estado quando o usuário digita
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 2. Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: '' });

    // Dados que serão enviados para a API
    const dataToSend = {
      name: formData.name,
      email: formData.email,
      subject: `Nova mensagem de contato de ${formData.name}`, // Assunto padrão
      // Adicionando o telefone à mensagem principal
      message: `Telefone: ${formData.phone}\n\nMensagem:\n${formData.message}`,
    };

    try {
      // 3. Fazendo a requisição para o seu servidor
      const response = await fetch('https://geral-resend-tersio.r954jc.easypanel.host/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      if (!response.ok) {
        // Se a resposta não for 2xx, lança um erro
        const errorData = await response.json();
        throw new Error(errorData.error || 'Ocorreu um erro ao enviar a mensagem.');
      }

      // Sucesso!
      setFormStatus({ submitting: false, success: true, error: '' });
      // Limpa o formulário
      setFormData({ name: '', email: '', phone: '', message: '' });

    } catch (error) {
      // Erro
      setFormStatus({ submitting: false, success: false, error: error.message });
    }
  };


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
          {/* 4. Formulário modificado */}
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label htmlFor="name">Nome Completo</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label htmlFor="email">Seu Melhor E-mail</label>
            </div>
            <div className={styles.formGroup}>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <label htmlFor="phone">Telefone / WhatsApp</label>
            </div>
            <div className={styles.formGroup}>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <label htmlFor="message">Como podemos ajudar?</label>
            </div>
            <button
              type="submit"
              className={styles.submitButton}
              disabled={formStatus.submitting}
            >
              {formStatus.submitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>

            {/* 5. Mensagens de feedback para o usuário */}
            {formStatus.success && (
              <p style={{ color: 'green', marginTop: '1rem', textAlign: 'center' }}>
                Mensagem enviada com sucesso! Agradecemos o contato.
              </p>
            )}
            {formStatus.error && (
              <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
                Erro: {formStatus.error}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;