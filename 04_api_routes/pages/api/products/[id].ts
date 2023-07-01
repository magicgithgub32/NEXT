// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Error from 'next/error'

type Data = {
  id: number,
  name:  string,
  price: number,
}

type Error = {
    message: string,
}

const falseDB: Record<string | number, Data > = {
   1: { id: 1,
    name: 'Iphone 📱',
    price: 600
   }
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const id = req.query.id as string
  const product = falseDB[id]

  if (!product) {
    res.status(404)
    res.json({message: 'Product not found'});
    return;
    }

  res.status(200)
  res.json(product)
  
}
