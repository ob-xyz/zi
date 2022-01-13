import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../shared/components/elements/headers/header'
import styles from '../styles/scss/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>ZoomInspo</title>
        <meta name="description" content="Instantly inspire your team by hiring their favorite YouTuber, athlete, comedic legend, and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.s1}>
        <h2>Instantly inspire your team</h2>
        <video 
          src="/assets/vid/video.mp4"
          width={600}
          height={350}
          controls
        ></video>
        </div>
      </main>
    </div>
  )
}

export default Home
