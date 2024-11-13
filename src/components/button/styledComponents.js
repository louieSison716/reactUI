import styled, { createGlobalStyle } from "styled-components"

export const StyledButton = styled.button`

     ${props => props.$variant === 'contained' &&`
        background: #1976d2;;
        box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;
    `}

    ${props => props.$variant === 'text' &&`
        background: transparent;
        border: 0;
    `}

    ${props => props.$variant === 'outlined' &&`
        background: transparent;
        border: 1px solid #1976d2;
    `}
`


