import Image from 'next/image'
import styles from './page.module.css'
import { NextPage } from 'next'

const MASTER_NAME = 'Rock{TheCode}'


const Home = () => {
  return (
    <main className={styles.main}>
      <h1>Hello 👋, from {MASTER_NAME}! </h1>
    </main>
  )
}


export default Home