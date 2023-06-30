import { Product } from "@/types/product"
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next"
import Link from "next/link"

const ProductPage = ({product }:Props) => {
    if(!product) {return <h1>No  hay datos disponibles...</h1>}
    return (
        <main>
            <div>
                <h1>{product.name}</h1>

                <p>{product.description}</p>

                <h2>£{product.price}</h2>

                <Link href={"/"}>Volver al listado</Link>
            </div>
        </main>
    )

}

// export const getStaticPaths: GetStaticPaths = async () => {
// const response: Product[] = await fetch(`https://my-json-server.typicode.com/bea-ro/shop-api/products`).then((res) => res.json())

//     return {
//         paths: response.map((product) => ({
//             params: {
//                 id: product.id,
//             },
//         })),
//         fallback: false,
//     }
// }


export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking',
    }
}

// export const getServerSideProps: GetServerSideProps = async (context) => {
    
// const id = context.query.id as string;

// const response: Product = await fetch(`https://my-json-server.typicode.com/bea-ro/shop-api/products/${id}`).then((res) => res.json())


// return {
//         props: {
//             product: response,
//         }
//     }
// }

export const getStaticProps: GetStaticProps = async (context) => {
    const id = context.params?.id as string;

const response: Product = await fetch(`https://my-json-server.typicode.com/bea-ro/shop-api/products/${id}`).then((res) => res.json())

    return {
        props: {
            products: response, 
            timestamp: Math.random(),
        },
        revalidate: 10,
    };

};

export type Props = {
    product: Product;
}

export default ProductPage