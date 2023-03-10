import styled from 'styled-components'
import themeConfig from '../../libs/theme'

export const ContainerHeader = styled.div`
    width: 100%;
    border-top: 3px solid ${themeConfig.color.HeaderBorder};
    border-bottom: 3px solid ${themeConfig.color.HeaderBorder};
`

export const ContainerNav = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: ${themeConfig.maxWidthContainerPx}px;
    margin: auto;
    padding-left: 15px;
    padding-right: 15px;
    @media (max-width: ${themeConfig.screen.medium.maxWidthPx}px){
        flex-direction: column;
    }    
`

export const CartSide = styled.div`
    display: flex;
`
