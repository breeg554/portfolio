import React, { useRef, useEffect } from "react"
import Img from "../images/home.svg"
import styled from "styled-components"
import AniLink from "../components/NewAniLink"
import { slideInTopAnimation } from "../components/Animations"

const BannerSection = styled.section`
  position: relative;
  padding: 3em 1em 0 1em;
  width: 100%;
  min-height: 100vh;
  max-width: ${({ theme }) => theme.layoutWidth}px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
 ${({ theme }) => theme.mediaQ.medium} {
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
`
const ImgWrapper = styled.div`
  width: 100%;
  max-width: 650px;
  margin: 0 auto;
  svg {
    width: 100%;
    height: auto;
  }
  ${({ theme }) => theme.mediaQ.medium} {

    flex-grow: 1;
    flex: 50%;
    max-width: 100%;
  }
 
`
const HeadingWrapper = styled.div`
  width: 100%;
  text-align: center;
  flex-grow: 1;
  padding-top: 5em;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    padding-top: 9em;
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
  ${({ theme }) => theme.mediaQ.medium} {
    padding-left: 2em;
    padding-top: 0;
    width: auto;
    flex-grow: 0;
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
    h1:nth-of-type(1) {
      font-size: 50px;
    }
    h1:nth-of-type(2) {
      font-size: 100px;
    }
    p {
      font-size: 28px;
    }
  }
`
const LinkWrapper = styled.ul`
  width: 100%;
  margin-top: 1em;
  display: flex;
  justify-content: center;
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
              <AniLink path="/about">About me.</AniLink>
            </li>
            <li>
              <AniLink path="/projects">Projects.</AniLink>
            </li>
          </LinkWrapper>
        </HeadingWrapper>

        <ImgWrapper ref={imgRef}>
          <Img/>
        </ImgWrapper>
      </BannerSection>
    </>
  )
}
