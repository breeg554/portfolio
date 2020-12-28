import styled from "styled-components"
export const Nav = styled.nav`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100vh;
  background-color: #ccc;
  z-index: 99;
  ${({ theme }) => theme.mediaQ.medium} {
    position: static;
    height: auto;
    background-color: transparent;
    width: auto;
    transform: none;
    top: 0;
    left: 0;
    display: flex;
  }
`

export const SideNavMainMenu = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  ${({ theme }) => theme.mediaQ.medium} {
    flex-direction: row;
  }
`

export const MainMenuSingleLink = styled.li`
  margin-bottom: 0.5em;
  a {
    text-decoration: none;
    font-size: 30px;
    font-weight: 600;
    padding: 0.1em 0.3em;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    margin-bottom: 0;
    margin-left: 1em;
    a {
      font-size: 20px;
      font-weight: 400;
      transition: color 0.1s ease-in-out;
      text-transform: lowercase;
    }
    &:hover a {
      color: ${({ theme }) => theme.colors.orange};
    }
  }
`
export const SideNavSocialLinks = styled.ul`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
  ${({ theme }) => theme.mediaQ.medium} {
    position: static;
    margin-left: 2em;
  }
`
export const SocialMenuSingleLink = styled.li`
  margin: 0.1em 0.2em 0 0.2em;
  svg {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 19px;
    transition: color 0.2s ease-in-out;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    position: relative;
    svg {
      font-size: 20px;
    }
    &:hover svg {
      color: ${({ theme }) => theme.colors.orange};
    }
    &:hover div {
      opacity: 1;
      transform: translate(-50%) scale(1);
    }
  }
`
export const SocialLinkTooltip = styled.div`
  display: none;
  ${({ theme }) => theme.mediaQ.medium} {
    display: block;
    width: auto;
    position: absolute;
    box-shadow: 2px 2px 20px ${({ theme }) => theme.colors.orange};
    border-radius: 5px;
    background-color: #fff;
    top: 25px;
    left: 50%;
    opacity: 0;
    transform: translate(-50%, -100%) scale(0.2);
    transition: all 0.2s ease-in-out;
    color: ${({ theme }) => theme.colors.lightGray};
    padding: 3px 5px;
    font-size: 0.8em;
  }
`
