import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import Heading from "../components/SectionHeading"
import ProjectSvg from "../images/projects.svg"
import AniLink from "../components/NewAniLink"
import DataContent from "../dataContent/projects.json"
import gsap from "gsap"
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
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 0.5em 1em;
  margin-bottom: 1em;
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
  useEffect(() => {
    const wrapper = svgRef.current
    const darkHouse = wrapper.querySelector("#darkHouse")
    const whiteHouse = wrapper.querySelector("#whiteHouse")
    const smoke = wrapper.querySelectorAll("#smoke")
    const background = wrapper.querySelector("#background")
    const car = wrapper.querySelector("#car")
    const carArm = wrapper.querySelector("#arm")
    const shortArm = wrapper.querySelector("#shortArm")
    const carWood = wrapper.querySelector("#wood")
    const clouds = wrapper.querySelectorAll("#cloud")
    gsap.set(
      [
        darkHouse,
        ...whiteHouse.children,
        ...background.children,
        ...smoke,
        car,
      ],
      {
        autoAlpha: 0,
      }
    )
    gsap.set(clouds, { autoAlpha: 0.5 })
    const tl = gsap.timeline()
    const tl2 = gsap.timeline()
    tl2.fromTo(
      clouds,
      { x: "-420px" },
      {
        x: "720px",
        duration: 10,
        repeat: -1,
        ease: "none",
      }
    )

    tl.fromTo(
      darkHouse,
      { x: "-=10px" },
      { duration: 0.5, autoAlpha: 1, x: "0" }
    )
      .staggerTo(background.children, 1, { autoAlpha: 1 }, 0.2)
      .fromTo(car, { x: "-=100%" }, { x: "0", duration: 1, autoAlpha: 1 })
      .fromTo(carArm, { scaleX: "0.5" }, { scaleX: 1.5, duration: 1 }, "same")
      .fromTo(
        carWood,
        { x: "-70px" },
        { x: "80px", y: "60px", duration: 1 },
        "same"
      )
      .to(
        carArm,
        { rotate: "15deg", duration: 1, transformOrigin: "0 0" },
        "same"
      )
      .to(shortArm, { rotate: "-10deg", duration: 1 }, "same")
      .to(
        carArm,
        { rotate: "0", duration: 1, transformOrigin: "0 0" },
        "reverse rotate"
      )
      .to(shortArm, { rotate: "0", duration: 1 }, "reverse rotate")
      .to(carArm, { scaleX: 1, duration: 1 }, "reverse rotate")
      .staggerTo(whiteHouse.children, 1, { autoAlpha: 1 }, 0.2)
      .staggerTo(smoke, 0.6, { autoAlpha: 1 }, 0.3)
  }, [])
  return (
    <ProjectSection>
      <ContentWrapper>
        <Heading color={theme.colors.gray}>Projects.</Heading>
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
                <AniLink path={`/projects/${project.name}`}>Read More!</AniLink>
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
