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
        <h1 className={styles.text}>¡Estamos en directo!</h1>

        <div className={styles.butonsContainer}>
          <a
            href="https://www.youtube.com/live/1fJF0AjVHmg?is=6O3ID4-zd3nfqtSc"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.miboton}
          >
            Streaming OMEYA
          </a>
          <a
            href="https://www.youtube.com/live/VVmXjBXRnn0?is=SDkDleWdeMGMQQ3D"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.miboton}
          >
            Streaming Mudéjar
          </a>
        </div>
      </div>
    </div>
  );
}
