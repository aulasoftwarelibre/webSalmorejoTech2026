import styles from './Card.module.css'
import twLogo from '../../assets/twLogo.svg'
import ghLogo from '../../assets/ghLogo.svg'
import lkLogo from '../../assets/lkLogo.svg'

import { ReactNode, useState } from 'react'


interface CardProps {
  children: ReactNode
  description: string
  photo: string
  backphoto: string
  twlink?: string
  lklink?: string
  ghlink?: string
}

export default function Card({
  children,
  description,
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
      <img src="img_avatar.png" alt="Avatar">
      </img>
    </div>
    <div className={styles.flipCardBack}>
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
  )
}
