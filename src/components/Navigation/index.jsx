import React from "react"
import AniLink from "../CustomAniLink"
import { IoMdCloudDownload } from "react-icons/io"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai"
import mainMenuLinksData from "../../dataContent/nav.json"
import { theme } from "../../utils/theme"
import {
  Nav,
  SideNavMainMenu,
  MainMenuSingleLink,
  SideNavSocialLinks,
  SocialMenuSingleLink,
  SocialLinkTooltip,
} from "./style"
const Navigation = ({ setIsOpen, menuRef }) => {
  return (
    <Nav ref={menuRef} onClick={() => setIsOpen(false)}>
      <SideNavMainMenu>
        {mainMenuLinksData.map(link => (
          <MainMenuSingleLink key={link.id}>
            <AniLink
              path={link.path}
              hex={link.navBackground}
              color={theme.colors.gray}
            >
              {link.name}
            </AniLink>
          </MainMenuSingleLink>
        ))}
      </SideNavMainMenu>
      <SideNavSocialLinks>
        <SocialMenuSingleLink>
          <SocialLinkTooltip>Readme!</SocialLinkTooltip>
          <a href="../../../cv.pdf" download>
            <IoMdCloudDownload />
          </a>
        </SocialMenuSingleLink>
        <SocialMenuSingleLink>
          <SocialLinkTooltip>Github!</SocialLinkTooltip>
          <a href="https://github.com/breeg554" target="__blank">
            <AiFillGithub />
          </a>
        </SocialMenuSingleLink>
        {/* <SocialMenuSingleLink>
          <SocialLinkTooltip>Linkedin!</SocialLinkTooltip>
          <a href="https://github.com/breeg554" target="__blank">
            <AiFillLinkedin />
          </a>
        </SocialMenuSingleLink> */}
      </SideNavSocialLinks>
    </Nav>
  )
}

export default Navigation
