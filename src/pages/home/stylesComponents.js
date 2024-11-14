import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
   :root {
    --primary-color: #1976d2;
    --text-primary-color: #ffffff;
    --text-diabled-color: #00000042;
    --bg-disbaled-color: #0000001e;
   }
`

export const MainContainer = styled.div`
    display: grid;
    grid-template-columns: 15% 85%;
`

export const LeftMenu = styled.div`
`

export const MainContent = styled.div`
`
export const MenuList = styled.ul`
`