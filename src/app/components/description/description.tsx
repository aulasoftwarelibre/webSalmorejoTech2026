import React from 'react';
import Image from 'next/image';
import styles from './description.module.css';
import asistenteImg from '../../assets/asistentes.png';
import ponenciasImg from '../../assets/ponencias.png';
import networkingImg from '../../assets/networking.png';

interface DescriptionProps {
  title?: string;
  description?: string;
  date?: string;
  location?: string;
  assistants?: number;
  talks?: number;
  sponsors?: string[];
}

const Description: React.FC<DescriptionProps> = ({
  title = "¿AÚN NO SABES QUÉ ES EL SALMOREJO TECH?",
  description = "Vuelve el evento más cordobés y tech de la provincia otro año más. Con grandes ponentes, networking y productos típicos de la capital de Al-Ándalus.",
  date = "8 de mayo",
  location = "Rectorado",
  assistants = 400,
  talks = 10,
  sponsors = ["patrocinadores", "Aula de Software Libre"]
}) => {

  const fullDescription = `${description} Este ${date} os esperamos en el ${location}. Gracias a nuestros ${sponsors[0]} y al ${sponsors[1]} por hacerlo posible.`;

  return (
    <div className={styles.container}>

      <div className={`${styles.glassCard}`}>
        <h2 className={styles.title}>{title}</h2>
      </div>

      <div className={`${styles.glassCard} ${styles.stats}`}>

        <div className={styles.stat}>
          <Image
            src={asistenteImg}
            alt="Asistentes"
            className={styles.statImage}
            width={120}
            height={120}
          />

          <div className={styles.statText}>
            <div>+{assistants}</div>
            <div>asistentes</div>
          </div>
        </div>

        <div className={styles.stat}>
          <Image
            src={ponenciasImg}
            alt="Ponencias"
            className={styles.statImage}
            width={120}
            height={120}
          />

          <div className={styles.statText}>
            <div>+{talks}</div>
            <div>ponencias</div>
          </div>
        </div>

        <div className={styles.stat}>
          <Image
            src={networkingImg}
            alt="Networking"
            className={styles.statImage}
            width={120}
            height={120}
          />

          <div className={styles.statText}>
            <div>Networking</div>
          </div>
        </div>

      </div>

      <div className={`${styles.glassCard} ${styles.content}`}>
        <p className={styles.fullText}>{fullDescription}</p>
      </div>

    </div>
  );
};

export default Description;