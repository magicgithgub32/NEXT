import Head from "next/head"
import Link from "next/link"

const productRoutes = [ 
  {
    url: "/products/phones",
    title: 'Móviles 📱'
},
{
  url: "/products/food",
  title: 'Comida 🧆'
},
{ 
  url: "/products/computers",
  title: 'Ordenadores 💻'
},
]

const ProductsPage = () => {
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
        {productRoutes.map(({url, title}) => (
          <li key={url}>
          <Link href={url}>{title}</Link>
          </li>
        ))}
      
      </ul>
    </main>
    
        </>
    )
}

export default ProductsPage