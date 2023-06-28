import Head from "next/head"
import Link from "next/link"

const ListingPage = () => {
    return (
        <>
        
      <Head>
        <title>Listado de productos</title>
        <meta name="description" content="Listado de productos" />
        <link rel="icon" href='/favicon.ico' />
      </Head>

    <main>
      
      <h1>Listado de productos</h1>
      <ul>
      <li>
        <Link href="/products/phones">Móviles 📱</Link>
        </li>
        
        <li>Comida 🧆</li>
        <li>Ordenadores 💻</li>
      </ul>
    </main>
    
        </>
    )
}

export default ListingPage