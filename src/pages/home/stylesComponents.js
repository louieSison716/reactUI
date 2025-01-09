import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
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
    height: 100vh;
`

export const LeftMenu = styled.div`
    height: 100%;
    background: #f2f3ed;
    padding: 0 20px;

    .title-version {
        font-size: 0.8rem;
    }
`

export const MainContent = styled.div`
    padding: 30px;
`
export const MenuList = styled.ul`
    padding: 0;
    margin: 0;
`
export const MenuListItem = styled.li`
    list-style-type: none;
    margin: 0;
    padding: 0;

    a {
        font-size: 1rem;
        color: #50605f;
        text-decoration: none;
    }

`
export const LeftMenuTitle = styled.h2`
    color:#1b3032;
`