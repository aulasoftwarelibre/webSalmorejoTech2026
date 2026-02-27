import React, { useState } from 'react'
import styles from './Timetable.module.css'

// const TBA: React.FC<{}> = () => {
//   return (
//     <>
//       <div
//         className={`col-5 container-fluid d-flex justify-content-center ${styles.card}`}

//       >
//         <div className="row ">
//           <div className="col-12 d-flex align-items-center">
//             <div className="row ">
//               <h3 className={`align-items-center ${styles.scheduleTitle}`}>TBA</h3>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const FirstCard: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <div
        className={`col-10 container-fluid d-flex justify-content-center ${styles.cardEmptyFirst}`}
      >
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <h3 className={`${styles.scheduleTitle} ${styles.center}`}>
              {props.title}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

const Card: React.FC<{ title: string }> = (props) => {
  return (
    <>
      <div
        className={`col-10 container-fluid d-flex justify-content-center ${styles.cardEmptyComida}`}
      >
        <div className="row">
          <div className="col-12 d-flex align-items-center">
            <h3 className={`${styles.scheduleTitle} ${styles.center}`}>
              {props.title}
            </h3>
          </div>
        </div>
      </div>
    </>
  )
}

// const DoubleCard: React.FC<{
//   title: string
//   author: string
//   image: string
//   image2: string
//   descripcion1: string
//   descripcion2: string
//   descripcionCharla: string
// }> = (props) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   return (
//     <>
//       <div
//         className={`col-5 container-fluid d-flex ${styles.card}`}
//         onClick={toggleModal}
//       >
//         <div className="row align-items-center">
//           <div className="col-lg-7 col-md-12 py-4">
//             <div className="row">
//               <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
//                 {props.title}
//               </h3>
//             </div>
//             <div>
//               <h5
//                 className={styles.scheduleAuthor}
//                 style={{ color: '#A8041A' }}
//               >
//                 {props.author}
//               </h5>
//             </div>
//           </div>
//           <div className="col-lg-5 col-md-12 py-4">
//             <img
//               src={props.image}
//               className={`img-fluid ${styles.singleImg}`}
//               alt="..."
//               style={{ maxHeight: '100%', maxWidth: '50%' }}
//             />
//             <img
//               src={props.image2}
//               className={`img-fluid ${styles.singleImg}`}
//               alt="..."
//               style={{ maxHeight: '100%', maxWidth: '50%' }}
//             />
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className={styles.modal} onClick={toggleModal}>
//           <div className={styles.modalContent}>
//             <span className={styles.close} onClick={toggleModal}>
//               &times;
//             </span>
//             <h2>{props.title}</h2>
//             <p>Author: {props.author}</p>
//             <div className="row">
//               <div className="col-lg-7 col-md-12 py-4">
//                 <p className="m-0">{props.descripcion1} </p>
//                 <p className="m-0">{props.descripcion2}</p>
//                 <p className="mt-4">{props.descripcionCharla}</p>
//               </div>
//               <div className="col-lg-5 col-md-12 py-lg-4">
//                 <img
//                   src={props.image}
//                   className={`img-fluid ${styles.singleImg}`}
//                   alt="..."
//                   style={{ maxHeight: '100%', maxWidth: '50%' }}
//                 />
//                 <img
//                   src={props.image2}
//                   className={`img-fluid ${styles.singleImg}`}
//                   alt="..."
//                   style={{ maxHeight: '100%', maxWidth: '50%' }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

