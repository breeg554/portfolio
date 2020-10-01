import React from "react"
import Img from "../images/Banner.png"
import styled from "styled-components"

const BannerSection = styled.section`
  position: relative;
  padding: 0 1em;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 100%;
  }
`
const HeadingWrapper = styled.div`
  position: absolute;
  width: 100%;
  text-align: center;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  h1 {
    font-size: 50px;
  }
  h1:nth-of-type(1) {
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 600;
  }
  h1:nth-of-type(2) {
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 400;
  }
  p {
    color: ${({ theme }) => theme.colors.lightGray};
    font-weight: 300;
    font-size: 15px;
  }
`
export default function Home() {
  return (
    <main>
      <BannerSection>
        <HeadingWrapper>
          <h1>Hi,</h1>
          <h1>I am Dawid</h1>
          <p>I'm going to be a Junior front-end dev.</p>
        </HeadingWrapper>
        <div>
          <img src={Img} alt="Man writting code" />
        </div>
      </BannerSection>
    </main>
  )
}
