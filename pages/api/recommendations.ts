// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import entities from './entities'
import { JobSchema } from '../../libs/models'

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<Array<JobSchema> | any>
) {
  res.status(200).json(entities.jobs.slice(0, 10))
}