const SingleCardJose: React.FC<{
  title: string
  author: string
  image?: any
  descripcion: string
  descripcionCharla: string
  trackName?: string
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <>
      <div
        className={`col-10 container-fluid d-flex ${styles.cardEmptySingle}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center mx-auto">
          <div className="col-12 mb-3 text-center">
            <h1 className="h1 d-none d-md-block mt-2" style={{ color: '#A8041A' }}>
            {props.trackName}
            </h1>
            <h1 className="h3 d-block d-md-none mt-3" style={{ color: '#A8041A' }}>
            {props.trackName}
            </h1>
          </div>
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
                {props.title}
              </h3>
            </div>
            <div>
              <h5
                className={styles.scheduleAuthor}
                style={{ color: '#A8041A' }}
              >
                {props.author}
              </h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4 ">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxWidth: '50%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContentSingle}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p className="mt-3">{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '60%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const SingleCard: React.FC<{
  title: string
  author: string
  image?: any
  descripcion: string
  descripcionCharla: string
  tba?: boolean
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    if (!props.tba) {
      setIsModalOpen(!isModalOpen)
    }
  }

  return (
    <>
      <div
        className={`col-10 container-fluid d-flex ${styles.cardEmptySingle}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center mx-auto">
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
                {props.tba ? 'TBA' : props.title} { }
              </h3>
            </div>
            {!props.tba && (
              <div>
                <h5
                  className={styles.scheduleAuthor}
                  style={{ color: '#A8041A' }}
                >
                  {props.author}
                </h5>
              </div>
            )}
          </div>
          {!props.tba && (
            <div className="col-lg-5 col-md-12 py-4 ">
              <img
                src={props.image}
                className={`img-fluid ${styles.singleImg}`}
                alt="..."
                style={{ maxHeight: '100%' }}
              />
            </div>
          )}
        </div>
      </div>

      {isModalOpen && !props.tba && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContentSingle}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p className="mt-5">{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// const SingleCardTalleres: React.FC<{
//   title: string
//   author: string
//   image: string
//   descripcion: string
//   descripcionCharla: string
// }> = (props) => {
//   const [isModalOpen, setIsModalOpen] = useState(false)

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen)
//   }

//   return (
//     <>
//       <div
//         className={`col-10 container-fluid d-flex ${styles.card}`}
//         onClick={toggleModal}
//       >
//         <div className="row align-items-center mx-auto">
//           <div className="col-lg-7 col-md-12 py-4">
//             <div className="row">
//               <h3 className={styles.scheduleTitle}>{props.title}</h3>
//             </div>
//             <div>
//               <h5 className={styles.scheduleAuthor}>{props.author}</h5>
//             </div>
//           </div>
//           <div className="col-lg-5 col-md-12 py-4 ">
//             <img
//               src={props.image}
//               className={`img-fluid ${styles.singleImg}`}
//               alt="..."
//               style={{ maxHeight: '100%', maxWidth: '50%' }}
//             />
//           </div>
//         </div>
//       </div>

//       {isModalOpen && (
//         <div className={styles.modal} onClick={toggleModal}>
//           <div className={styles.modalContentSingleTalleres}>
//             <span className={styles.close} onClick={toggleModal}>
//               &times;
//             </span>
//             <h2>{props.title}</h2>
//             <p>Author: {props.author}</p>
//             <div className="row">
//               <div className="col-lg-7 col-md-12 py-4">
//                 <p>{props.descripcion}</p>
//                 <p className="mt-4">{props.descripcionCharla}</p>
//               </div>
//               <div className="col-lg-5 col-md-12 py-lg-4">
//                 <img
//                   src={props.image}
//                   className="img-fluid"
//                   alt="..."
//                   style={{ maxHeight: '100%', maxWidth: '70%' }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

const BigDoubleCard: React.FC<{
  title: string
  author: string
  image?: any
  descripcion: string
  descripcionCharla: string
  image2?: any
  isTba: boolean
  trackName?: string
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  if (props.isTba) {
    return (
      <div className={`col-5 container-fluid d-flex ${styles.card}`}>
        <div className="row align-items-center mx-auto">
          <div className="col-12 py-4">
            <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
              TBA
            </h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`col-5 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center">
          <div className="col-12 mb-3 text-center">
            <h1 className="h1 d-none d-md-block mt-2" style={{ color: '#A8041A' }}>
            {props.trackName}
            </h1>
            <h1 className="h3 d-block d-md-none mt-3" style={{ color: '#A8041A' }}>
            {props.trackName}
            </h1>
          </div>

          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
                {props.title}
              </h3>
            </div>
            <div>
              <h5
                className={styles.scheduleAuthor}
                style={{ color: '#A8041A' }}
              >
                {props.author}
              </h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-lg-4">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100px', maxWidth: '100%' }}
            />
            <img
              src={props.image2}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100px', maxWidth: '100%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-6 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p>{props.descripcionCharla}</p>
              </div>

              <div className="col-lg-3 col-md-12 py-4">
                <img
                  src={props.image}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
              <div className="col-lg-3 col-md-12 py-4">
                <img
                  src={props.image2}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '100%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const ScheduleCard: React.FC<{
  title: string
  author: string
  image?: any
  descripcion: string
  descripcionCharla: string
  isTba: boolean
  trackName?: string
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  if (props.isTba) {
    return (
      <div className={`col-5 container-fluid d-flex ${styles.card}`}>
        <div className="row align-items-center mx-auto">
          <div className="col-12 py-4">
            <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
              TBA
            </h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`col-5 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center">
        <div className="col-12 mb-3 text-center">
            <h1 className="h1 d-none d-md-block mt-2" style={{ color: '#A8041A' }}>
            {props.trackName}
            </h1>
            <h1 className="h3 d-block d-md-none mt-3" style={{ color: '#A8041A' }}>
            {props.trackName}
            </h1>
          </div>
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
                {props.title}
              </h3>
            </div>
            <div>
              <h5
                className={styles.scheduleAuthor}
                style={{ color: '#A8041A' }}
              >
                {props.author}
              </h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100%', maxWidth: '80%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const DoubleCard: React.FC<{
  title: string
  author: string
  image?: any
  descripcion: string
  descripcionCharla: string
  isTba: boolean
  trackName?: string
}> = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  if (props.isTba) {
    return (
      <div className={`col-5 container-fluid d-flex ${styles.card}`}>
        <div className="row align-items-center mx-auto">
          <div className="col-12 py-4">
            <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
              TBA
            </h3>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className={`col-5 container-fluid d-flex ${styles.card}`}
        onClick={toggleModal}
      >
        <div className="row align-items-center">
          <div className="col-12 mb-3 text-center">
            <h1 className="h1 d-none d-md-block mt-2" style={{ color: '#A8041A' }}>
            {props.trackName}
            </h1>
            <h1 className="h3 d-block d-md-none mt-3" style={{ color: '#A8041A' }}>
            {props.trackName}
            </h1>
          </div>
          <div className="col-lg-7 col-md-12 py-4">
            <div className="row">
              <h3 className={styles.scheduleTitle} style={{ color: '#A8041A' }}>
                {props.title}
              </h3>
            </div>
            <div>
              <h5
                className={styles.scheduleAuthor}
                style={{ color: '#A8041A' }}
              >
                {props.author}
              </h5>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 py-4">
            <img
              src={props.image}
              className={`img-fluid ${styles.singleImg}`}
              alt="..."
              style={{ maxHeight: '100%', maxWidth: '80%' }}
            />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className={styles.modal} onClick={toggleModal}>
          <div className={styles.modalContent}>
            <span className={styles.close} onClick={toggleModal}>
              &times;
            </span>
            <h2>{props.title}</h2>
            <p>Author: {props.author}</p>
            <div className="row">
              <div className="col-lg-7 col-md-12 py-4">
                <p>{props.descripcion}</p>
                <p>{props.descripcionCharla}</p>
              </div>
              <div className="col-lg-5 col-md-12 py-lg-4">
                <img
                  src={props.image}
                  className={`img-fluid ${styles.singleImg}`}
                  alt="..."
                  style={{ maxHeight: '100%', maxWidth: '70%' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

const Schedule: React.FC = () => {
  return (
    <div className={styles.scheduleContainer}>
      <div className={styles.timetableBlock}>
        <h2 className={styles.textPurple}>HORARIOS</h2>
      </div>
      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>9:00</p>
          <p className={styles.timeText}>9:25</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>ACTO DE BIENVENIDA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>9:30</p>
          <p className={styles.timeText}>10:20</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent}>
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>El impacto de la inteligencia artificial</h3>
            <p className={styles.scheduleAuthor}>Pedro Picapiedra</p>
          </div>
          <div className={styles.trackEvent}>
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>Cómo convertirse en el perfil que todos quieren</h3>
            <p className={styles.scheduleAuthor}>Gabriela Alba</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>10:25</p>
          <p className={styles.timeText}>10:55</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>DESAYUNO</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>9:30</p>
          <p className={styles.timeText}>10:20</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent}>
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>El impacto de la inteligencia artificial</h3>
            <p className={styles.scheduleAuthor}>Pedro Picapiedra</p>
          </div>
          <div className={styles.trackEvent}>
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>Cómo convertirse en el perfil que todos quieren</h3>
            <p className={styles.scheduleAuthor}>Gabriela Alba</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>11:45</p>
          <p className={styles.timeText}>12:25</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent}>
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>El impacto de la inteligencia artificial</h3>
            <p className={styles.scheduleAuthor}>Pedro Picapiedra</p>
          </div>
          <div className={styles.trackEvent}>
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>Cómo convertirse en el perfil que todos quieren</h3>
            <p className={styles.scheduleAuthor}>Gabriela Alba</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>12:30</p>
          <p className={styles.timeText}>13:05</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>TAPA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>13:10</p>
          <p className={styles.timeText}>13:50</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent}>
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>El impacto de la inteligencia artificial</h3>
            <p className={styles.scheduleAuthor}>Pedro Picapiedra</p>
          </div>
          <div className={styles.trackEvent}>
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>Cómo convertirse en el perfil que todos quieren</h3>
            <p className={styles.scheduleAuthor}>Gabriela Alba</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>14:40</p>
          <p className={styles.timeText}>15:50</p>
        </div>
        <div className={styles.fullWidthEvent}>
          <h3 className={styles.scheduleTitleTimetable}>COMIDA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>9:30</p>
          <p className={styles.timeText}>10:20</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent}>
            <h3 className={styles.scheduleTitle}>El impacto de la inteligencia artificial</h3>
            <p className={styles.scheduleAuthor}>Pedro Picapiedra</p>
          </div>
        </div>
      </div>

      <h2 className={styles.scheduleTitleTimetable}>TALLER</h2>
      
      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>14:40</p>
          <p className={styles.timeText}>15:50</p>
        </div>
        <div className={`${styles.fullWidthEvent} ${styles.workshopEvent}`}>
          <h3 className={styles.scheduleTitle}>openSUSE Linux Install Party</h3>
        </div>
      </div>

    </div>
  )
}

export default Schedule