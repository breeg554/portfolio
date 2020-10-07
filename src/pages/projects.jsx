import React, { useEffect } from "react"
import styled from "styled-components"
import Heading from "../components/SectionHeading"
import ProjectSvg from "../images/projects.svg"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import DataContent from "../dataContent/projects.json"
const ProjectSection = styled.section`
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.darkGray};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const ContentWrapper = styled.div`
  margin-top: 3.5em;
  order: 2;
`
const ImgWrapper = styled.div`
  margin-top: 5em;
  width: 100%;
  order: 1;
  svg {
    height: 100%;
    width: 100%;
  }
`
const ProjectsWrapper = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 2em;
`
const SingleProject = styled.li`
  background-color: ${({ theme }) => theme.colors.darkGray};
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  box-shadow: -5px 6px 15px 0px rgba(0, 0, 0, 0.75);
  padding: 0.5em 1em;
  margin-bottom: 1em;
  h3 {
    color: #fff;
    font-size: 24px;
  }
  h3,
  p {
    font-weight: normal;
  }
  p {
    color: #eee;
    font-size: 12px;
    margin: 0.5em 0 1em 0;
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
  return (
    <ProjectSection>
      <ContentWrapper>
        <Heading color="#fff">Projects.</Heading>
        <ProjectsWrapper>
          {DataContent.map(project => (
            <SingleProject>
              <h3>{project.heading}</h3>
              <p>{project.content}</p>
              <ProjectSideWrapper>
                <div>
                  {project.stackImages.map(img => (
                    <StackImg src={img} alt="stack img" />
                  ))}
                </div>
                <AniLink to={`/projects/${project.name}`} paintDrip>
                  Read More!
                </AniLink>
              </ProjectSideWrapper>
            </SingleProject>
          ))}
        </ProjectsWrapper>
      </ContentWrapper>
      <ImgWrapper>
        <ProjectSvg />
      </ImgWrapper>
    </ProjectSection>
  )
}

export default Projects
