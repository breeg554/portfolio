import styled from "styled-components"

export const ContentWrapper = styled.div`
  margin-top: 3.5em;
  order: 2;
  height: auto;
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
export const ImgWrapper = styled.div`
  margin-top: 5em;
  width: 100%;
  order: 1;
  svg {
    height: 100%;
    width: 100%;
  }
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
export const StackImg = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 0.3em;
`
