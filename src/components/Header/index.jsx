import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import AniLink from "../NewAniLink"
import Nav from "../Navigation"
import LogoImg from "../../images/Logo3.svg"
import gsap from "gsap"
import { globalHistory } from "@reach/router"
import { theme } from "../../utils/theme"
const HeaderComponent = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
`
const HeaderWrapper = styled.div`
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.layoutWidth}px;
  margin: 0 auto;
  ${({ theme }) => theme.mediaQ.medium} {
    padding: 1em 2em;
  }
  ${({ theme }) => theme.mediaQ.large} {
    padding: 1em 3em;
  }
`
const OpenMenuBtn = styled.button`
  position: relative;
  z-index: 100;
  cursor: pointer;
  border: none;
  padding: 5px;
  width: 30px;
  height: 30px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  outline: none;
  span {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    top: 50%;
    width: 70%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray};
    border-radius: 10px;
  }
  span:nth-of-type(1) {
    transform: translate(-50%, -50%) translateY(-200%);
  }
  span:nth-of-type(2) {
    top: 50%;
  }
  span:nth-of-type(3) {
    transform: translate(-50%, -50%) translateY(200%);
  }
  ${({ theme }) => theme.mediaQ.medium} {
    display: none;
  }
`
const Logo = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    width: 100px;
  }
  ${({ theme }) => theme.mediaQ.medium} {
    width: 100px;
  }
`

const menuAnimation = (tl, nav, btn) => {
  tl = gsap.timeline()
  const mainMenuLists = [...nav.querySelectorAll("ul:nth-of-type(1) li")]
  const socialLists = [...nav.querySelectorAll("ul:nth-of-type(2) li")]
  const upLine = btn.querySelector("span:nth-of-type(1)")
  const centerLine = btn.querySelector("span:nth-of-type(2)")
  const downLine = btn.querySelector("span:nth-of-type(3)")

  tl.to([upLine, downLine], { y: "-50%", duration: 0.3 })
    .to(upLine, { duration: 0.1, rotation: 45 }, 0.2)
    .to(downLine, { duration: 0.1, rotation: -45 }, 0.2)
    .to(centerLine, { duration: 0.1, autoAlpha: 0 }, 0.2)
    .from(nav, { xPercent: 100, duration: 0.5, autoAlpha: 1 })
    .staggerFromTo(
      mainMenuLists,
      1,
      { x: "-=15px", autoAlpha: 0 },
      { x: "0", autoAlpha: 1 },
      0.2
    )
    .staggerFromTo(
      socialLists,
      0.5,
      { y: "+=3px", autoAlpha: 0 },
      { y: "0", autoAlpha: 1 },
      0.1
    )
    .reverse()
  return tl
}
const removeMenuAnimationOnDesktop = (nav, btn) => {
  const mainMenuLists = [...nav.querySelectorAll("ul:nth-of-type(1) li")]
  const socialLists = [...nav.querySelectorAll("ul:nth-of-type(2) li")]
  const upLine = btn.querySelector("span:nth-of-type(1)")
  const centerLine = btn.querySelector("span:nth-of-type(2)")
  const downLine = btn.querySelector("span:nth-of-type(3)")
  gsap.set(
    [nav, ...mainMenuLists, ...socialLists, upLine, centerLine, downLine],
    { clearProps: "all" }
  )
  return undefined
}
const Header = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const menuBtn = useRef(null)
  const tl = useRef()

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }
  const handleResize = () => {
    setWindowSize(window.innerWidth)
  }
  const resetNav = () => {
    setTimeout(() => tl.current.time(0), 1000)
  }
  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])
  useEffect(() => {
    if (tl.current) {
      tl.current.reversed(!isOpen)
    }
  }, [isOpen])
  useEffect(() => {
    const nav = menuRef.current
    const btn = menuBtn.current
    const desktopWidth = theme.desktopStartsWidth
    if (windowSize >= desktopWidth && tl.current) {
      tl.current = removeMenuAnimationOnDesktop(nav, btn)
    }
    if (windowSize < desktopWidth && !tl.current) {
      tl.current = menuAnimation(tl.current, nav, btn)
    }
  }, [windowSize])

  useEffect(() => {
    return globalHistory.listen(({ action, location }) => {
      const { pathname, state } = location

      if (action === "PUSH" && pathname !== state.prevPage && tl.current) {
        resetNav()
      }
    })
  }, [])
  return (
    <HeaderComponent>
      <HeaderWrapper>
        <Logo>
          <AniLink path="/" hex="#333">
            <LogoImg />
          </AniLink>
        </Logo>
        <OpenMenuBtn ref={menuBtn} onClick={toggleOpen}>
          <span />
          <span />
          <span />
        </OpenMenuBtn>
        <Nav menuRef={menuRef} setIsOpen={setIsOpen} />
      </HeaderWrapper>
    </HeaderComponent>
  )
}

export default Header
