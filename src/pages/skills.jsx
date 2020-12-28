import React, { useState, useRef, useEffect } from "react"
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
import {
  SkillsSection,
  ImgWrapper,
  TextWrapper,
  SkillsButton,
  SkillsList,
  SingleSkill,
  Wrapper,
} from "./style/skills"

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
      <ImgWrapper ref={imgRef}>
        <SvgImg />
      </ImgWrapper>
    </SkillsSection>
  )
}

export default Skills
