import styles from './Differentials.module.css';
import { FaBalanceScale, FaGavel, FaHandshake, FaBullseye } from 'react-icons/fa';

const differentials = [
  {
    icon: <FaHandshake />,
    title: 'Atendimento Humanizado',
    description: 'Acreditamos na proximidade com o cliente. Cada caso é tratado com a máxima atenção, sensibilidade e feedbacks constantes.'
  },
  {
    icon: <FaBalanceScale />,
    title: 'Ética e Transparência',
    description: 'Nossa atuação é pautada na integridade. Garantimos clareza em cada etapa do processo, construindo uma relação de confiança mútua.'
  },
  {
    icon: <FaGavel />,
    title: 'Experiência Comprovada',
    description: 'Com mais de uma década de atuação, nossa equipe possui o conhecimento e a prática necessários para lidar com casos complexos e estratégicos.'
  },
  {
    icon: <FaBullseye />,
    title: 'Foco em Resultados',
    description: 'Utilizamos estratégias jurídicas assertivas e personalizadas para defender seus interesses de forma eficaz, buscando sempre a melhor solução.'
  }
];

const Differentials = () => {
  return (
    <section id="diferenciais" className={styles.diffSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.preTitle}>NOSSOS PRINCÍPIOS</p>
          <h2 className={styles.title}>Os Pilares da Nossa Atuação</h2>
          <p className={styles.subtitle}>
            Valores que guiam cada decisão e garantem uma advocacia de excelência, centrada no cliente e comprometida com a justiça.
          </p>
        </div>

        <div className={styles.grid}>
          {differentials.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconWrapper}>
                {item.icon}
              </div>
              <h3 className={styles.itemTitle}>{item.title}</h3>
              <p className={styles.itemDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Differentials;