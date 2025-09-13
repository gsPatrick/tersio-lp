import Link from 'next/link';
import styles from './Hero.module.css';
import { FaChevronRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.videoOverlay}></div>
      <video className={styles.backgroundVideo} autoPlay loop muted playsInline key="background-video">
        <source src="/background.mp4" type="video/mp4" />
        Seu navegador não suporta vídeos.
      </video>
      
      <div className={`${styles.heroContent} container`}>
        {/* Removidos os wrappers <motion.div> */}
        
        <p className={`${styles.preTitle} animate-on-load`}>
          Tersio Idbas Advogados Associados
        </p>
        
        <div className={`${styles.divider} animate-on-load`} style={{ animationDelay: '0.2s' }}></div>
        
        <h1 className={`${styles.mainTitle} animate-on-load`} style={{ animationDelay: '0.4s' }}>
          Soluções Jurídicas Estratégicas e Humanizadas
        </h1>
        
        <p className={`${styles.subtitle} animate-on-load`} style={{ animationDelay: '0.6s' }}>
          Atendimento personalizado para pessoas e empresas, garantindo segurança
          jurídica e transparência em cada etapa do processo.
        </p>
        
        <div className="animate-on-load" style={{ animationDelay: '0.8s' }}>
          <Link href="/#contato" className={styles.heroCta}>
            <span>Fale com um Especialista</span>
            <FaChevronRight />
          </Link>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;