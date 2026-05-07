import styles from "./body.module.css";

export default function body() {
  return (
    <div className={styles.container}>
      <div className={styles.fondo}>
        <div className={styles.image}></div>
        <h1 className={styles.text}>
          LA CITA DE LA TECNOLOGÍA CORDOBESA REGRESA CON UNA ENERGÍA IMPARABLE
        </h1>
        <h1 className={styles.text2}>8 DE MAYO DE 2026</h1>
        {
          <a
            href="https://www.eventbrite.es/e/entradas-salmorejotech-2026-1986054851524"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.miboton}
          >
            ENTRADAS
          </a>
        }
      </div>
    </div>
  );
}
