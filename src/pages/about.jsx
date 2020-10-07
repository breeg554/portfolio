import React from "react"
import styled from "styled-components"
import AboutSvg from "../images/About.svg"
import Heading from "../components/SectionHeading"

const AboutSection = styled.section`
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.darkGray};
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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
const TextWrapper = styled.div`
  margin-top: 3.5em;
  order: 2;
  p {
    margin-top: 1.5em;
    font-size: 13px;
    color: #999;
  }
  span {
    color: #fff;
  }
  a {
    display: inline-block;
    color: ${({ theme }) => theme.colors.orange};
    text-decoration: underline;
    font-size: 15px;
    margin-top: 1em;
  }
`
const About = () => {
  return (
    <AboutSection>
      <TextWrapper>
        <Heading color="#fff">About me.</Heading>
        <p>
          Lorem Ipsum is simply dummy text of the <span>printing</span> and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type <span>book</span>. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining <span>essentially</span> unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <a href="das" target="__blank">
          Resume
        </a>
      </TextWrapper>

      <ImgWrapper>
        <AboutSvg />
      </ImgWrapper>
    </AboutSection>
  )
}

export default About
