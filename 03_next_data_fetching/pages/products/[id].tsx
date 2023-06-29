import { Product } from "@/types/product"
import { GetServerSideProps, GetStaticProps } from "next"
import Link from "next/link"

const ProductPage = ({product }:Props) => {
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

// export const getServerSideProps: GetServerSideProps = async (context) => {
    
// const id = context.query.id as string;

// const response: Product = await fetch(`https://my-json-server.typicode.com/bea-ro/shop-api/products/${id}`).then((res) => res.json())


// return {
//         props: {
//             product: response,
//         }
//     }
// }

export const getStaticProps: GetStaticProps = async () => {
    console.log("getStaticProps")
    const response: Product = await fetch(`https://my-json-server.typicode.com/bea-ro/shop-api/products`).then((res) => res.json())

    return {
        props: {
            products: response,
        }
    }

}

export type Props = {
    product: Product;
}

export default ProductPage