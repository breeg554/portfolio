import React from "react"
import styled from "styled-components"
import img from "../images/Gym.png"
import Heading from "../components/SectionHeading"
const AboutSection = styled.section`
  padding: 1em;
  background-color: ${({ theme }) => theme.colors.darkGray};
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`
const ImgWrapper = styled.div`
  margin-top: 1em;
  order: 1;
  img {
    width: 100%;
  }
`
const TextWrapper = styled.div`
  margin-top: 1.5em;
  order: 2;

  p {
    padding: 0 0.5em;
    margin-top: 0.5em;
    font-size: 13px;
    color: #999;
  }
  span {
    color: #fff;
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
      </TextWrapper>

      <ImgWrapper>
        <img src={img} alt='man doing push-up"s' />
      </ImgWrapper>
    </AboutSection>
  )
}

export default About
