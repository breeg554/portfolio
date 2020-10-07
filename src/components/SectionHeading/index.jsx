import React from "react"
import styled from "styled-components"
const Wrapper = styled.div`
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: -15px;
    left: -20px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.orange};
    z-index: 0;
  }
`
const StyledHeading = styled.h2`
  position: relative;
  color: ${({ fontColor }) => (fontColor ? fontColor : "#000")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "45px")};
  z-index: 1;
`
const Heading = ({ children, color, fontSize }) => {
  return (
    <Wrapper>
      <StyledHeading fontColor={color}>{children}</StyledHeading>
    </Wrapper>
  )
}

export default Heading
