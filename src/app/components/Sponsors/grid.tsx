import { Fragment } from 'react'
import { SponsorCherry,SponsorPera, SponsorProps } from './index'
import { AlphabeticalSort } from '../../../lib/alphabeticalSort'
import styles from './sponsors.module.css'

interface SponsorsGridProps {
  sponsors: SponsorProps[]
}

export const SponsorsGrid = ({ sponsors }: SponsorsGridProps) => {
  const sponsorsPera = sponsors
    .filter((sponsor) => sponsor.type === 'PERA')
    .sort((a, b) => AlphabeticalSort(a.name, b.name))
  const sponsorsCherry = sponsors
    .filter((sponsor) => sponsor.type === 'CHERRY')
    .sort((a, b) => AlphabeticalSort(a.name, b.name))


  return (
    <Fragment>
      <h1 className={`${styles.schedule} bg-white/30 backdrop-blur-xs border border-neutral-400/20 text-3xl py-5`}>PATROCINADORES</h1>
      <h2 className={`${styles.scheduleType} bg-white/30 backdrop-blur-xs border border-neutral-400/20 text-3xl py-5`}>PERA</h2>  
      <div className={styles.background}>
        <div className={`${styles.containerPera} bg-white/30 backdrop-blur-md border border-neutral-400/20`}>
          {sponsorsPera.map((sponsor) => {
            return (
              <SponsorPera
                key={`Sponsor ${sponsor.name}`}
                name={sponsor.name}
                type={sponsor.type}
                imageUrl={sponsor.imageUrl}
                href={sponsor.href}
                isSquare={sponsor.isSquare}
              />
            )
          })}
        </div>
      </div>

      <h2 className={`${styles.scheduleType} bg-white/30 backdrop-blur-xs border border-neutral-400/20 text-3xl py-5`}>CHERRY</h2>
      <div className={styles.background}>
          <div className={`${styles.containerCherry} bg-white/30 backdrop-blur-md border border-neutral-400/20`}>
            {sponsorsCherry.map((sponsor) => {
              return (
                <SponsorCherry
                  key={`Sponsor ${sponsor.name}`}
                  name={sponsor.name}
                  type={sponsor.type}
                  imageUrl={sponsor.imageUrl}
                  href={sponsor.href}
                  isSquare={sponsor.isSquare}
                />
              )
            })}
          </div>
      </div>
    </Fragment>
  )
}