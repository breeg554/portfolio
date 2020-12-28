import React, { useRef, useEffect } from "react"
import Img from "../images/home.svg"
import AniLink from "../components/CustomAniLink"
import { slideInTopAnimation } from "../components/Animations"
import { theme } from "../utils/theme"
import { BannerSection, ImgWrapper, HeadingWrapper, LinkWrapper } from "./style"

export default function Home() {
  const contentRef = useRef(null)
  const imgRef = useRef(null)

  useEffect(() => {
    const img = imgRef.current
    const wrapper = contentRef.current
    const links = wrapper.querySelectorAll("li")
    const headers = wrapper.querySelectorAll("h1")
    const paragraph = wrapper.querySelector("p")
    slideInTopAnimation([headers, img, paragraph, links], 1)
  }, [])
  return (
    <>
      <BannerSection>
        <HeadingWrapper ref={contentRef}>
          <h1>Hi there,</h1>
          <h1>
            I'm <span>Dawid</span>
          </h1>
          <p>I'm going to be a Junior front-end dev.</p>
          <LinkWrapper>
            <li>
              <AniLink path="/about" btnBackgroundColor={theme.colors.blue}>
                About me.
              </AniLink>
            </li>
            <li>
              <AniLink
                path="/projects"
                btnBackgroundColor={theme.colors.orange}
              >
                Projects.
              </AniLink>
            </li>
          </LinkWrapper>
        </HeadingWrapper>

        <ImgWrapper ref={imgRef}>
          <Img />
        </ImgWrapper>
      </BannerSection>
    </>
  )
}
