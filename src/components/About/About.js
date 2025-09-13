import Image from 'next/image';
import Link from 'next/link';
import styles from './About.module.css';
import { FaGavel, FaHandshake, FaBalanceScale } from 'react-icons/fa';

const About = () => {
  return (
    <section id="sobre" className={styles.aboutSection}>
      <div className={`${styles.container} container`}>
        {/* Coluna da Imagem */}
        <div className={styles.imageColumn}>
          <div className={styles.imageWrapper}>
            <Image
              src="/advogado.png" // Nome da imagem que você salvou em /public
              alt="Dr. Tersio Idbas Moraes Silva, fundador do escritório"
              width={450}
              height={550}
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Coluna do Texto */}
        <div className={styles.textColumn}>
          <p className={styles.preTitle}>NOSSA HISTÓRIA</p>
          <h2 className={styles.title}>Mais de uma Década de Atuação Jurídica com Ética e Proximidade</h2>
          <p className={styles.description}>
            Com mais de uma década de experiência, o escritório Tersio Idbas Advogados Associados é reconhecido pela prestação de serviços jurídicos éticos, ágeis e humanizados. Nossa missão vai além de resolver litígios; atuamos de forma preventiva, com consultoria e assessoria personalizada, para evitar futuros conflitos e garantir a segurança de nossos clientes.
          </p>
          <p className={styles.description}>
            Acreditamos que o maior patrimônio de uma sociedade de advocacia está nas pessoas. Por isso, nossa equipe de advogados, assistentes e estagiários trabalha de forma integrada e colaborativa, unindo conhecimento técnico, dedicação e sensibilidade para oferecer um atendimento diferenciado e próximo do cliente.
          </p>

          <ul className={styles.featuresList}>
            <li><FaHandshake /> Atendimento Humanizado e Personalizado</li>
            <li><FaGavel /> Defesa Assertiva e Comprometida com Resultados</li>
            <li><FaBalanceScale /> Clareza e Transparência em Cada Etapa</li>
          </ul>

          <Link href="/#contato" className={styles.ctaButton}>
            Conheça nossas áreas de atuação
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;