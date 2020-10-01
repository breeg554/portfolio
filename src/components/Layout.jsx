import React from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components"
import { theme } from "../utils/theme"
import Header from "./Header"
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
export default function Layout({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Header />
      {children}
    </ThemeProvider>
  )
}
