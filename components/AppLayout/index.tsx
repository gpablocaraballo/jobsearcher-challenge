import Header from '../Header'
import Container from './AppLayout.styled'
import { ToastContainer } from 'react-toastify'
import themeConfig from '../../libs/theme'
import 'react-toastify/dist/ReactToastify.min.css'

interface Props {
  children: JSX.Element | Array<JSX.Element>
}

export default function AppLayout ({ children }: Props) {
  return (
    <>
      <Container>
        <Header />
        {children}
      </Container>
      <ToastContainer autoClose={1500} hideProgressBar={false} toastStyle={{ backgroundColor: themeConfig.color.FloatingTextBackgroundMessage, color: themeConfig.color.FloatingTextMessage }} />
    </>
  )
}
