// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import get from 'lodash.get'
import { CategoryType, JobSchema, relatedCategories } from '../../libs/models'
import entities from './entities'

const includesWord = (categoryName:CategoryType, item: JobSchema) => {
  if (item.category?.includes(categoryName)) {
    return true
  }
  const words = relatedCategories[categoryName]
  if (words) {
    return words.some(word => item.title.includes(word) || item.description.includes(word))
  }
  return false
}
const setJobs = (jobs:Array<JobSchema>, categoryName:CategoryType) => {
  let filteredJobs:Array<JobSchema>
  if (!categoryName || categoryName === CategoryType.ALL) {
    filteredJobs = jobs
  } else {
    filteredJobs = jobs.filter((item: JobSchema) => includesWord(categoryName, item))
  }
  return filteredJobs
}

export default function handler (
  req: NextApiRequest,
  res: NextApiResponse<JobSchema | Array<JobSchema> | any>
) {
  const { query } = req
  if (query && query.id) {
    const filteredJob = entities.jobs.find((item: any) => item.id.toString() === query.id)
    res.status(200).json(filteredJob)
  } else {
    const cat = get(query, 'catName', CategoryType.ALL)
    const categoryName:string | string[] = cat
    const filteredJobs = setJobs(entities.jobs as Array<JobSchema>, categoryName as CategoryType)
    res.status(200).json(filteredJobs)
  }
}
