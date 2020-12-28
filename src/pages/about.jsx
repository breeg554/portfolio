import React, { useEffect, useRef } from "react"
import { IoMdCloudDownload } from "react-icons/io"
import AniLink from "../components/CustomAniLink"
import AboutSvg from "../images/About.svg"
import Heading from "../components/SectionHeading"
import { theme } from "../utils/theme"
import {
  slideInTopAnimation,
  aboutSvgAnimation,
} from "../components/Animations"
import { PageSection } from "../pagesStyles/pagesStyles"
import { ImgWrapper, TextWrapper, LinksWrapper } from "../pagesStyles/about"

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
    <PageSection>
      <TextWrapper ref={contentRef}>
        <Heading color={theme.colors.gray}>About me.</Heading>
        <p>
          I'm 22 years old and I'm currently a 3rd year student of IT at
          University of Rzeszów. I started to learn the widely understood
          "frontend" about 3 years ago. I enjoy getting to know and learning new
          technologies. Besides programming, sport is also a big part of my
          life. Several years playing football, then gym, jujitsu and boxing,
          and finally swimming and chess (I know, a strange combination). It has
          taught me to be persistent in achieving my goals.
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
    </PageSection>
  )
}

export default About
