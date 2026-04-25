import React, { useState } from "react";
import styles from "./Timetable.module.css";

const Schedule: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    author: string;
    track?: string;
  } | null>(null);

  const handleEventClick = (title: string, author: string, track?: string) => {
    setSelectedEvent({ title, author, track });
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.timetableBlock}>
        <h2 className={styles.textPurple}>HORARIOS</h2>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>08:30</p>
          <p className={styles.timeText}>08:55</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>CHECK IN</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>09:00</p>
          <p className={styles.timeText}>09:10</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>ACTO DE BIENVENIDA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>09:15</p>
          <p className={styles.timeText}>09:55</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() => handleEventClick("TBA", "", "TRACK OMEYA")}
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}></p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Más allá del pixel perfect",
                "Como desarrolladora frontend, rompo el patrón de priorizar solo lo visual. En esta charla muestro cómo código limpio y semánticamente sólido impacta en usuarias reales: desde componentes reutilizables con HTML5 accesible hasta estados de carga/errores que evitan frustración.",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>Más allá del pixel perfect</h3>
            <p className={styles.scheduleAuthor}>Arantxa Delgado Ruiz</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>10:00</p>
          <p className={styles.timeText}>10:30</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>DESAYUNO</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>10:35</p>
          <p className={styles.timeText}>11:15</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() => handleEventClick("TBA", "", "TRACK OMEYA")}
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}></p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "RISC-V: del estándar abierto a la interoperabilidad real",
                "RISC-V desempeña un papel clave en la nueva generación de hardware al basarse en un estándar abierto que impulsa la innovación. El desafío es asegurar la compatibilidad entre implementaciones para habilitar soluciones reales en distintos mercados. La sesión explicará cómo Quintauris impulsa su adopción alineando el ecosistema y garantizando la interoperabilidad.",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              RISC-V: del estándar abierto a la interoperabilidad real
            </h3>
            <p className={styles.scheduleAuthor}>Pedro Lopez Estepa</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>11:20</p>
          <p className={styles.timeText}>12:00</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                'Dale "Salmorejo" a tu IA: Construye tu primer servidor MCP',
                '¿Tu LLM alucina o no conoce tus datos privados? El Model Context Protocol (MCP) es el nuevo estándar abierto (el "USB" de la IA) para conectar modelos con tus herramientas. En esta charla aprenderemos a programar un servidor MCP desde cero. Expondremos recursos y herramientas para que la IA interactúe con tus APIs y bases de datos en tiempo real.',
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              Dale "Salmorejo" a tu IA: Construye tu primer servidor MCP
            </h3>
            <p className={styles.scheduleAuthor}>
              Alberto Jesus Gutierrez Juanes
            </p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Psicología de la Fluidez: diseño cognitivo con React 19",
                "Analizaremos cómo los usuarios piensan mientras interactúan con nuestras aplicaciones. Al separar intención y ejecución mediante rendering concurrente, podemos reducir fricción cognitiva y preservar la continuidad perceptiva. Una mirada técnica y neurocognitiva a cómo diseñar experiencias que realmente se sienten fluidas.",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Psicología de la Fluidez: diseño cognitivo con React 19
            </h3>
            <p className={styles.scheduleAuthor}>Ivan Sánchez</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>12:05</p>
          <p className={styles.timeText}>12:35</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>TAPA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>12:40</p>
          <p className={styles.timeText}>13:20</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "IA aplicada a optimización de procesos y gestión logística",
                "Desde el grupo de investigación KDIS trabajamos mano a mano con las últimas tendencias en IA para desarrollar nuevos modelos y ayudar a empresas a optimizar sus recursos y procesos industriales. Explicaremos cómo usar la IA para realizar mantenimiento predictivo, optimizar las rutas de una flota de vehículos o entender la distribución de sus datos, con ejemplos de proyectos reales.",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              IA aplicada a optimización de procesos y gestión logística
            </h3>
            <p className={styles.scheduleAuthor}>
              Joaquin Mateos Barroso y Rafael Egea Jurado
            </p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() => handleEventClick("TBA", "", "TRACK MUDÉJAR")}
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}></p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>13:25</p>
          <p className={styles.timeText}>14:05</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Arquitectura y producto: La casa por los cimientos! ",
                "Partiendo de la ideación de un nuevo producto digital, iremos ladrillo sobre ladrillo tomando las decisiones técnicas y de producto para que sea exitoso, robusto y soporte el paso del tiempo.",
                "TRACK OMEYA",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>
              Arquitectura y producto: La casa por los cimientos!
            </h3>
            <p className={styles.scheduleAuthor}>Marisa Martín Serrano</p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Arquitectura y producto: La casa por los cimientos!",
                "Partiendo de la ideación de un nuevo producto digital, iremos ladrillo sobre ladrillo tomando las decisiones técnicas y de producto para que sea exitoso, robusto y soporte el paso del tiempo.",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Arquitectura y producto: La casa por los cimientos!
            </h3>
            <p className={styles.scheduleAuthor}>Mario Espejo Quesada</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>14:10</p>
          <p className={styles.timeText}>15:20</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>COMIDA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>15:25</p>
          <p className={styles.timeText}>16:05</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() => handleEventClick("TBA", "", "TRACK OMEYA")}
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}></p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() =>
              handleEventClick(
                "Pesadilla en la cocina. Comunicación basada en eventos.",
                "¿Alguna vez te has preguntado si hay vida más allá de HTTP? En esta charla acompañaremos a Mr.Doe, gerente de un restaurante en plena expansión que necesita encontrar una forma más óptima de comunicación dentro de su equipo. Mientras tanto, aprenderemos las bases de la comunicación basada en eventos, comparando diferentes aproximaciones, aspectos positivos, negativos y aspectos a considerar.",
                "TRACK MUDÉJAR",
              )
            }
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>
              Pesadilla en la cocina. Comunicación basada en eventos.
            </h3>
            <p className={styles.scheduleAuthor}>Moisés Rodríguez Jurado</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>16:10</p>
          <p className={styles.timeText}>16:50</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() => handleEventClick("TBA", "", "TRACK OMEYA")}
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}></p>
          </div>
          <div
            className={styles.trackEvent}
            onClick={() => handleEventClick("TBA", "", "TRACK MUDÉJAR")}
          >
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}></p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>16:55</p>
          <p className={styles.timeText}>17:35</p>
        </div>
        <div className={styles.tracksContainer}>
          <div
            className={styles.trackEvent}
            onClick={() => handleEventClick("TBA", "", "TRACK OMEYA")}
          >
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}></p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>17:40</p>
          <p className={styles.timeText}>18:05</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>ACTO DE Despedida</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>18:10</p>
          <p className={styles.timeText}>19:40</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>NETWORKING</h3>
        </div>
      </div>

      {selectedEvent && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            {selectedEvent.track && (
              <p className={styles.modalTrack}>{selectedEvent.track}</p>
            )}
            <h2 className={styles.modalTitle}>{selectedEvent.title}</h2>
            <p className={styles.modalAuthor}> {selectedEvent.author}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Schedule;
