import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { colors } from '../../style/colors'
import mediaQueries from '../../style/media-queries'

export const Container = styled(Button)`
    padding: 20px;
    background-color: ${colors.lightBlue} !important;
    color: white !important;
    margin-left: 15px !important;
    transition: all .2s;

    ${mediaQueries.greaterThan('xs')`
    flex-direction: column;
    height:auto;
  `}
    &:disabled{
        background-color: ${colors.lightText} !important;
    }
`