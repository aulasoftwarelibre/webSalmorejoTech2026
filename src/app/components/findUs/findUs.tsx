import styles from "./findUs.module.css";
import Image from "next/image";
import map from "../../assets/map.png";

export default function FindUs() {
  return (
    <div className={styles.container}>
      <p className={styles.findUs}>ENCUENTRANOS</p>
      <div className={styles.mapContainer}>
            <Image 
              src={map}
              alt="maps location"
              className={styles.mapImage}
            />
        </div>

    </div>
  );
}