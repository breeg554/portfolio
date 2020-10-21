import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import SvgImg from "../images/skills.svg"
import Heading from "../components/SectionHeading"
import { theme } from "../utils/theme"
import skillsData from "../dataContent/skills.json"
import gsap from "gsap"
import {
  slideInTopAnimation,
  skillsSvgAnimation,
  svgChangeSkills,
} from "../components/Animations"
const SkillsSection = styled.section`
  overflow: hidden;
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: ${({ theme }) => theme.layoutWidth}px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQ.small} {
    flex-direction: row;
    align-items: center;
  }
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
  ${({ theme }) => theme.mediaQ.small} {
    order: 2;
    margin: 0 0.5em;
    flex: 50%;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding-right: 2em;
  }
`
const TextWrapper = styled.div`
  order: 2;
  width: 100%;
  margin-top: 2em;
  padding: 2em 1em 0 1em;
  position: relative;
  ${({ theme }) => theme.mediaQ.small} {
    order: 1;
    margin: 0 5% 0 0;
    flex-basis: 250px;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    flex-basis: 350px;
    margin: 0 5% 0 2em;
    & > div {
      margin-top: 1em;
    }
  }
  ${({ theme }) => theme.mediaQ.large} {
    margin-left: 3em;
  }
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
  ${({ theme }) => theme.mediaQ.medium} {
    font-size: 22px;
    cursor: pointer;
  }
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
  ${({ theme }) => theme.mediaQ.medium} {
    font-size: 18px;
    margin-bottom: 0.5em;
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
  const textRef = useRef(null)
  const frontendRef = useRef(null)
  const backendRef = useRef(null)
  const frontendTl = useRef(null)
  const backendTl = useRef(null)

  useEffect(() => {
    const frontendLiList = frontendRef.current.querySelectorAll("li")
    const backendLiList = backendRef.current.querySelectorAll("li")

    frontendTl.current = gsap.timeline()
    backendTl.current = gsap.timeline()
    gsap.set(backendLiList, { autoAlpha: 0, x: "+=20px" })

    const textWrapper = textRef.current
    const heading = textWrapper.querySelector("div:nth-of-type(1)")
    const buttons = textWrapper.querySelectorAll("button")
    slideInTopAnimation([imgRef.current, heading, buttons, frontendLiList], 0.5)

    const imgWrapper = imgRef.current
    skillsSvgAnimation(imgWrapper)
  }, [])
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false
    } else {
      const frontendLiList = frontendRef.current.querySelectorAll("li")
      const backendLiList = backendRef.current.querySelectorAll("li")
      const svgFrontendSkills = imgRef.current.querySelector("#frontend")
      const svgBackendSkills = imgRef.current.querySelector("#backend")
      if (!isFrontend) {
        SlideOutAnimation(frontendTl.current, frontendLiList, 0, "-=20px")
        SlideInAnimation(backendTl.current, backendLiList)
        svgChangeSkills(svgBackendSkills, svgFrontendSkills)
      } else {
        SlideInAnimation(frontendTl.current, frontendLiList)
        SlideOutAnimation(backendTl.current, backendLiList, 0, "+=20px")
        svgChangeSkills(svgFrontendSkills, svgBackendSkills)
      }
    }
  }, [isFrontend])
  return (
    <SkillsSection>
      <TextWrapper ref={textRef}>
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
            {skillsData[0].frontend.map(skill => (
              <SingleSkill key={skill.id}>{skill.name}</SingleSkill>
            ))}
          </SkillsList>
          <SkillsList ref={backendRef}>
            {skillsData[0].backend.map(skill => (
              <SingleSkill key={skill.id}>{skill.name}</SingleSkill>
            ))}
          </SkillsList>
        </Wrapper>
      </TextWrapper>
      <BgImg ref={imgRef}>
        <SvgImg />
      </BgImg>
    </SkillsSection>
  )
}

export default Skills
