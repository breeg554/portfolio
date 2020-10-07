import React, { useRef, useEffect } from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import gsap from "gsap"
import styled from "styled-components"
const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  transform: translateX(100%);
  background-color: #ccc;
  z-index: 99;
`

const SideNav = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Navigation = ({ setIsOpen, menuRef }) => {
  return (
    <Nav ref={menuRef} onClick={() => setIsOpen(false)}>
      <SideNav>
        <li>
          <AniLink paintDrip to="/" hex={"#222"}>
            Go to home
          </AniLink>
        </li>
        <li>
          <AniLink paintDrip to="/about" hex={"#eee"}>
            Go to about
          </AniLink>
          {/* change this hex color to theme */}
        </li>
        <li>
          <AniLink paintDrip to="/skills" hex={"#eee"}>
            Go to skills
          </AniLink>
          {/* change this hex color to theme */}
        </li>
        <li>
          <AniLink paintDrip to="/projects" hex={"#eee"}>
            Go to Projects
          </AniLink>
          {/* change this hex color to theme */}
        </li>
      </SideNav>
    </Nav>
  )
}

export default Navigation
