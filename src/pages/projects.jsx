import React, { useEffect, useRef } from "react"
import Heading from "../components/SectionHeading"
import ProjectSvg from "../images/rocket.svg"
import AniLink from "../components/CustomAniLink"
import DataContent from "../dataContent/projects.json"
import {
  allRocketAnimation,
  slideInTopAnimation,
} from "../components/Animations"
import { theme } from "../utils/theme"
import { PageSection } from "../pagesStyles/pagesStyles"
import {
  ContentWrapper,
  ImgWrapper,
  ProjectsWrapper,
  SingleProject,
  ProjectSideWrapper,
  StackImg,
} from "../pagesStyles/projects"

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
    <PageSection>
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
                    <StackImg
                      key={img}
                      src={`/images/${img}`}
                      alt="stack img"
                    />
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
    </PageSection>
  )
}

export default Projects
