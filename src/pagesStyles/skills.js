import styled from "styled-components"
import { PageSection, ImageWrapper } from "./pagesStyles"
export const SkillsSection = styled(PageSection)`
  overflow: hidden;
  position: relative;
  justify-content: flex-start;
  padding: 0;
`

export const ImgWrapper = styled(ImageWrapper)`
  z-index: 0;
  order: 1;
  margin-top: 7em;
  ${({ theme }) => theme.mediaQ.medium} {
    order: 2;
    margin: 0 0.5em;
    flex: 50%;
    padding-right: 2em;
  }
`
export const TextWrapper = styled.div`
  order: 2;
  width: 100%;
  margin-top: 4em;
  padding: 2em 1em 0 1em;
  position: relative;
  & > div:nth-of-type(1),
  button,
  ul:nth-of-type(1) li {
    opacity: 0;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    flex-basis: 350px;
    margin: 0 5% 0 2em;
    order: 1;

    & > div {
      margin-top: 1em;
    }
  }
  ${({ theme }) => theme.mediaQ.large} {
    margin-left: 3em;
  }
`
export const SkillsButton = styled.button`
  background-color: transparent;
  border: none;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.orange : theme.colors.blue};
  margin-right: 1em;
  margin-top: 0.5em;
  font-size: 18px;
  font-weight: 600;
  outline: none;
  ${({ theme }) => theme.mediaQ.medium} {
    font-size: 22px;
    cursor: pointer;
  }
`
export const SkillsList = styled.ul`
  list-style: none;
  margin-top: 1em;
`
export const SingleSkill = styled.li`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 15px;
  position: relative;
  margin-bottom: 0.3em;
  margin-left: 0.5em;
  &::before {
    position: absolute;
    top: 50%;
    left: -0.5em;
    transform: translateY(-50%);
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.blue};
  }

  ${({ theme }) => theme.mediaQ.small} {
    font-size: 18px;
    margin-bottom: 0.5em;
  }
`
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  ul:nth-of-type(2) {
    position: absolute;
    top: 0;
    margin-top: 0;
  }
`
