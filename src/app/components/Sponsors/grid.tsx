import { Fragment } from 'react'
import { Sponsor, SponsorProps } from './index'
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

  const orderedSponsors = [...sponsorsPera, ...sponsorsCherry]

  return (
    <Fragment>
      <h1 className={`${styles.schedule} bg-white/30 bg-opacity-30 backdrop-blur-xs border border-neutral-400/20 text-3xl px-6 sm:px-32 md:px-46 sm:text-4xl md:text-5xl py-5`}>PATROCINADORES</h1>
      <div className={styles.background}>
        <div className={`${styles.container} bg-white/30 backdrop-blur-md border border-neutral-400/20`}>
          {orderedSponsors.map((sponsor) => {
            return (
              <Sponsor
                key={`Sponsor ${sponsor.name}`}
                name={sponsor.name}
                type={sponsor.type}
                imageUrl={sponsor.imageUrl}
                href={sponsor.href}
              />
            )
          })}
        </div>
      </div>
    </Fragment>
  )
}