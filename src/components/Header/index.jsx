import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import Nav from "../Navigation"
import LogoImg from "../../images/Logo3.svg"
import gsap from "gsap"
import { IoIosMenu } from "react-icons/io"

const HeaderComponent = styled.header`
  position: absolute;
  z-index: 10;
  width: 100%;
  padding: 0.5em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`
const Logo = styled.div`
  width: 70px;
  display: flex;
  align-items: center;
  svg {
    width: 100%;
    height: 100%;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const menuBtn = useRef(null)
  const tl = useRef()

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    const nav = menuRef.current
    const lists = [...nav.querySelectorAll("li")]
    const btn = menuBtn.current
    const upLine = btn.querySelector("span:nth-of-type(1)")
    const centerLine = btn.querySelector("span:nth-of-type(2)")
    const downLine = btn.querySelector("span:nth-of-type(3)")
    console.log(upLine)
    tl.current = gsap
      .timeline()
      .to([upLine, downLine], { y: "-50%", duration: 0.3 })
      .to(upLine, { duration: 0.1, rotation: 45 }, 0.2)
      .to(downLine, { duration: 0.1, rotation: -45 }, 0.2)
      .to(centerLine, { duration: 0.1, autoAlpha: 0 }, 0.2)
      .to(nav, { x: "0", duration: 0.5, autoAlpha: 1 })
      .staggerFromTo(
        lists,
        1,
        { x: "-=15px", autoAlpha: 0 },
        { x: "0", autoAlpha: 1 },
        0.2
      )
      .reverse()
  }, [])
  useEffect(() => {
    tl.current.reversed(!isOpen)
  }, [isOpen])
  return (
    <HeaderComponent>
      <Logo>
        <LogoImg />
      </Logo>
      <OpenMenuBtn ref={menuBtn} onClick={toggleOpen}>
        <span />
        <span />
        <span />
      </OpenMenuBtn>
      <Nav menuRef={menuRef} setIsOpen={setIsOpen} />
    </HeaderComponent>
  )
}

export default Header
