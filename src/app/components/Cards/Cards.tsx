import styles from "./Cards.module.css";
import Card from "../Card/Card";

const DarioFront = "PeoplePhotos/front/eljefazofront.webp";
const DarioBack = "PeoplePhotos/back/elbossback.webp";

interface CardInfo {
  name: string;
  description: string;
  backDescription: string;
  photo: string;
  backphoto: string;
  lklink?: string;
  ghlink?: string;
  twlink?: string;
  otherlink?: string;
}

interface CardSection {
  sectionName: string;
  cardList: CardInfo[];
}

const General: CardInfo[] = [
  {
    name: "Dario Martínez Kostyuk",
    description:
      "Coordinador del SalmorejoTech 2026 y estudiante de Ing. Informática",
    backDescription:
      "En mis tiempos libres me dedico a cacharrear, probar, romper y arreglar",
    photo: DarioFront,
    backphoto: DarioBack,
    lklink: "https://www.linkedin.com/in/000Volk000",
    ghlink: "https://github.com/000Volk000",
    twlink: "https://x.com/000Volk000",
    otherlink: "https://linktree.volkhost.es",
  },
  {
    name: "Pedro Jesus Castilla Rodríguez",
    description: "Si no puedes leer el código, no eres el dueño",
    backDescription: "Soy mas de GazpachoTech",
    photo: "PeoplePhotos/front/pedrofront.webp",
    backphoto: "PeoplePhotos/back/pedroback.webp",
    ghlink: "https://github.com/TheIronfoxX ",
    twlink: "https://x.com/Ironfox_XTT",
  },
];

const Gestion: CardInfo[] = [
  {
    name: "Pablo Miguel Martínez Segovia",
    description: "Siempre cocinando alguna idea nueva.",
    backDescription: "Siempre cocinando cualquier cosa.",
    photo: "PeoplePhotos/front/pablofront.webp",
    backphoto: "PeoplePhotos/back/pabloback.webp",
    lklink:
      "https://www.linkedin.com/in/pablo-miguel-mart%C3%ADn-segovia-1ab9001b9",
    ghlink: "https://github.com/PMMS22",
  },
  {
    name: "Antonio Cañete López",
    description: "Soy cañete jeje",
    backDescription: "Soy cañete otra vez jaja",
    photo: "PeoplePhotos/front/cañetefront.webp",
    backphoto: "PeoplePhotos/back/cañeteback.webp",
    lklink:
      "https://www.linkedin.com/in/antonio-ca%C3%B1ete-l%C3%B3pez-928a17366/",
    ghlink: "https://github.com/i32caloa",
    twlink: "https://x.com/Antonio_cl53",
  },
  {
    name: "Sergio Palacios López",
    description:
      "Alumno de 3º de Informática, especializado en computación. Fan número 1 del flamenquín.",
    backDescription:
      "Llámame hill climbing, pues seré el primero en encontrar el óptimo local de tu corazón.",
    photo: "PeoplePhotos/front/sergiofront.webp",
    backphoto: "PeoplePhotos/back/sergioback.webp",
    lklink: "https://www.linkedin.com/in/sergio-palacios-l%C3%B3pez-695736352/",
    ghlink: "https://github.com/Serpal64",
  },
  {
    name: "Carlos Torres Jiménez",
    description: "Me gustan los retos",
    backDescription: "Me gustan los retos",
    photo: "PeoplePhotos/front/carlitosfront.webp",
    backphoto: "PeoplePhotos/back/carelitosback.webp",
  },
  {
    name: "Alejandro Martos Bellido",
    description:
      "Estudiando Ingeniería de Software para que la informática esté al alcance de todos.",
    backDescription: "Todo es vibe-coding si estás chill siempre",
    photo: "PeoplePhotos/front/alejandrofront.webp",
    backphoto: "PeoplePhotos/back/alejandroback.webp",
    lklink: "www.linkedin.com/in/alejandromartosbellido",
    ghlink: "https://github.com/alejandrombe",
    twlink: "https://x.com/alejandro_mbe",
  },
];

