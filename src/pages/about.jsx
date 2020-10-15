import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import AboutSvg from "../images/About.svg"
import Heading from "../components/SectionHeading"
import { IoMdCloudDownload } from "react-icons/io"
import { theme } from "../utils/theme"
import {
  slideInTopAnimation,
  aboutSvgAnimation,
} from "../components/Animations"
import AniLink from "../components/NewAniLink"

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
const LinksWrapper = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-between;
  a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: underline;
    font-size: 15px;
    margin-top: 1em;
  }
`

const About = () => {
  const contentRef = useRef(null)
  const imgRef = useRef(null)
  useEffect(() => {
    const wrapper = contentRef.current
    const img = imgRef.current
    const heading = wrapper.querySelector("div:nth-of-type(1)")
    const paragraphs = wrapper.querySelectorAll("p")
    const link = wrapper.querySelectorAll("a")
    slideInTopAnimation([heading, paragraphs, link], 1)
    aboutSvgAnimation(img)
  }, [])
  return (
    <AboutSection>
      <TextWrapper ref={contentRef}>
        <Heading color={theme.colors.gray}>About me.</Heading>
        <p>
          I'm 22 years old and I'm currently a 3rd year student of IT at
          University of Rzeszów. I started to learn the widely understood
          "frontend" about 3 years ago. I enjoy getting to know and learning new
          technologies. I am also persistent and stubborn in pursuing my goals,
          which I treat as a disadvantage rather than an advantage because it is
          often very tiring. This is due to my hidden character as an athlete
          who accompanies me almost all my life, starting with a few years of
          adventure with football, through gyms, jujitsu and boxing, ending with
          the taste, where for a few months I have been trying (the key word) to
          finally learn well swim.
        </p>
        <p>
          Finally, I think that I am ready to start my adventure with work /
          internship as a frontend-developer and if you think so too and want to
          give me a chance please contact me via email /dvdk98@gmail.com/.
        </p>
        <LinksWrapper>
          <li>
            <AniLink path="/skills">My skills.</AniLink>
          </li>
          <li>
            <a href="/static/cv.pdf" download>
              <IoMdCloudDownload />
              Resume
            </a>
          </li>
        </LinksWrapper>
      </TextWrapper>

      <ImgWrapper ref={imgRef}>
        <AboutSvg />
      </ImgWrapper>
    </AboutSection>
  )
}

export default About
