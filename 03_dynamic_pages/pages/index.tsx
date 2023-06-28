import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import { NextPage } from 'next'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Páginas y router</title>
        <meta name="description" content="Listado de productos" />
        <link rel="icon" href='/favicon.ico' />
      </Head>

    <main>
      <h1> {`Rock{theCode}`}</h1>

      <Link href="/products">Listado de productos</Link>
    </main>
    </div>
  )
}


export default Home