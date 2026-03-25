import styles from "./Cards.module.css";
import Card from "../Card/Card";

const DavidMart = "PeoplePhotos/back/david.webp";
const DavidMartOP = "PeoplePhotos/back/david.webp";

interface CardInfo {
  name: string;
  description: string;
  backDescription: string;
  photo: string;
  backphoto: string;
  lklink: string;
  ghlink: string;
  twlink: string;
}

interface CardSection {
  sectionName: string;
  cardList: CardInfo[];
}

const Section1: CardInfo[] = [
  {
    name: "David Martínez Molina",
    description:
      "Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)",
    backDescription:
      "Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)",
    photo: DavidMart,
    backphoto: DavidMartOP,
    lklink: "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
    twlink: "https://github.com/darkghost078",
  },
  {
    name: "David Martínez Molina",
    description:
      "Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)",
    backDescription:
      "Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)",
    photo: DavidMart,
    backphoto: DavidMartOP,
    lklink: "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
    twlink: "https://github.com/darkghost078",
  },
  {
    name: "David Martínez Molina",
    description:
      "Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)",
    backDescription:
      "Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)",
    photo: DavidMart,
    backphoto: DavidMartOP,
    lklink: "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
    twlink: "https://github.com/darkghost078",
  },
  {
    name: "David Martínez Molina",
    description:
      "Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)",
    backDescription:
      "Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)",
    photo: DavidMart,
    backphoto: DavidMartOP,
    lklink: "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
    twlink: "https://github.com/darkghost078",
  },
];

const Section2: CardInfo[] = [
  {
    name: "David Martínez Molina",
    description:
      "Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)",
    backDescription:
      "Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)",
    photo: DavidMart,
    backphoto: DavidMartOP,
    lklink: "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
    twlink: "https://github.com/darkghost078",
  },
  {
    name: "David Martínez Molina",
    description:
      "Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)",
    backDescription:
      "Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)",
    photo: DavidMart,
    backphoto: DavidMartOP,
    lklink: "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
    twlink: "https://github.com/darkghost078",
  },
  {
    name: "David Martínez Molina",
    description:
      "Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)",
    backDescription:
      "Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)",
    photo: DavidMart,
    backphoto: DavidMartOP,
    lklink: "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
    twlink: "https://github.com/darkghost078",
  },
  {
    name: "David Martínez Molina",
    description:
      "Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)",
    backDescription:
      "Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)",
    photo: DavidMart,
    backphoto: DavidMartOP,
    lklink: "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
    twlink: "https://github.com/darkghost078",
  },
  {
    name: "David Martínez Molina",
    description:
      "Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)",
    backDescription:
      "Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)",
    photo: DavidMart,
    backphoto: DavidMartOP,
    lklink: "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
    twlink: "https://github.com/darkghost078",
  },
];

const Sections: CardSection[] = [
  {
    sectionName: "Section 1",
    cardList: Section1,
  },
  {
    sectionName: "Section 2",
    cardList: Section2,
  },
];

export default function Cards() {
  return (
    <>
      <div>
        <h2 className={styles.title}>Nuestro equipo</h2>
        {Sections.map((section) => (
          <div key={section.sectionName} className="justify-items-center grid">
            <h3 className={styles.group}>{section.sectionName}</h3>
            <div className="container w-full justify-center">
              <div className="row justify-content-center grid">
                <div className={`col-md-5 col-lg-4 ${styles.cardDisplay}`}>
                  {section.cardList.map((card) => (
                    <div key={card.name} className={styles.cardSlot}>
                      <Card
                        description={card.description}
                        backDescription={card.backDescription}
                        photo={card.photo}
                        backphoto={card.backphoto}
                        lklink={card.lklink}
                        ghlink={card.ghlink}
                        twlink={card.twlink}
                      >
                        {" "}
                        {card.name}{" "}
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