const Infraestructura: CardInfo[] = [
  {
    name: "David Martínez Molina",
    description: "Estudiante de 3º de informática, afrontando la vida con humor",
    backDescription: "Soy literalmente balatro balatrez 🤡",
    photo: "PeoplePhotos/front/david.webp",
    backphoto: "PeoplePhotos/back/davidMback.webp",
    lklink:
      "https://www.linkedin.com/in/david-martinez-76b284352/",
    ghlink: "https://github.com/darkghost078",
  },
  {
    name: "David Sánchez Palomino",
    description: "Heyy soy un tio formal y me flipa el desarrollo de software",
    backDescription: "Number 1 esclavizador de Gemini (con criterio)",
    photo: "PeoplePhotos/front/davidfront.webp",
    backphoto: "PeoplePhotos/back/davidback.webp",
    lklink:
      "https://www.linkedin.com/in/david-s%C3%A1nchez-palomino-a06671322/?skipRedirect=true",
    ghlink: "https://github.com/davidI9",
    twlink: "https://x.com/davd19_",
    otherlink: "https://david19-page.vercel.app/",
  },
  {
    name: "Juán Antonio Mellado Arenas",
    description:
      "3° de ingeniería informática, ¡siempre dispuesto y con muchísimas ganas de aprender!",
    backDescription: "Glu glu glu glu",
    photo: "PeoplePhotos/front/juanfront.webp",
    backphoto: "PeoplePhotos/back/juanback.webp",
    lklink:
      "https://www.linkedin.com/in/juan-mellado-02056a352?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    ghlink: "https://github.com/ByteKata08",
    twlink: "https://x.com/__juaneljulaint",
  },
  {
    name: "Roxana Ortiz Mellado",
    description: "Estudiante de ingeniería informática",
    backDescription: "Estudiante de ingeniería informática",
    photo: "PeoplePhotos/front/roxanafront.webp",
    backphoto: "PeoplePhotos/back/roxanaback.webp",
  },
  {
    name: "Nicolás Sánchez Álvarez",
    description: "Estudiante de ingeniería informática en la UCO. ",
    backDescription: "SalmorejoTech‼️",
    photo: "PeoplePhotos/front/nicofront.webp",
    backphoto: "PeoplePhotos/back/nicoback.webp",
    ghlink: "https://github.com/dextbrawl",
  },
  {
    name: "Chenhao Zheng",
    description: "Amo y odio programar",
    backDescription: "Amo y odio programar",
    photo: "PeoplePhotos/front/chenfront.webp",
    backphoto: "PeoplePhotos/back/chenback.webp",
  },
];

const Marketing: CardInfo[] = [
  {
    name: "Jaime Hernández Pérez",
    description: "Máquina de posts y memes recién salidos de Italia",
    backDescription:
      "Una vez entras en Ingeniería del Software nunca escapas del Scrum",
    photo: "PeoplePhotos/front/jaimefront.webp",
    backphoto: "PeoplePhotos/back/jaimeback.webp",
    lklink: "https://www.linkedin.com/in/jaime-hp/",
    ghlink: "https://github.com/JaimeHP05",
    twlink: "https://x.com/JaimeH_05",
  },
  {
    name: "Manuel Reyes Serrano",
    description: "Experto en aprender",
    backDescription: "Hice un botón y la página se volvió azul",
    photo: "PeoplePhotos/front/tefryfront.webp",
    backphoto: "PeoplePhotos/back/tefryconunfurro.webp",
    lklink: "https://www.linkedin.com/in/manuel-reyes-a15283352/",
    twlink: "https://x.com/Tefry_nt",
  },
  {
    name: "Alicia Muriel Fernández",
    description:
      "Estudiante de 3º de Ingeniería Informática, especializada en Computación.",
    backDescription:
      "Siempre con ganas de aprender y lista para afrontar cualquier reto",
    photo: "PeoplePhotos/front/aliciafront.webp",
    backphoto: "PeoplePhotos/back/aliciaback.webp",
    lklink:
      "https://www.linkedin.com/in/alicia-muriel-fern%C3%A1ndez-ab083538a/",
    ghlink: "https://github.com/i32mufea",
    twlink: "https://x.com/amurif13",
  },
  {
    name: "Rafael Girón Prats",
    description: "Especialista en aportar soluciones con rigor y dedicación.",
    backDescription: "Lo mejor del SalmorejoTech es la comida gratis",
    photo: "PeoplePhotos/front/rafafront.webp",
    backphoto: "PeoplePhotos/back/rafaback.webp",
    lklink: "https://linkedin.com/in/rafa-girón-prats-683a263b4",
    ghlink: "https://github.com/Rafalete-UCO",
    twlink: "https://x.com/faralete",
  },
];

