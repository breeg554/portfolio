import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import AboutSvg from "../images/About.svg"
import Heading from "../components/SectionHeading"
import { IoMdCloudDownload } from "react-icons/io"
import { theme } from "../utils/theme"
import gsap from "gsap"
const AboutSection = styled.section`
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
const ImgWrapper = styled.div`
  margin-top: 5em;
  width: 100%;

  svg {
    height: 100%;
    width: 100%;
  }
  ${({ theme }) => theme.mediaQ.small} {
    flex-basis: 50%;
    margin: 0 0.5em;
  }
`
const TextWrapper = styled.div`
  margin-top: 3.5em;
  order: 2;
  p {
    margin-top: 1.5em;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray};
  }
  span {
    color: ${({ theme }) => theme.colors.orange};
  }
  a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: underline;
    font-size: 15px;
    margin-top: 1em;
  }
  ${({ theme }) => theme.mediaQ.small} {
    flex-basis: 50%;
    margin: 0 0.5em;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding-right: 2em;
    p {
      font-size: 16px;
    }
  }
`
const About = () => {
  const contentRef = useRef(null)
  const imgRef = useRef(null)
  const tl = useRef()
  useEffect(() => {
    const wrapper = contentRef.current
    const img = imgRef.current
    const heading = wrapper.querySelector("div:nth-of-type(1)")
    const paragraphs = wrapper.querySelectorAll("p")
    const link = wrapper.querySelector("a")
    tl.current = gsap.timeline({ defaults: { ease: "power3.inOut" } })
    gsap.set([heading, paragraphs, link, img], { autoAlpha: 0, y: "+=5px" })
    tl.current.staggerTo(
      [img, heading, paragraphs, link],
      1,
      { y: 0, autoAlpha: 1 },
      0.3
    )
  }, [])
  return (
    <AboutSection>
      <TextWrapper ref={contentRef}>
        <Heading color={theme.colors.gray}>About me.</Heading>
        <p>
          Lorem Ipsum is simply dummy text of the <span>printing</span> and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type <span>book</span>. It has
          survived not only five centuries, but also the leap into electronic
          typesetting.
        </p>
        <p>
          Remaining <span>essentially</span> unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <a href="/static/cv.pdf" download>
          <IoMdCloudDownload />
          Resume
        </a>
      </TextWrapper>

      <ImgWrapper ref={imgRef}>
        <AboutSvg />
      </ImgWrapper>
    </AboutSection>
  )
}

export default About
