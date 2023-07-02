// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import Error from 'next/error'
import { Data, falseDB } from './db'


export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  
  res.status(200)
  res.json(Object.values(falseDB))
}
