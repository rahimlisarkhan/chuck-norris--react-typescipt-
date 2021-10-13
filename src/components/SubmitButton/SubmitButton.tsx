import React from 'react'
import { Container } from './SubmitButton.styled'

interface SubmitBtnProps {
    title?: string
    onSubmit?: () => void
    disabled?: boolean
}


export const SubmitBtn: React.FC<SubmitBtnProps> = ({ title, onSubmit,disabled }) => {
    return (
        <Container disabled={disabled} onClick={onSubmit} >
            {title}
        </Container>
    )
}

