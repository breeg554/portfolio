import styled from "styled-components"
import { ImageWrapper } from "./pagesStyles"
export const ContentWrapper = styled.div`
  margin-top: 3.5em;
  order: 2;
  height: auto;
  & > div:nth-of-type(1),
  li {
    opacity: 0;
  }
  ${({ theme }) => theme.mediaQ.small} {
    order: 1;
    margin: 4em 1em 0 0;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding-left: 2em;
    padding-right: 1em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    padding-left: 3em;
    padding-right: 3em;
  }
`
export const ImgWrapper = styled(ImageWrapper)`
  margin-top: 5em;
  order: 1;
  ${({ theme }) => theme.mediaQ.small} {
    order: 2;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding-right: 2em;
  }
`
export const ProjectsWrapper = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 2em;
`
export const SingleProject = styled.li`
  margin-bottom: 1em;
  padding: 0.5em 0;
  border-radius: 10px;
  h3 {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 24px;
  }
  h3,
  p {
    font-weight: normal;
  }
  p {
    color: ${({ theme }) => theme.colors.gray};
    font-size: 12px;
    margin: 0.5em 0 1em 0;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    a {
      padding: 0.2em 0.5em;
      transition: all 0.2s ease-in-out;
      margin-right: 0.5em;
      color: ${({ theme }) => theme.colors.orange};
      &:hover {
        background-color: ${({ theme }) => theme.colors.orange};
        color: #fff;
      }
    }
  }
`
export const ProjectSideWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 13px;
  }
`
export const StackImgWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
export const StackImg = styled.img`
  width: 20px;
  max-height: 20px;
  margin-right: 0.3em;
`
