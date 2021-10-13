import styled from 'styled-components'
import { colors } from '../../../style/colors';
import mediaQueries from '../../../style/media-queries';


export const Container = styled.div`
margin: 15px;
`

export const HomeBottom = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin:50px 24px;
`

export const HomeTop = styled.div`
  width:100%;
  display:flex;
  border-bottom:1px solid ${colors.mainBackground};
${mediaQueries.greaterThan('xs')`

  flex-direction: column;
    height:auto;
  `}

${mediaQueries.greaterThan('lg')`
  flex-direction: row;
  height:100px;
  justify-content: space-evenly ;

  `}

`

