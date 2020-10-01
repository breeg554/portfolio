import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Scene from "../images/skills.svg"
import Heading from "../components/SectionHeading"
import { theme } from "../utils/theme"
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

  width: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`
const TextWrapper = styled.div`
  width: 100%;
  padding: 2em 1em 0 1em;
  flex-grow: 1;
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
const Skills = () => {
  const [isBackend, setIsBackend] = useState(false)
  const imgRef = useRef(null)
  useEffect(() => {
    const img = imgRef.current.children[0]
    const frontendSkills = img.querySelector("#front-end")
    const backendSkills = img.querySelector("#back-end")
  })
  return (
    <SkillsSection>
      <BgImg ref={imgRef}>
        <Scene />
      </BgImg>
      <TextWrapper>
        <Heading color={theme.colors.gray}>Skills.</Heading>
        <div>
          <SkillsButton
            isActive={!isBackend}
            onClick={() => setIsBackend(false)}
          >
            #frontend
          </SkillsButton>
          <SkillsButton isActive={isBackend} onClick={() => setIsBackend(true)}>
            #backend
          </SkillsButton>
        </div>
        {isBackend ? (
          <SkillsList>
            <SingleSkill>Node.js, Express</SingleSkill>
            <SingleSkill>CRUD Operations</SingleSkill>
            <SingleSkill>Rest API Design</SingleSkill>
            <SingleSkill>MySQL</SingleSkill>
            <SingleSkill>Oracle Database/PLSQL</SingleSkill>
          </SkillsList>
        ) : (
          <SkillsList>
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
        )}
      </TextWrapper>
    </SkillsSection>
  )
}

export default Skills
