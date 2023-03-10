import type { NextPage } from 'next'
import AppLayout from '../../components/AppLayout'
import { AppContext } from '../../libs/context-lib'
import { useAppReducer } from '../../libs/reducer-lib'
import MainContainer from '../../components/MainContainer'
const Home: NextPage = () => {
  const [state, dispatch] = useAppReducer()
  return (
    <AppContext.Provider
      value={{
        state,
        dispatch
      }}
    >
    <AppLayout>
      <MainContainer />
    </AppLayout>
    </AppContext.Provider>
  )
}

export default Home
