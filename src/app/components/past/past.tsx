import styles from "./past.module.css";
import Image from "next/image";
import Salmorejo2025 from "../../assets/Salmorejo2025.webp";
import Salmorejo2022 from "../../assets/Salmorejo2022.webp";
import Salmorejo2023 from "../../assets/Salmorejo2023.webp";
import Salmorejo2024 from "../../assets/Salmorejo2024.webp";

export const Past = () => {
  return (
    <div>
      <div className={`${styles.textbox}`}>
        <div className={`${styles.primarytext}`}>
          ¿Quieres saber más de nosotros?
        </div>
      </div>
      <div className="grid justify-items-center">
        <div className={`${styles.webscontainer}`}>
          Échale un vistazo a nuestros eventos anteriores.
          <div className={`${styles.webs}`}>
            <a
              href="https://salmorejo.tech/2025/"
              target="blank"
              className="w-full"
            >
              <Image
                src={Salmorejo2025}
                alt="Salmorejo2025"
                className={`${styles.web} w-full`}
              ></Image>
            </a>
            <a
              href="https://salmorejo.tech/2024/"
              target="blank"
              className="w-full"
            >
              <Image
                src={Salmorejo2024}
                alt="Salmorejo2024"
                className={`${styles.web} w-full`}
              ></Image>
            </a>
            <a
              href="https://salmorejo.tech/2023/"
              target="blank"
              className="w-full"
            >
              <Image
                src={Salmorejo2023}
                alt="Salmorejo2023"
                className={`${styles.web} w-full`}
              ></Image>
            </a>
            <a
              href="https://salmorejo.tech/2022/"
              target="blank"
              className="w-full"
            >
              <Image
                src={Salmorejo2022}
                alt="Salmorejo2022"
                className={`${styles.web} w-full`}
              ></Image>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
