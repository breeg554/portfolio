import React from "react"
import Img from "../images/Banner.png"

import styled from "styled-components"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { theme } from "../utils/theme"
const BannerSection = styled.section`
  position: relative;
  padding: 0 1em;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`
const ImgWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  max-width: 740px;
  img {
    width: 100%;
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
`
const LinkWrapper = styled.ul`
  width: 100%;
  margin-top: 1em;
  display: flex;
  list-style: none;

  li {
    padding: 0.3em 0.7em;
    margin-right: 0.8em;
    border-radius: 5px;
    a {
      color: #fff;
      text-decoration: none;
      font-size: 14px;
    }
  }
  li:nth-of-type(1) {
    background-color: ${({ theme }) => theme.colors.orange};
  }
  li:nth-of-type(2) {
    background-color: ${({ theme }) => theme.colors.blue};
  }
`
export default function Home() {
  return (
    <>
      <BannerSection>
        <HeadingWrapper>
          <h1>Hi there,</h1>
          <h1>
            I'm <span>Dawid</span>
          </h1>
          <p>I'm going to be a Junior front-end dev.</p>
          <LinkWrapper>
            <li>
              <AniLink paintDrip to="/about">
                About me!
              </AniLink>
            </li>
            <li>
              <AniLink paintDrip to="/skills">
                Project!
              </AniLink>
            </li>
          </LinkWrapper>
        </HeadingWrapper>

        <ImgWrapper>
          <img src={Img} alt="Man writting code" />
        </ImgWrapper>
      </BannerSection>
    </>
  )
}
