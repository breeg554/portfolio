import styled from "styled-components"
import { PageSection, ImageWrapper } from "./pagesStyles"

export const BannerSection = styled(PageSection)`
  overflow: hidden;
  position: relative;
  justify-content: center;
  padding: 3em 1em 0 1em;
  ${({ theme }) => theme.mediaQ.medium} {
    justify-content: space-between;
  }
`
export const ImgWrapper = styled(ImageWrapper)`
  max-width: 650px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQ.medium} {
    flex-grow: 1;
    flex: 50%;
    max-width: 100%;
  }
`
export const HeadingWrapper = styled.div`
  width: 100%;
  text-align: center;
  flex-grow: 1;
  padding-top: 5em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1,
  li,
  & > p {
    opacity: 0;
  }
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
export const LinkWrapper = styled.ul`
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
      text-decoration: none;
      font-size: 14px;
    }
  }

  ${({ theme }) => theme.mediaQ.medium} {
    margin-top: 2em;

    li {
      margin-right: 1em;
      border-radius: 10px;
      position: relative;
      a {
        padding: 0.5em 1.2em;
        font-size: 18px;
      }
    }
  }
`
