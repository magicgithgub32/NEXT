import { getProducts } from "../../../libs/products"
import { Product } from "../../../types/index"
import { NextApiRequest, NextApiResponse } from "next";

export type SuccessResponse = {
    products: Product[];
}

export type ErrorResponse = {
    message: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<SuccessResponse | ErrorResponse>) {
  return  getProducts().then((response) => 
    res.status(200).json( {products: response})
  ).catch((err) => 
    res.status(500).json( {message: err})

)
}