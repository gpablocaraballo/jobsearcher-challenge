import styled from 'styled-components'
import themeConfig from '../libs/theme'

type Props = {
    center?: boolean;
    medium?: boolean;
    large?: boolean;
    light?: boolean;
}

export const LabelBox = styled.div<Props>`
    width: 100%;
    display: flex;
    ${props => props.center && `
        justify-content: center;
    `}
    ${props => props.medium && `
        font-size: 30px;
        font-weight: 500;
    `}    
    ${props => props.large && `
        font-size: 38px;
        font-weight: 500;
    `}
    ${props => props.light && `
        color: ${themeConfig.color.LabelModal};
    `}    
    @media (max-width: ${themeConfig.screen.small.maxWidthPx}px){
        font-size: 20px;
    }
`

export const ButtonBox = styled.button`
    text-transform: uppercase;
    font-weight: 600;
    color: ${themeConfig.color.DetailButtonText};
    background: ${themeConfig.color.DetailButton};
    border-radius: 14px;
    height: 33px;
    cursor: pointer;
`

export const LoadingBox = styled.div`
`

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 50px;
`
