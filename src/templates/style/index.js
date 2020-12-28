import styled from "styled-components"
export const StyledProjectPage = styled.section`
  min-height: 100vh;
  width: 100%;
  max-width: ${({ theme }) => theme.smallLayoutWidth}px;
  margin: 0 auto;
  padding: 3em 1em 1em 1em;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1em;
  ${({ theme }) => theme.mediaQ.medium} {
    max-width: ${({ theme }) => theme.layoutWidth}px;
    grid-row-gap: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 80px 1fr;
    grid-template-areas:
      "btn   ."
      "left right";
    align-items: center;
  }
`
export const BackIcon = styled.div`
  margin-top: 3em;
  max-width: 60px;
  a {
    display: flex;
    align-items: top;

    text-decoration: none;
    text-transform: uppercase;
    font-size: 12px;
  }

  ${({ theme }) => theme.mediaQ.medium} {
    grid-area: btn;
    margin-top: 0;
    margin-left: 1em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    margin-left: 2em;
  }
`
export const ImgWrapper = styled.div`
  width: 100%;

  overflow: hidden;
  img {
    width: 100%;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    grid-area: right;
  }
`
export const ProjectWrapper = styled.div`
  ${({ theme }) => theme.mediaQ.medium} {
    grid-area: left;
    padding-left: 1em;
    padding-right: 1em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    padding-left: 2em;
    margin-bottom: 5em;
  }
`
export const ProjectPart = styled.div`
  margin-bottom: 1em;
  & > span {
    display: inline-block;
    font-size: 12px;
    color: #ccc;
    margin-bottom: 0.5em;
  }
  h1 {
    font-size: 30px;
  }
  p,
  h1,
  li {
    color: ${({ theme }) => theme.colors.gray};
  }
  ${({ theme }) => theme.mediaQ.small} {
    h1 {
      font-size: 40px;
    }
    & > span {
      font-size: 15px;
    }
  }
  ${({ theme }) => theme.mediaQ.medium} {
    h1 {
      font-size: 50px;
    }
    & > span {
      font-size: 17px;
    }
    p {
      font-size: 18px;
    }
  }
  ${({ theme }) => theme.mediaQ.large} {
    h1 {
      font-size: 60px;
    }
  }
`
export const StackList = styled.ul`
  list-style: none;
  display: flex;
  display: flex;
  flex-wrap: wrap;
`
export const StackEl = styled.li`
  margin-right: 1em;
`
export const LinkWrapper = styled.ul`
  width: 100%;
  display: flex;
  list-style: none;
`
export const ProjectLink = styled.li`
  padding: 0.3em 0.7em;
  margin-right: 0.8em;
  border-radius: 5px;
  background-color: ${({ color, isDisabled }) => (isDisabled ? "#ccc" : color)};
  a,
  span {
    color: #fff;
    text-decoration: none;
    font-size: 14px;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    padding: 0.3em 1em;

    a,
    span {
      font-size: 16px;
    }
  }
`
