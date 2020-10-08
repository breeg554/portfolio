import React, { useEffect } from "react"
import styled from "styled-components"
import { IoIosArrowBack } from "react-icons/io"
import { graphql } from "gatsby"
import AniLink from "../components/NewAniLink"
const StyledProjectPage = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.layoutWidth}px;
  margin: 0 auto;
  padding: 3em 1em 1em 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1em;
  ${({ theme }) => theme.mediaQ.small} {
    grid-row-gap: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas:
      "btn   ."
      "left right";
    align-items: center;
  }
`
const BackIcon = styled.div`
  margin-top: 3em;
  max-width: 60px;
  a {
    display: flex;
    align-items: top;
    color: ${({ theme }) => theme.colors.lightGray};
    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
  }
  ${({ theme }) => theme.mediaQ.small} {
    grid-area: btn;
    margin-top: 0;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    margin-left: 1em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    margin-left: 2em;
  }
`
const ImgWrapper = styled.div`
  width: 100%;

  overflow: hidden;
  img {
    width: 100%;
  }
  ${({ theme }) => theme.mediaQ.small} {
    grid-area: right;
  }
`
const ProjectWrapper = styled.div`
  ${({ theme }) => theme.mediaQ.small} {
    grid-area: left;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding-left: 1em;
    padding-right: 1em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    padding-left: 2em;
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
  ${({ theme }) => theme.mediaQ.small} {
    h1 {
      font-size: 40px;
    }
    & > span {
      font-size: 15px;
    }
  }
  ${({ theme }) => theme.mediaQ.medium} {
    h1 {
      font-size: 50px;
    }
    & > span {
      font-size: 17px;
    }
    p {
      font-size: 18px;
    }
  }
  ${({ theme }) => theme.mediaQ.large} {
    h1 {
      font-size: 60px;
    }
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
  ${({ theme }) => theme.mediaQ.medium} {
    li {
      padding: 0.3em 1em;
    }
    a {
      font-size: 16px;
    }
  }
`
const ProjectTemplate = ({ data }) => {
  const projectData = data.allSitePage.edges[0].node.context

  return (
    <StyledProjectPage>
      <BackIcon>
        <AniLink path="/projects">
          <IoIosArrowBack />
          back
        </AniLink>
      </BackIcon>

      <ImgWrapper>
        <img src={projectData.projectImg} alt="project present" />
      </ImgWrapper>
      <ProjectWrapper>
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
        <LinkWrapper>
          <li>
            <a href="#">Demo!</a>
          </li>
          <li>
            <a href="#">Code!</a>
          </li>
        </LinkWrapper>
      </ProjectWrapper>
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
