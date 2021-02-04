import styled from "styled-components"
import { ImageWrapper } from "./pagesStyles"

export const ImgWrapper = styled(ImageWrapper)`
  margin-top: 5em;
  ${({ theme }) => theme.mediaQ.small} {
    flex-basis: 50%;
    margin: 0 0.5em;
  }
`
export const TextWrapper = styled.div`
  margin-top: 3.5em;
  order: 2;
  & > div:nth-of-type(1),
  p,
  a {
    opacity: 0;
  }
  p {
    margin-top: 1.5em;
    font-size: 13px;
    color: ${({ theme }) => theme.colors.gray};
  }
  p {
    a {
      color: ${({ theme }) => theme.colors.gray};
      font-weight: 600;
    }
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
export const LinksWrapper = styled.ul`
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
