// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { CategoryType } from '../../libs/models'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Array<CategoryType>>
) {
  res.status(200).json(Object.values(CategoryType))
}
