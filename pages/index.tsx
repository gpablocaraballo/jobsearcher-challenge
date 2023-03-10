import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { NextPage } from 'next'
import AppLayout from '../components/AppLayout'
import { LabelBox } from '../components/Common.styled'

const Home: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('jobs')
  }, [])

  return (
    <AppLayout>
      <LabelBox center large style={{ marginTop: '20px' }}>PowertoFly</LabelBox>
    </AppLayout>
  )
}

export default Home
