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
  transform: ${({ isOpen }) => (isOpen ? "translateX(0)" : "translateX(100%)")};
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

const Navigation = ({ isOpen, setIsOpen }) => {
  const navRef = useRef(null)
  useEffect(() => {
    const nav = navRef.current
    const lists = [...nav.querySelectorAll("li")]

    // const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } })
    // gsap.set(lists, { autoAlpha: 0 })
    // isOpen
    //   ? tl
    //       .to(nav, { x: "0", duration: 1 })
    //       .fromTo(
    //         lists,
    //         { y: "20px" },
    //         { y: "0", duration: 1, autoAlpha: 1, stagger: 0.2 }
    //       )
    //   : tl
    //       .fromTo(lists, { y: "0" }, { y: "20px", duration: 1, stagger: 0.2 })
    //       .to(nav, { x: "100%", duration: 1 })
  })
  return (
    <Nav ref={navRef} isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
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
      </SideNav>
    </Nav>
  )
}

export default Navigation
