import styles from './Card.module.css'
import twLogo from '../../assets/ttLogoCard.svg'
import ghLogo from '../../assets/ghLogoCard.svg'
import lkLogo from '../../assets/lkLogoCard.svg'

import { ReactNode, useState } from 'react'


interface CardProps {
  children: ReactNode
  description: string
  backDescription :string
  photo: string
  backphoto: string
  twlink?: string
  lklink?: string
  ghlink?: string
}

export default function Card({
  children,
  description,
  backDescription,
  photo,
  backphoto,
  twlink = 'unknown',
  lklink = 'unknown',
  ghlink = 'unknown',
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const MostrarBoton = (boton: string) => boton !== 'unknown'

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
<div className={styles.flipCard} onClick={handleClick}>
  <div className={`${styles.flipCardInner} ${isFlipped ? styles.flipCardFlip : ''}`}>

    <div className={styles.flipCardFront}>

      <div className={styles.imageContainer}>
        <img src={photo} alt={`Foto de ${children}`} />
      </div>

      <p className={styles.nameText}>{children}</p>

      <div className={styles.textContainer}>
        <p className={styles.text}>{description}</p>
      </div>

        <div className={styles.iconsContainer}>
          {MostrarBoton(twlink) && (
            <a href={twlink} target="_blank" rel="noopener noreferrer">
              <img src={twLogo.src} alt="Twitter" className={styles.iconContainer} />
            </a>
          )}
          {MostrarBoton(lklink) && (
            <a href={lklink} target="_blank" rel="noopener noreferrer">
              <img src={lkLogo.src} alt="LinkedIn" className={styles.iconContainer} />
            </a>
          )}
          {MostrarBoton(ghlink) && (
            <a href={ghlink} target="_blank" rel="noopener noreferrer">
              <img src={ghLogo.src} alt="GitHub" className={styles.iconContainer} />
            </a>
          )}
        </div>

    </div>


    <div className={styles.flipCardBack}>
      <div className={styles.imageBack}>
        <img src={backphoto} alt={`Foto de ${children}`}/>
      </div>

      <div className={styles.textBackContainer}>
        <p className={styles.backText}>{backDescription}</p>
      </div>
    </div>
  </div>
</div>
  )
}
