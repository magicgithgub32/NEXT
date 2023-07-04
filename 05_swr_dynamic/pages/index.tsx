import { getProducts } from '../libs/products'
import { Product } from '../types/index'
import { fetcher } from '../utils/fetcher'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import useSwr from 'swr'

const Home = ({products}: Props) => {
  const { data, error} = useSwr('/api/products', fetcher, {refreshInterval: 3000})

  const productList = (data?.products as Product[]) || products

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <h1>{`Rock{theCode}`} | Dynamic Shop 🛒</h1>
        <ul>
          {productList.map((product ) => (<li key={product.id}>
            <h2> {product.name} </h2>
            <p> {product.price} </p>
          </li>
          ))}
        </ul>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const products = await getProducts()

  return {
    props: {
      products: products
    },
    revalidate: 30,
  }
}


export type Props = {
  products: Product[]
}

export default Home