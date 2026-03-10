import styles from './Cards.module.css'
import Card from '../Card/Card'


export default function Cards() {
  const DavidMart = "PeoplePhotos/back/david.jpeg"
  const DavidMartOP = "PeoplePhotos/back/david.jpeg"
  return (
    <>
      <div>
        <h2 className={styles.title}>Nuestro equipo</h2>
        <h3 className={styles.group}>GENERAL</h3>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-5 col-lg-4">
              <Card
                description="Dioos, voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase formal)"
                backDescription="Dioos,dasdasdasdasdasdasdsadasads voy a poner algo, algo, sabes lo que digo, verdad, mambo, bomboclat (Frase creativa)"
                photo={DavidMart}
                backphoto={DavidMartOP}
                lklink="https://www.linkedin.com/in/david-martinez-76b284352/"
                ghlink="https://github.com/darkghost078"
                twlink="https://github.com/darkghost078"

              >
                {' '}
                David Martínez Molina{' '}
              </Card>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
