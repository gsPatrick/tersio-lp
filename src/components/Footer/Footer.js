import Image from 'next/image';
import Link from 'next/link';
import styles from './Footer.module.css';
import { FaInstagram, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Seção Superior do Rodapé com 3 Colunas */}
        <div className={styles.footerGrid}>
          {/* Coluna 1: Logo e Sobre */}
          <div className={styles.footerColumn}>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Tersio IDBAS Advogados Associados Logo"
                width={200}
                height={100}
                className={styles.footerLogo}
              />
            </Link>
            <p className={styles.footerTagline}>
              Soluções jurídicas estratégicas e humanizadas para pessoas e empresas.
            </p>
          </div>

          {/* Coluna 2: Contato */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerTitle}>Contato</h4>
            <ul className={styles.contactList}>
              <li>
                <FaMapMarkerAlt />
                <span>Rua Álvaro Coelho, 183, Centro, Pres. Epitácio/SP</span>
              </li>
              <li>
                <FaPhone />
                <span>(18) 98116-2508</span>
              </li>
              <li>
                <FaEnvelope />
                <span>drtersioidbas@hotmail.com</span>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Links Úteis */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerTitle}>Links Úteis</h4>
            <ul className={styles.linkList}>
              <li><Link href="/#sobre">Sobre o Escritório</Link></li>
              <li><Link href="/#atuacao">Áreas de Atuação</Link></li>
              <li><Link href="/#equipe">Nossa Equipe</Link></li>
              <li><Link href="/#contato">Fale Conosco</Link></li>
            </ul>
          </div>
        </div>

        {/* Divisor e Seção Inferior */}
        <div className={styles.footerDivider}></div>

        <div className={styles.footerBottom}>
          {/* Container para os textos de copyright e créditos */}
          <div className={styles.creditsContainer}>
            <p className={styles.copyright}>
              © {currentYear} Tersio Idbas Advogados. Todos os direitos reservados.
            </p>
            {/* LINHA DE CRÉDITO ADICIONADA AQUI */}
            <p className={styles.developerCredit}>
              Desenvolvido por <a href="https://codebypatrick.dev/" target="_blank" rel="noopener noreferrer">Patrick.Developer</a>
            </p>
          </div>
          <div className={styles.socialLinks}>
            <a href="https://www.instagram.com/tersioidbasadv/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;