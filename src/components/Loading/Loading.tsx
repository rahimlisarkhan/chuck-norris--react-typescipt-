import React from 'react'
import loadingImg from '../../assent/img/loading.gif'
import { Container, Spinner } from './Loading.styled'

interface LoadingProps { }

export const Loading: React.FC<LoadingProps> = () => {
    return (
        <Container >
            <Spinner src={loadingImg} />
        </Container>
    )
}
