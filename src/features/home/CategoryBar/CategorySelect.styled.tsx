import styled from 'styled-components'
import { colors } from '../../../style/colors';
import mediaQueries from '../../../style/media-queries';


export const Container = styled.div`
    display: flex;
    align-items: center;

    ${mediaQueries.greaterThan('xs')`
    margin-bottom:10px;
`}
`

export const SelectList = styled.select`
   display:flex;
    justify-content: flex-start !important;
    height: 40px;
    font-size: 16px;
    text-align: left;
    padding: 5px;
    color:${colors.lightText};
    text-transform:capitalize;
    border:2px solid ${colors.lightBlue};
    outline:1px solid ${colors.mainBackground};
 
`

