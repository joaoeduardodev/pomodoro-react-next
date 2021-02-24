import Head from 'next/head'
import { CompletedChalleges } from '../components/CompletedChalleges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Pomodoro - NextJs</title>
      </Head>
    <ExperienceBar/>
    <section>
      <div>
        <Profile/>
        <CompletedChalleges/>
        <Countdown/>
      </div>
      <div>

      </div>
    </section>
  </div>
  )
}
