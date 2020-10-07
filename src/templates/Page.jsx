import React, { useEffect } from "react"
import styled from "styled-components"
import { IoIosArrowBack } from "react-icons/io"
import { graphql } from "gatsby"
import AniLink from "gatsby-plugin-transition-link/AniLink"
const StyledProjectPage = styled.section`
  background-color: ${({ theme }) => theme.colors.white};
  min-height: 100vh;
  width: 100%;
  padding: 3em 1em 1em 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1em;
`
const BackIcon = styled.div`
  margin-top: 3em;
  max-width: 60px;
  a {
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.darkGray};
    text-decoration: none;
  }
`
const ImgWrapper = styled.div`
  width: 100%;

  overflow: hidden;
  img {
    width: 100%;
  }
`
const ProjectPart = styled.div`
  margin-bottom: 1em;
  & > span {
    display: inline-block;
    font-size: 12px;
    color: #ccc;
    margin-bottom: 0.5em;
  }
  h1 {
    font-size: 30px;
  }
  p,
  h1,
  li {
    color: ${({ theme }) => theme.colors.gray};
  }
`
const StackList = styled.ul`
  list-style: none;
  display: flex;
`
const StackEl = styled.li`
  margin-right: 1em;
`
const LinkWrapper = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;

  li {
    padding: 0.3em 0.7em;
    margin-right: 0.8em;
    border-radius: 5px;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
    }
  }
  li:nth-of-type(1) {
    background-color: ${({ theme }) => theme.colors.orange};
  }
  li:nth-of-type(2) {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`
const ProjectTemplate = ({ data }) => {
  const projectData = data.allSitePage.edges[0].node.context

  return (
    <StyledProjectPage>
      <BackIcon>
        <AniLink to="/projects" paintDrip>
          <IoIosArrowBack />
          back
        </AniLink>
      </BackIcon>

      <ImgWrapper>
        <img src={projectData.projectImg} alt="project present" />
      </ImgWrapper>
      <div>
        <ProjectPart>
          <span>Project name.</span>
          <h1>{projectData.heading}</h1>
        </ProjectPart>
        <ProjectPart>
          <span>Description.</span>
          <p>{projectData.content}</p>
        </ProjectPart>
        <ProjectPart>
          <span>Stack.</span>
          <StackList>
            {projectData.stack.map(tech => (
              <StackEl key={tech}>{tech}</StackEl>
            ))}
          </StackList>
        </ProjectPart>
      </div>
      <LinkWrapper>
        <li>
          <a href="#">Demo!</a>
        </li>
        <li>
          <a href="#">Code!</a>
        </li>
      </LinkWrapper>
    </StyledProjectPage>
  )
}
export default ProjectTemplate
export const query = graphql`
  query($path: String!) {
    allSitePage(filter: { path: { eq: $path } }) {
      edges {
        node {
          context {
            id
            heading
            content
            stack
            stackImages
            projectImg
          }
        }
      }
    }
  }
`
