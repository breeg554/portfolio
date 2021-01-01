import React, { useEffect, useRef } from "react"
import { IoIosArrowBack } from "react-icons/io"
import { graphql } from "gatsby"
import AniLink from "../components/CustomAniLink"
import { slideInTopAnimation } from "../components/Animations"
import { theme } from "../utils/theme"
import {
  StyledProjectPage,
  BackIcon,
  ImgWrapper,
  ProjectWrapper,
  ProjectPart,
  StackList,
  StackEl,
  LinkWrapper,
  ProjectLink,
} from "./style"

const ProjectTemplate = ({ data }) => {
  const contentRef = useRef(null)
  const imgRef = useRef(null)
  const projectData = data.allSitePage.edges[0].node.context

  useEffect(() => {
    const content = contentRef.current
    const img = imgRef.current
    const aboutProject = content.querySelectorAll("div")
    const li = content.querySelectorAll("li")
    slideInTopAnimation([img, aboutProject, li], 1)
  }, [])
  return (
    <StyledProjectPage>
      <BackIcon>
        <AniLink path="/projects" color={theme.colors.lightGray}>
          <IoIosArrowBack />
          back
        </AniLink>
      </BackIcon>

      <ImgWrapper ref={imgRef}>
        <img src={`../../${projectData.projectImg}`} alt="project present" />
      </ImgWrapper>
      <ProjectWrapper ref={contentRef}>
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
          <ProjectLink
            isDisabled={projectData.demo ? false : true}
            color={theme.colors.orange}
          >
            {projectData.demo ? (
              <a href={projectData.demo} target="_blank" rel="noreferrer">
                Demo!
              </a>
            ) : (
              <span>Demo!</span>
            )}
          </ProjectLink>
          <ProjectLink
            isDisabled={projectData.code ? false : true}
            color={theme.colors.blue}
          >
            <a href={projectData.code} target="_blank" rel="noreferrer">
              Code!
            </a>
          </ProjectLink>
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
            demo
            code
          }
        }
      }
    }
  }
`
