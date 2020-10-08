import React, { useRef, useEffect } from "react"
import AniLink from "../NewAniLink"
import { IoMdCloudDownload } from "react-icons/io"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import mainMenuLinksData from "../../dataContent/nav.json"
import styled from "styled-components"
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: ${({ windowSize }) =>
    windowSize ? `translateX(${windowSize}px)` : "translateX(100%)"};
  background-color: #ccc;
  z-index: 99;
`

const SideNavMainMenu = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const MainMenuSingleLink = styled.li`
  margin-bottom: 0.5em;
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGray};
    font-size: 30px;
    font-weight: bold;
  }
`
const SideNavSocialLinks = styled.ul`
  position: absolute;
  bottom: 10px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  list-style: none;
`
const SocialMenuSingleLink = styled.li`
  margin: 0 0.2em;
  svg {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 18px;
  }
`

const Navigation = ({ setIsOpen, menuRef, windowSize }) => {
  useEffect(() => {
    console.log(windowSize)
  }, [windowSize])
  return (
    <Nav ref={menuRef} windowSize={windowSize} onClick={() => setIsOpen(false)}>
      <SideNavMainMenu>
        {mainMenuLinksData.map(link => (
          <MainMenuSingleLink key={link.id}>
            <AniLink path={link.path} hex={link.navBackground}>
              {link.name}
            </AniLink>
          </MainMenuSingleLink>
        ))}
      </SideNavMainMenu>
      <SideNavSocialLinks>
        <SocialMenuSingleLink>
          <a href="/static/cv.pdf" download>
            <IoMdCloudDownload />
          </a>
        </SocialMenuSingleLink>
        <SocialMenuSingleLink>
          <a href="https://github.com/breeg554" target="__blank">
            <AiFillGithub />
          </a>
        </SocialMenuSingleLink>
        <SocialMenuSingleLink>
          <a href="https://github.com/breeg554" target="__blank">
            <AiFillLinkedin />
          </a>
        </SocialMenuSingleLink>
      </SideNavSocialLinks>
    </Nav>
  )
}

export default Navigation
