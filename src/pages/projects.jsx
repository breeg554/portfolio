import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Heading from "../components/SectionHeading"
import ProjectSvg from "../images/rocket.svg"
import AniLink from "../components/NewAniLink"
import DataContent from "../dataContent/projects.json"
import {
  allRocketAnimation,
  slideInTopAnimation,
} from "../components/Animations"
import { theme } from "../utils/theme"

const ProjectSection = styled.section`
  padding: 1em;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.layoutWidth}px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQ.small} {
    flex-direction: row;
    align-items: center;
  }
`
const ContentWrapper = styled.div`
  margin-top: 3.5em;
  order: 2;
  height: auto;
  ${({ theme }) => theme.mediaQ.small} {
    order: 1;
    margin: 4em 1em 0 0;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding-left: 2em;
    padding-right: 1em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    padding-left: 3em;
    padding-right: 3em;
  }
`
const ImgWrapper = styled.div`
  margin-top: 5em;
  width: 100%;
  order: 1;
  svg {
    height: 100%;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQ.small} {
    order: 2;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding-right: 2em;
  }
`
const ProjectsWrapper = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 2em;
`
const SingleProject = styled.li`
  margin-bottom: 1em;
  padding: 0.5em 0;
  border-radius: 10px;
  h3 {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 24px;
  }
  h3,
  p {
    font-weight: normal;
  }
  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 12px;
    margin: 0.5em 0 1em 0;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    a {
      padding: 0.2em 0.5em;
      border-radius: 5px;
      transition: all 0.2s ease-in-out;
      margin-right: 0.5em;
      &:hover {
        background-color: ${({ theme }) => theme.colors.orange};
        color: #fff;
      }
    }
  }
`
const ProjectSideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 13px;
  }
`
const StackImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 0.3em;
`

const Projects = () => {
  const svgRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    const textWrapper = textRef.current
    const heading = textWrapper.querySelector("div:nth-of-type(1)")
    const projects = textWrapper.querySelectorAll("li")
    slideInTopAnimation([heading, projects], 1)

    const wrapper = svgRef.current
    allRocketAnimation(wrapper)
  }, [])
  return (
    <ProjectSection>
      <ContentWrapper ref={textRef}>
        <Heading color={theme.colors.gray}>Projects.</Heading>
        <ProjectsWrapper>
          {DataContent.map(project => (
            <SingleProject key={project.id}>
              <h3>
                {project.id + 1}.{project.heading}
              </h3>
              <p>{project.content}</p>
              <ProjectSideWrapper>
                <div>
                  {project.stackImages.map(img => (
                    <StackImg key={img} src={img} alt="stack img" />
                  ))}
                </div>
                <AniLink path={`/projects/${project.name}`}>See more.</AniLink>
              </ProjectSideWrapper>
            </SingleProject>
          ))}
        </ProjectsWrapper>
      </ContentWrapper>
      <ImgWrapper ref={svgRef}>
        <ProjectSvg />
      </ImgWrapper>
    </ProjectSection>
  )
}

export default Projects
