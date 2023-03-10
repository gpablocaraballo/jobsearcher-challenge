import Header from '../Header'
import Container from './AppLayout.styled'

interface Props {
  children: JSX.Element | Array<JSX.Element>
}

export default function AppLayout ({ children }: Props) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  )
}
