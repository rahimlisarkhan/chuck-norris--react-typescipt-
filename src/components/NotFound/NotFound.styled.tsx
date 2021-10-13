import styled from 'styled-components'
import { colors } from '../../style/colors'

export const Container = styled.div`
    padding: 40px;
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 50px;
    text-align: center;
    font-weight: bold;
    font-family:'Courier New', Courier, monospace;
    border-radius: 50%;
    background-color: #e7e7e7 !important;
    color:  ${colors.lightBlue} !important;
`
