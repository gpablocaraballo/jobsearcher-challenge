import Axios from 'axios'
import getConfig from 'next/config'
import { JobSchema, FavoritesSchema, CategoryType } from './models'
const { publicRuntimeConfig = {} } = getConfig() || {}

const API_URL = publicRuntimeConfig.API_URL

export const getCategories = async () => {
  const response = await Axios({ url: `${API_URL}/api/categories` })
  return response
}

export const getJobs = async (categoryName?:string) => {
  const catName = categoryName || CategoryType.ALL
  const response = await Axios({ url: `${API_URL}/api/jobs?catName=${catName}` })
  return response
}

export const getJobById = async (id:string) => {
  const response = await Axios({ url: `${API_URL}/api/jobs?id=${id}` })
  return response
}

export const getRecommendations = async (jobId:string) => {
  const response = await Axios({ url: `${API_URL}/api/recommendations?job_id=${jobId}` })
  return response
}

const favroriteKey:string = 'challenge-job-searcher'

export const updateFavorites = (favorites: Array<JobSchema>) => {
  // Object.assign({}, favorites) to avoid problems with return stringify [] otherwise its gonna return empty
  const obj:any = Object.assign({}, favorites)
  window.localStorage.setItem(favroriteKey, JSON.stringify(obj))
}

export const getFavorites = (): FavoritesSchema | {} => {
  const item = window.localStorage.getItem(favroriteKey)
  return item ? JSON.parse(item) : []
}
