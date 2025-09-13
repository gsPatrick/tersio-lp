import styles from './PracticeAreas.module.css';
import { FaUsers, FaLandmark, FaUniversity, FaShoppingCart, FaBriefcase, FaShieldAlt } from 'react-icons/fa';

// Array de dados com as áreas de atuação (nenhuma mudança aqui)
const practiceAreas = [
  {
    icon: <FaUsers />,
    title: 'Direito de Família e Sucessões',
    description: 'Soluções em questões de divórcio, guarda, pensão, inventários e planejamento sucessório com sensibilidade e discrição.'
  },
  {
    icon: <FaLandmark />,
    title: 'Direito Previdenciário',
    description: 'Assessoria completa para aposentadorias, pensões, auxílios e outros benefícios junto ao INSS, na via administrativa e judicial.'
  },
  {
    icon: <FaUniversity />,
    title: 'Direito Bancário',
    description: 'Atuação na defesa dos seus direitos contra cláusulas abusivas, juros excessivos e práticas indevidas de instituições financeiras.'
  },
  {
    icon: <FaShoppingCart />,
    title: 'Direito do Consumidor',
    description: 'Protegemos seus interesses em conflitos de consumo, buscando a reparação por produtos, serviços e cobranças indevidas.'
  },
  {
    icon: <FaBriefcase />,
    title: 'Direito Trabalhista',
    description: 'Defesa dos direitos de trabalhadores e empresas, com foco em rescisões, horas extras, e conformidade com a legislação.'
  },
  {
    icon: <FaShieldAlt />,
    title: 'Direito Criminal',
    description: 'Defesa técnica e estratégica em todas as fases do processo criminal, garantindo o direito à ampla defesa e um julgamento justo.'
  }
];

const PracticeAreas = () => {
  return (
    <section id="atuacao" className={styles.practiceSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.preTitle}>ÁREAS DE ATUAÇÃO</p>
          <h2 className={styles.title}>Expertise Jurídica ao seu Alcance</h2>
          <p className={styles.subtitle}>
            Atuação completa em consultoria preventiva e contenciosa, com estratégias personalizadas para garantir a segurança jurídica de nossos clientes.
          </p>
        </div>

        <div className={styles.grid}>
          {practiceAreas.map((area, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.iconWrapper}>
                {area.icon}
              </div>
              <h3 className={styles.cardTitle}>{area.title}</h3>
              <p className={styles.cardDescription}>{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreas;