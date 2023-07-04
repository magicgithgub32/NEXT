import { Product } from "../types/index"

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch('http://localhost/3001/products')
    .then((res) => res.json())
    return response
}
    

