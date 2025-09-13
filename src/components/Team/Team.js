import Image from 'next/image';
import styles from './Team.module.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const mainLawyers = [
  {
    image: '/team-tersio.png',
    name: 'Tersio Idbas Moraes Silva',
    role: 'Sócio Fundador',
    oab: 'OAB/SP 123.456',
  },
  {
    image: '/advogada1.png',
    name: 'Ana R. J. M. Porto de Almeida',
    role: 'Advogada Associada',
    oab: 'OAB/SP 789.012',
  },
];

const supportTeam = [
  {
    name: 'Talíria Martins Menezes',
    role: 'Assistente Jurídica',
  },
  {
    name: 'Carolina Marques Gomes',
    role: 'Estagiária / Recepção',
  },
];

const Team = () => {
  return (
    <section id="equipe" className={styles.teamSection}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.preTitle}>NOSSA EQUIPE</p>
          <h2 className={styles.title}>Profissionais Dedicados e Comprometidos</h2>
          <p className={styles.subtitle}>
            Conheça os especialistas que trabalham de forma integrada para garantir a melhor defesa para os seus interesses.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Renderiza os cards dos advogados principais */}
          {mainLawyers.map((member, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.imageWrapper}>
                <Image
                  src={member.image}
                  alt={`Foto de ${member.name}`}
                  fill // fill irá preencher o container
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{member.name}</h3>
                <p className={styles.role}>{member.role}</p>
                {member.oab && <p className={styles.oab}>{member.oab}</p>}
                <div className={styles.socialLinks}>
                  <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href="#" aria-label="Email"><FaEnvelope /></a>
                </div>
              </div>
            </div>
          ))}

          {/* Card unificado para a Equipe de Apoio - NOVA ESTRUTURA */}
          <div className={styles.supportCardHorizontal}>
            <Image
              src="/equipe-apoio3.jpg"
              alt="Equipe de apoio do escritório Tersio IDBAS"
              fill // fill é a chave para preencher o container
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className={styles.supportCardImage}
            />
            <div className={styles.supportCardOverlay}></div>
            <div className={styles.supportCardContent}>
              <h3 className={styles.supportTitle}>Equipe de Apoio</h3>
              <div className={styles.supportTeamWrapper}>
                {supportTeam.map((member, index) => (
                  <div className={styles.supportMember} key={index}>
                    <p className={styles.supportName}>{member.name}</p>
                    <p className={styles.supportRole}>{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;