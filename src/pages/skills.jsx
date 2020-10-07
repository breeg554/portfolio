import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Scene from "../images/skills.svg"
import Heading from "../components/SectionHeading"
import { theme } from "../utils/theme"
import gsap from "gsap"
const SkillsSection = styled.section`
  overflow: hidden;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const BgImg = styled.div`
  z-index: 0;
  order: 1;
  width: 100%;
  margin-top: 4em;
  svg {
    width: 100%;
    height: 100%;
  }
`
const TextWrapper = styled.div`
  order: 2;
  width: 100%;
  margin-top: 2em;
  padding: 2em 1em 0 1em;
  flex-grow: 1;
  position: relative;
`
const SkillsButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.orange : theme.colors.blue};
  margin-right: 1em;
  margin-top: 0.5em;
  font-size: 18px;
  font-weight: 600;
  outline: none;
`
const SkillsList = styled.ul`
  list-style: none;
  margin-top: 1em;
`
const SingleSkill = styled.li`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 15px;
  position: relative;
  margin-bottom: 0.3em;
  margin-left: 0.5em;
  &::before {
    position: absolute;
    top: 50%;
    left: -0.5em;
    transform: translateY(-50%);
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.blue};
  }
`
const Wrapper = styled.div`
  position: relative;
  width: 100%;
  ul:nth-of-type(2) {
    position: absolute;
    top: 0;
    margin-top: 0;
  }
`
const SlideInAnimation = (tl, el, delay = 0) => {
  tl.staggerTo(el, 1, { x: "0", autoAlpha: 1, delay: delay }, 0.2)
}
const SlideOutAnimation = (tl, el, delay = 0, where) => {
  tl.staggerTo(el, 1, { x: where, autoAlpha: 0, delay: delay }, 0.2)
}

const Skills = () => {
  const [isFrontend, setIsFrontend] = useState(true)
  const isInitialMount = useRef(true)
  const imgRef = useRef(null)
  const frontendRef = useRef(null)
  const backendRef = useRef(null)
  const frontendTl = useRef(null)
  const backendTl = useRef(null)

  useEffect(() => {
    const frontendLiList = frontendRef.current.querySelectorAll("li")
    const backendLiList = backendRef.current.querySelectorAll("li")

    frontendTl.current = gsap.timeline()
    gsap.set(frontendLiList, { autoAlpha: 0, x: "-=20px" })
    SlideInAnimation(frontendTl.current, frontendLiList)

    backendTl.current = gsap.timeline()
    gsap.set(backendLiList, { autoAlpha: 0, x: "+=20px" })
  }, [])
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      const frontendLiList = frontendRef.current.querySelectorAll("li")
      const backendLiList = backendRef.current.querySelectorAll("li")

      if (!isFrontend) {
        SlideOutAnimation(frontendTl.current, frontendLiList, 0, "-=20px")
        SlideInAnimation(backendTl.current, backendLiList)
      } else {
        SlideInAnimation(frontendTl.current, frontendLiList)
        SlideOutAnimation(backendTl.current, backendLiList, 0, "+=20px")
      }
    }
  }, [isFrontend])
  return (
    <SkillsSection>
      <TextWrapper>
        <Heading color={theme.colors.gray}>Skills.</Heading>
        <div>
          <SkillsButton
            isActive={isFrontend}
            onClick={() => {
              if (!frontendTl.current.isActive()) {
                setIsFrontend(true)
              }
            }}
          >
            #frontend
          </SkillsButton>
          <SkillsButton
            isActive={!isFrontend}
            onClick={() => {
              if (!frontendTl.current.isActive()) {
                setIsFrontend(false)
              }
            }}
          >
            #backend
          </SkillsButton>
        </div>
        <Wrapper>
          <SkillsList ref={frontendRef}>
            <SingleSkill>Js</SingleSkill>
            <SingleSkill>HTML, CSS</SingleSkill>
            <SingleSkill>Sass</SingleSkill>
            <SingleSkill>React.js</SingleSkill>
            <SingleSkill>Gatsby.js</SingleSkill>
            <SingleSkill>Styled Components</SingleSkill>
            <SingleSkill>Gsap</SingleSkill>
            <SingleSkill>RESTfull Services/APIs</SingleSkill>
            <SingleSkill>Responsive Web Design</SingleSkill>
            <SingleSkill>Git</SingleSkill>
          </SkillsList>
          <SkillsList ref={backendRef}>
            <SingleSkill>Node.js, Express</SingleSkill>
            <SingleSkill>CRUD Operations</SingleSkill>
            <SingleSkill>Rest API Design</SingleSkill>
            <SingleSkill>MySQL</SingleSkill>
            <SingleSkill>Oracle Database/PLSQL</SingleSkill>
          </SkillsList>
        </Wrapper>
      </TextWrapper>
      <BgImg ref={imgRef}>
        <Scene />
      </BgImg>
    </SkillsSection>
  )
}

export default Skills
