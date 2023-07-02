// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Data, Error, falseDB } from './db';


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
