import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from "../utils/theme"
import Header from "./Header"
import styled from "styled-components"
import Footer from "./Footer"
import Seo from "./Seo"
const Global = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Open Sans', sans-serif;
  }
  
`
const Main = styled.main`
  background-color: ${({ theme }) => theme.colors.white};
`
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Seo />
      <Global />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </ThemeProvider>
  )
}
