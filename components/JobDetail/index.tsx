import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import get from 'lodash.get'
import {
  Container,
  DetailContainer,
  BodyContainer,
  DataContainerImage,
  DataContainerText,
  ImgUnvavailable,
  ImgDetail,
  ItemName,
  ItemDescription,
  JobOperationsContainer
} from './JobDetail.styled'
import { LoadingBox, LabelBox, ButtonBox } from '../Common.styled'
import { useAppContext } from '../../libs/context-lib'
import { APP_ACTIONS } from '../../libs/reducerAction-lib'
import { getJobById, getRecommendations } from '../../libs/services'
import { JobSchema } from '../../libs/models'
import JobList from '../JobList'
import JobOperations from '../JobList/JobOperations'

export default function JobDetail () {
  const { dispatch, state } = useAppContext()
  const router = useRouter()
  const query = router.query
  const [loading, setLoading] = useState(false)
  const [imageFailed, setImageFailed] = useState(false)
  const [recommendedJobs, setRecommendedJobs] = useState<Array<JobSchema> | null>(null)

  useEffect(() => {
    const loadRecommendations = async (jobId: string) => {
      try {
        const response = await getRecommendations(jobId)
        const recommendations = get(response, 'data', [])
        setRecommendedJobs(recommendations)
      } catch (err) {
        console.log(err)
      }
    }
    const loadJobById = async (id:string) => {
      setLoading(true)
      try {
        const response = await getJobById(id)
        const job = get(response, 'data', null)
        dispatch({ type: APP_ACTIONS.SET_JOB, data: job })
        loadRecommendations(job.id)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    const jobId = get(query, 'id', '')
    if (jobId) {
      loadJobById(jobId.toString())
    }
    setImageFailed(false)
  }, [query])

  const onApplyClicked = () => {
    toast('Request for apply sent :)')
  }

  return (
    <Container>
      {loading
        ? (
        <LoadingBox>
          <Image src="/assets/loading.svg" width={100} height={100} alt="Loading" />
        </LoadingBox>
          )
        : (
        <DetailContainer>
          <Link href="/">
            <LabelBox style={{ marginLeft: '20px', cursor: 'pointer' }}>BACK</LabelBox>
          </Link>
          {state.job && state.job.id && (
            <>
              <BodyContainer>
                <DataContainerImage>
                  {state.job.image_url && state.job.image_url && !imageFailed
                    ? <ImgDetail src={get(state.job, 'image_url', '')} onError={() => setImageFailed(true)} />
                    : <ImgUnvavailable width={200} height={200} src="/assets/no-image.png" alt="unavailable" />
                  }
                </DataContainerImage>
                <DataContainerText>
                  <ItemName>{state.job.title}</ItemName>
                  <ItemDescription dangerouslySetInnerHTML={{ __html: state.job.description }} />
                  <JobOperationsContainer>
                    <JobOperations item={state.job}/>
                    <ButtonBox style={{ width: '120px' }} onClick={onApplyClicked} >Apply now</ButtonBox>
                  </JobOperationsContainer>
                </DataContainerText>
              </BodyContainer>
            </>
          )}
        </DetailContainer>
          )}
          {recommendedJobs && recommendedJobs.length > 0 && (
            <>
              <LabelBox style={{ marginLeft: '100px' }} medium>Related jobs</LabelBox>
              <JobList list={recommendedJobs}/>
            </>
          )}
    </Container>
  )
}
