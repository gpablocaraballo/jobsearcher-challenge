import styled from 'styled-components'
import themeConfig from '../../libs/theme'

export const Container = styled.div`
    display: flex;
    width: 350px;
    height: 30px;
    @media (max-width: ${themeConfig.screen.medium.maxWidthPx}px){
        margin-bottom: 20px;
    }    
`
export const RemoteFilter = styled.div`
    display: flex;
    margin-left: 10px;
`

export const Label = styled.div`
   font-weight: 500;
   font-size: 18px; 
`
export const Select = styled.select`
    margin-left: 10px;
    font-weight: 500;
    font-size: 18px;
    padding-left: 5px;
    text-transform: capitalize;
`
