import React, { useEffect, useState, useRef } from "react"
import Svg404 from "../images/error.svg"
import styled from "styled-components"
import gsap from "gsap"
const ErrorPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  svg {
    width: 100%;

    max-width: 850px;
  }
`

const Error = () => {
  // const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const svgRef = useRef()
  // const movingPart = useRef()
  // const updateMousePosition = e => {
  //   setMousePosition({
  //     x: (e.clientX * 100) / window.innerWidth,
  //     y: (e.clientY * 100) / window.innerHeight,
  //   })
  //   if (movingPart) {
  //     console.log(movingPart)

  //   }
  // }
  // useEffect(() => {
  //   movingPart.current = [...svgRef.current.querySelectorAll("#moving")]
  //   window.addEventListener("mousemove", updateMousePosition)
  //   return () => window.removeEventListener("mousemove", updateMousePosition)
  // }, [])
  // useEffect(() => {
  //   console.log(mousePosition)
  // }, [mousePosition])
  return (
    <ErrorPage ref={svgRef}>
      <Svg404 />
      <a href="/">Home Page!</a>
    </ErrorPage>
  )
}

export default Error
