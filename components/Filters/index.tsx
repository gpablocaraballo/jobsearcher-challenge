import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import get from 'lodash.get'
import {
  Container,
  Label,
  Select,
  RemoteFilter
} from './Filters.styled'
import { getCategories } from '../../libs/services'
import { useAppContext } from '../../libs/context-lib'
import { APP_ACTIONS } from '../../libs/reducerAction-lib'
import { CategoryType, JobSchema, LocationType } from '../../libs/models'

const Filters = () => {
  const { state, dispatch } = useAppContext()
  const router = useRouter()
  const query = router.query

  const [categories, setCategories] = useState<Array<string>>([])
  const [category, setCategory] = useState<CategoryType>(CategoryType.ALL)
  const [remote, setRemote] = useState<boolean>(false)

  const onCategoryChanged = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryName:string = event.target.value
    setCategory(categoryName as CategoryType)
    const path = categoryName === '' ? '/jobs' : `/jobs?cat=${categoryName}`
    dispatch({ type: APP_ACTIONS.SET_CATEGORY, data: categoryName as CategoryType })
    router.push(path, undefined, { shallow: true })
  }

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const response = await getCategories()
        const result = get(response, 'data', [])
        setCategories(result)
      } catch (err) {
        console.log(err)
      }
    }
    loadCategories()
  }, [])

  useEffect(() => {
    // usefull when you share the "url link" with your folks, its set the category based on the uri param
    const cat = get(query, 'cat', CategoryType.ALL)
    const categoryName:string | string[] = cat
    dispatch({ type: APP_ACTIONS.SET_CATEGORY, data: categoryName as CategoryType })
    setCategory(categoryName as CategoryType)
  }, [query])

  const setJobs = (jobs:Array<JobSchema>, isRemote:boolean) => {
    let filteredJobs:Array<JobSchema>
    if (!isRemote) {
      filteredJobs = jobs
    } else {
      filteredJobs = jobs.filter((item: JobSchema) => item.location_type === LocationType.REMOTE)
    }
    return filteredJobs
  }
  const onCheckboxClicked = () => {
    const remoteValue = !remote
    setRemote(remoteValue)
    dispatch({ type: APP_ACTIONS.SET_JOBS, data: setJobs(state.jobs, remoteValue) })
  }

  return (
      <Container>
        <Label>Category</Label>
        <Select value={category} onChange={onCategoryChanged}>
          {categories.map((item) => <option key={item} value={item} >{item}</option>)}
        </Select>
        <RemoteFilter>
          <Label>Remote</Label>
          <input type="checkbox" checked={remote} onChange={onCheckboxClicked}/>
        </RemoteFilter>
      </Container>
  )
}

export default Filters
