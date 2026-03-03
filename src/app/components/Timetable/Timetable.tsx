import React, { useState } from 'react'
import styles from './Timetable.module.css'

const Schedule: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<{
    title: string
    author: string
    track?: string
  } | null>(null)

  const handleEventClick = (title: string, author: string, track?: string) => {
    setSelectedEvent({ title, author, track })
  }

  const closeModal = () => {
    setSelectedEvent(null)
  }

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
        <div className={styles.fullWidthEvent} onClick={() => handleEventClick('ACTO DE BIENVENIDA', 'TBA')}>
          <h3 className={styles.scheduleTitleTimetable}>ACTO DE BIENVENIDA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>9:30</p>
          <p className={styles.timeText}>10:20</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent} onClick={() => handleEventClick('TBA', 'TBA', 'TRACK OMEYA')}>
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}>TBA</p>
          </div>
          <div className={styles.trackEvent} onClick={() => handleEventClick('TBA', 'TBA', 'TRACK MUDÉJAR')}>
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}>TBA</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>10:25</p>
          <p className={styles.timeText}>10:55</p>
        </div>
        <div className={styles.fullWidthEvent} onClick={() => handleEventClick('DESAYUNO', 'TBA')}>
          <h3 className={styles.scheduleTitleTimetable}>DESAYUNO</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>9:30</p>
          <p className={styles.timeText}>10:20</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent} onClick={() => handleEventClick('TBA', 'TBA', 'TRACK OMEYA')}>
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}>TBA</p>
          </div>
          <div className={styles.trackEvent} onClick={() => handleEventClick('TBA', 'TBA', 'TRACK MUDÉJAR')}>
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}>TBA</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>11:45</p>
          <p className={styles.timeText}>12:25</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent} onClick={() => handleEventClick('TBA', 'TBA', 'TRACK OMEYA')}>
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}>TBA</p>
          </div>
          <div className={styles.trackEvent} onClick={() => handleEventClick('TBA', 'TBA', 'TRACK MUDÉJAR')}>
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}>TBA</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>12:30</p>
          <p className={styles.timeText}>13:05</p>
        </div>
        <div className={styles.fullWidthEvent} onClick={() => handleEventClick('TAPA', 'TBA')}>
          <h3 className={styles.scheduleTitleTimetable}>TAPA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>13:10</p>
          <p className={styles.timeText}>13:50</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent} onClick={() => handleEventClick('TBA', 'TBA', 'TRACK OMEYA')}>
            <h5 className={styles.scheduleAuthor}>TRACK OMEYA</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}>TBA</p>
          </div>
          <div className={styles.trackEvent} onClick={() => handleEventClick('TBA', 'TBA', 'TRACK MUDÉJAR')}>
            <h5 className={styles.scheduleAuthor}>TRACK MUDÉJAR</h5>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}>TBA</p>
          </div>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>14:40</p>
          <p className={styles.timeText}>15:50</p>
        </div>
        <div className={styles.fullWidthEvent} onClick={() => handleEventClick('COMIDA', 'TBA')}>
          <h3 className={styles.scheduleTitleTimetable}>COMIDA</h3>
        </div>
      </div>

      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>9:30</p>
          <p className={styles.timeText}>10:20</p>
        </div>
        <div className={styles.tracksContainer}>
          <div className={styles.trackEvent} onClick={() => handleEventClick('TBA', 'TBA', 'TRACK OMEYA')}>
            <h3 className={styles.scheduleTitle}>TBA</h3>
            <p className={styles.scheduleAuthor}>TBA</p>
          </div>
        </div>
      </div>

      <h2 className={styles.scheduleTitleTimetable}>TALLER</h2>
      
      <div className={styles.scheduleRow}>
        <div className={styles.timeBlock}>
          <p className={styles.timeText}>14:40</p>
          <p className={styles.timeText}>15:50</p>
        </div>
        <div className={`${styles.fullWidthEvent} ${styles.workshopEvent}`} onClick={() => handleEventClick('TBA', 'TBA')}>
          <h3 className={styles.scheduleTitle}>TBA</h3>
        </div>
      </div>

      {selectedEvent && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <span className={styles.close} onClick={closeModal}>
              &times;
            </span>
            {selectedEvent.track && (
              <p className={styles.modalTrack}>{selectedEvent.track}</p>
            )}
            <h2 className={styles.modalTitle}>{selectedEvent.title}</h2>
            <p className={styles.modalAuthor}> {selectedEvent.author}</p>
            <div className={styles.modalBody}>
              <p>TBA</p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Schedule