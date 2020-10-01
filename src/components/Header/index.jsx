import React, { useState } from "react"
import styled from "styled-components"
import Nav from "../Navigation"
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
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray};
  outline: none;
`
const Logo = styled.p`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 18px;
  & span {
    color: #000;
    font-size: 14px;
  }
`

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <HeaderComponent>
      <Logo>
        david
        <span>.dev</span>
      </Logo>
      <OpenMenuBtn onClick={() => setIsOpen(!isOpen)}>
        <IoIosMenu />
      </OpenMenuBtn>
      <Nav setIsOpen={setIsOpen} isOpen={isOpen} />
    </HeaderComponent>
  )
}

export default Header
