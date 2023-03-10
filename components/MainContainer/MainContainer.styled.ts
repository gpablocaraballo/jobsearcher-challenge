import styled from 'styled-components'
import themeConfig from '../../libs/theme'

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: ${themeConfig.maxWidthContainerPx}px;
  justify-content: center;
  margin-top: 20px;
`
export default Container
