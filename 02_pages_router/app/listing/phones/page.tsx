import Head from "next/head"

const PhonesPage = () => {
    return (
        <>
        
      <Head>
        <title>Teléfonos móviles</title>
        <meta name="description" content="Listado de móviles" />
        <link rel="icon" href='/favicon.ico' />
      </Head>

    <main>
      
      <h1>Listado de móviles</h1>
      <ul>
        <li>Iphone 100 📱</li>
        <li>Samsung 200 📲</li>
      </ul>
    </main>
    
        </>
    )
}

export default PhonesPage