import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import get from 'lodash.get'
import debounce from 'lodash.debounce'
import Container from './MainContainer.styled'
import {
  LoadingBox
} from '../Common.styled'
import JobList from '../JobList'
import { useAppContext } from '../../libs/context-lib'
import { APP_ACTIONS } from '../../libs/reducerAction-lib'
import { getJobs } from '../../libs/services'
import { CategoryType } from '../../libs/models'

export default function MainContainer () {
  const { state, dispatch } = useAppContext()
  const [loading, setLoading] = useState<boolean>(false)
  const [category, setCategory] = useState<CategoryType>(CategoryType.ALL)

  const loadJobs = async () => {
    const categoryName = state.category
    setLoading(true)
    try {
      const response = await getJobs(categoryName)
      const jobs = get(response, 'data', [])
      dispatch({ type: APP_ACTIONS.RESET_JOBS, data: jobs })
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  }
  const debouncedLoadJobs = useCallback(
    debounce(loadJobs, 1200), [category])

  useEffect(() => {
    setCategory(state.category || CategoryType.ALL)
  }, [state.category])

  useEffect(() => {
    debouncedLoadJobs()
  }, [category])

  return (
    <Container>
      {loading
        ? (
        <LoadingBox >
          <Image src="/assets/loading.svg" width={100} height={100} alt="Loading" />
        </LoadingBox>
          )
        : (
        <JobList list={state.filtered_jobs} />
          )}
    </Container>
  )
}
