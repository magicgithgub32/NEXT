import { mockProducts } from "@/mock/products";
import Head from "next/head"
import { useRouter } from "next/router";

const EntityPage = () => {
  const router = useRouter();
  const entity = router.query.entity as string

  const product = mockProducts[entity]

  if (!product) {
    return <h2> Loading... </h2>
  }

    return (
        <>  
      <Head>
        <title>Listado de {product.title}</title>
        <meta name="description" content={`Listado de ${product.title}`}/>
        <link rel="icon" href='/favicon.ico' />
      </Head>

    <main>
      
      <h1>Listado de {product.title}:</h1>
      <ul>
        {product.entities.map((element) => (
          <li key={element.id}>{element.title}</li>
        ))}
      </ul>
    </main>
        </>
    )
}

export default EntityPage