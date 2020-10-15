import React, { useEffect, useState, useRef } from "react"
import Svg404 from "../images/error.svg"
import styled from "styled-components"
import gsap from "gsap"
const ErrorPage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
    max-width: 850px;
  }
`

const Error = () => {
  // const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const svgRef = useRef()
  // const eyes = useRef()
  // const updateMousePosition = e => {
  //   setMousePosition({
  //     x: (e.clientX * 100) / window.innerWidth,
  //     y: (e.clientY * 100) / window.innerHeight,
  //   })
  //   if (eyes) {
  //     console.log(eyes)
  //     eyes.current[0].style.transform = `translate(${mousePosition.x}px, ${mousePosition.y}px)`
  //   }
  // }
  // useEffect(() => {
  //   eyes.current = [...svgRef.current.querySelectorAll("#eye")]
  //   window.addEventListener("mousemove", updateMousePosition)
  //   return () => window.removeEventListener("mousemove", updateMousePosition)
  // }, [])
  // useEffect(() => {
  //   // console.log(eyes.current[0])
  // }, [mousePosition])
  return (
    <ErrorPage ref={svgRef}>
      <Svg404 />
    </ErrorPage>
  )
}

export default Error
