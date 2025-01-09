import styled, { createGlobalStyle } from "styled-components"

export const StyledButton = styled.button`
    cursor: pointer;
    padding: 6px 16px;
    font-size: 0.875rem;
    border-radius: 4px;
    min-width: 64px;
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
   
    ${props => props.$variant === 'contained' &&`
        background-color: var(--primary-color);;
        color: #fff;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        border: 0;
        line-height: 1.75;

        &:hover {
            background-color: #1565c0;
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }
    `}

    ${props => props.$variant === 'text' &&`
        background-color: transparent;
        color: #1976d2;
        border: 0;

        &:hover {
            background-color: rgba(25, 118, 210, 0.04);
        }
    `}

    ${props => props.$variant === 'outlined' &&`
        background-color: transparent;
        color: #1976d2;
        border: 1px solid rgba(25, 118, 210, 0.5);
        line-height: 1.75;

        &:hover {
            background-color: rgba(25, 118, 210, 0.04);
            border: 1px solid #1976d2;
        }
    `}

    ${props => props.$disabled && `
        pointer-events: none;
        color: var(--text-diabled-color);
    `}

    ${props => (props.$disabled && props.$variant === 'contained') &&`
        pointer-events: none;
        color: var(--text-diabled-color);
        box-shadow: none;
        background-color: var(--bg-disbaled-color);
    `}

    ${props => (props.$disabled && props.$variant === 'outlined') &&`
        pointer-events: none;
        color: var(--text-diabled-color);
        box-shadow: none;
        border: 1px solid;
    `}
`;

export const StyledLink = styled.a`
    cursor: pointer;
    padding: 6px 16px;
    font-size: 0.875rem;
    border-radius: 4px;
    min-width: 64px;
    font-weight: 600;
    text-transform: uppercase;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
                color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    text-decoration: none;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
    
    ${props => props.$variant === 'contained' &&`
        background-color: var(--primary-color);;
        color: #fff;
        box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
                    0px 2px 2px 0px rgba(0, 0, 0, 0.14),
                    0px 1px 5px 0px rgba(0, 0, 0, 0.12);
        border: 0;
        line-height: 1.75;

        &:hover {
            background-color: #1565c0;
            box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
                        0px 4px 5px 0px rgba(0, 0, 0, 0.14),
                        0px 1px 10px 0px rgba(0, 0, 0, 0.12);
        }
    `}

    ${props => props.$variant === 'text' &&`
        background-color: transparent;
        color: #1976d2;
        border: 0;

        &:hover {
            background-color: rgba(25, 118, 210, 0.04);
        }
    `}

    ${props => props.$variant === 'outlined' &&`
        background-color: transparent;
        color: #1976d2;
        border: 1px solid rgba(25, 118, 210, 0.5);
        line-height: 1.75;

        &:hover {
            background-color: rgba(25, 118, 210, 0.04);
            border: 1px solid #1976d2;
        }
    `}

    ${props => props.$disabled && `
        pointer-events: none;
        color: var(--text-diabled-color);
    `}

    ${props => (props.$disabled && props.$variant === 'contained') &&`
        pointer-events: none;
        color: var(--text-diabled-color);
        box-shadow: none;
        background-color: var(--bg-disbaled-color);
    `}

    ${props => (props.$disabled && props.$variant === 'outlined') &&`
        pointer-events: none;
        color: var(--text-diabled-color);
        box-shadow: none;
        border: 1px solid;
    `}
`;


