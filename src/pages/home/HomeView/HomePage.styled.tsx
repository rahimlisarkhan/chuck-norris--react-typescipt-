import styled from 'styled-components'
import { colors } from '../../../style/colors';
import { Button } from '@material-ui/core'


export const Container = styled.div`
margin: 15px;

`

export const HomeBottom = styled.div`
  height:100px;
  display:flex;
  flex-wrap: wrap;
  margin:50px 24px;
`

export const SubmitButton = styled(Button)`
padding: 20px;
    background-color: ${colors.lightBlue} !important;
    color: white !important;
    margin-left: 15px !important;
`

export const HomeTop = styled.div`
  width:100%;
  height:100px;
  display:flex;
  justify-content: space-evenly;
  border-bottom:1px solid ${colors.mainBackground}
`

