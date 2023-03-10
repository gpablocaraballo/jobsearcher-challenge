import styled from 'styled-components'
import themeConfig from '../../libs/theme'

type Props = {
    active?: boolean
    margin?: string
    hideScroll?: boolean
}

const Box = styled.div<Props>`
  z-index: 999;
  max-width: 500px;
  margin: ${(props) => (props.margin ? props.margin : '15% auto')};
`

const Background = styled.div<Props>`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: ${(props) => (props.hideScroll ? 'hidden' : 'auto')};
  background-color: ${themeConfig.color.Background};
`

interface ModalProps {
    margin?: string
    children: JSX.Element | Array<JSX.Element>
    onBackgroundClick?: () => void
}

function Modal (props: ModalProps) {
  const { onBackgroundClick, margin, children, ...rest } = props

  return (
    <Background onClick={() => onBackgroundClick && onBackgroundClick()} {...rest}>
      <Box margin={margin} onClick={(e) => e.stopPropagation()} {...rest} >
        {children}
      </Box>
    </Background>
  )
}

export default Modal