const Diseño: CardInfo[] = [
  {
    name: "Antonio Jesús Merlo Morales",
    description: "3° Informática - Computación",
    backDescription:
      'Si funciona, no lo toques',
    photo: "PeoplePhotos/front/antoniofront.webp",
    backphoto: "PeoplePhotos/back/antonioback.webp",
    lklink: "https://www.linkedin.com/in/antonio-jesús-merlo-morales-28ba162a8?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    ghlink: "https://rincondeaj.github.io/",
  },
  {
    name: "Javier León Torrecilla",
    description: "Estudiante de Ingeniería Informática en la UCO",
    backDescription: "🤠",
    photo: "PeoplePhotos/front/cucofront.webp",
    backphoto: "PeoplePhotos/back/cucoback.webp",
  },
  {
    name: "Gema María Espejo Plasencia",
    description: "Si no lo consigo hoy, lo intentaré mañana",
    backDescription: "Madre de una bola gorda de pelo monísima ",
    photo: "PeoplePhotos/front/gemafront.webp",
    backphoto: "PeoplePhotos/back/gemaback.webp",
  },
  {
    name: "Adrián Ortiz Rodríguez",
    description: "Estudiante infiltrado de ingeniería eléctrica",
    backDescription:
      'A  veces en la vida hay que decir " amai " y seguir para delante',
    photo: "PeoplePhotos/front/adrianfront.webp",
    backphoto: "PeoplePhotos/back/adrianback.webp",
    lklink: "https://www.linkedin.com/in/arrimarcos/",
    ghlink: "https://github.com/adrianmarcos1823-gif",
  },
    {
    name: "Minghan Wang",
    description: "Un estudiante de informatica abierto al aprendizaje.",
    backDescription: "Ojalá el meme de Cristiano Ronaldo y Messi hubiese sido idea mía.",
    photo: "PeoplePhotos/front/minghanfront.webp",
    backphoto: "PeoplePhotos/back/minghanback.webp",
  }
];

const Sections: CardSection[] = [
  {
    sectionName: "General",
    cardList: General,
  },
  {
    sectionName: "Gestión",
    cardList: Gestion,
  },
  {
    sectionName: "Infraestructura",
    cardList: Infraestructura,
  },
  {
    sectionName: "Marketing",
    cardList: Marketing,
  },
  {
    sectionName: "Diseño",
    cardList: Diseño,
  },
];

export default function Cards() {
  return (
    <>
      <div>
        <h2
          className={`${styles.title} bg-white/30 backdrop-blur-xs border border-neutral-400/20 text-3xl py-5`}
        >
          Nuestro equipo
        </h2>
        {Sections.map((section) => (
          <div key={section.sectionName} className="justify-items-center grid">
            <h3
              className={`${styles.group} bg-white/30 backdrop-blur-xs border border-neutral-400/20 text-3xl py-5`}
            >
              {section.sectionName}
            </h3>
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
                        otherlink={card.otherlink}
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
