import React, { useRef, useEffect } from "react"
import Img from "../images/Banner.png"
import styled from "styled-components"
import AniLink from "../components/NewAniLink"
import gsap from "gsap"
const BannerSection = styled.section`
  position: relative;
  padding: 0 1em;
  width: 100%;
  height: 100vh;
  max-width: ${({ theme }) => theme.layoutWidth}px;
  margin: 0 auto;
  overflow: hidden;
`
const ImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 700px;
  img {
    width: 100%;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding-right: 2em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    padding-right: 3em;
  }
`
const HeadingWrapper = styled.div`
  position: absolute;
  z-index: 1;
  padding-left: 1em;
  width: 100%;
  text-align: left;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-weight: 600;
    span {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
  h1:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.lightGray};

    font-size: 20px;
  }
  h1:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 50px;
  }
  p {
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 300;
    font-size: 15px;
  }
  ${({ theme }) => theme.mediaQ.small} {
    h1:nth-of-type(1) {
      font-size: 30px;
    }
    h1:nth-of-type(2) {
      font-size: 60px;
    }
    p {
      font-size: 20px;
    }
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding-left: 2em;
    h1:nth-of-type(1) {
      font-size: 40px;
    }
    h1:nth-of-type(2) {
      font-size: 80px;
    }
    p {
      font-size: 25px;
    }
  }
  ${({ theme }) => theme.mediaQ.large} {
    padding-left: 3em;
    top: 50%;
    h1:nth-of-type(1) {
      font-size: 50px;
    }
    h1:nth-of-type(2) {
      font-size: 100px;
    }
    p {
      font-size: 30px;
    }
  }
`
const LinkWrapper = styled.ul`
  width: 100%;
  margin-top: 1em;
  display: flex;
  list-style: none;

  li {
    margin-right: 0.8em;
    border-radius: 5px;
    a {
      padding: 0.3em 0.7em;
      display: block;
      width: 100%;
      height: 100%;
      color: #fff;
      text-decoration: none;
      font-size: 14px;
    }
  }
  li:nth-of-type(1) {
    background-color: ${({ theme }) => theme.colors.blue};
  }
  li:nth-of-type(2) {
    background-color: ${({ theme }) => theme.colors.orange};
  }
  ${({ theme }) => theme.mediaQ.medium} {
    margin-top: 2em;

    li {
      margin-right: 1em;
      border-radius: 10px;
      position: relative;
      a {
        padding: 0.8em 1.5em;
        font-size: 18px;
      }
    }
  }
`
export default function Home() {
  const contentRef = useRef(null)
  const imgRef = useRef(null)
  const tl = useRef()
  useEffect(() => {
    const img = imgRef.current
    const wrapper = contentRef.current
    const links = wrapper.querySelectorAll("li")
    const headers = wrapper.querySelectorAll("h1")
    const paragraph = wrapper.querySelector("p")
    tl.current = gsap.timeline({ defaults: { ease: "powe3.inOut" } })
    gsap.set([links, headers, paragraph], { autoAlpha: 0, y: "+=10px" })
    gsap.set(img, { autoAlpha: 0, y: "+=5px" })
    tl.current
      .staggerTo(
        [...headers, paragraph, links],
        1,
        { y: 0, autoAlpha: 1 },
        0.2,
        "start"
      )
      .to(img, { autoAlpha: 1, y: 0, duration: 1 }, "start")
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
              <AniLink path="/about">About me!</AniLink>
            </li>
            <li>
              <AniLink path="/skills">Projects!</AniLink>
            </li>
          </LinkWrapper>
        </HeadingWrapper>

        <ImgWrapper ref={imgRef}>
          <img src={Img} alt="Man writting code" />
        </ImgWrapper>
      </BannerSection>
    </>
  )
}
