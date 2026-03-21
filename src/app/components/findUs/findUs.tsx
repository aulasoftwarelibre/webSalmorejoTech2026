import styles from "./findUs.module.css";
import Image from "next/image";
import map from "../../assets/map.webp";

export default function FindUs() {
  return (
    <div className={styles.container}>
      <div className={styles.findusContainer}>
        <p className={styles.findUs}>ENCUÉNTRANOS</p>
      </div>
      <div className={styles.mapContainer}>
        <a href="https://maps.app.goo.gl/bqrxVc7ceJjnZyVf9">
          <Image src={map} alt="maps location" className={styles.mapImage} />
        </a>
      </div>
    </div>
  );
}
