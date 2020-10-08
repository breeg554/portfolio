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
const StyledHeading = styled.h1`
  position: relative;
  color: ${({ fontColor }) => (fontColor ? fontColor : "#000")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "45px")};
  z-index: 1;
  ${({ theme }) => theme.mediaQ.medium} {
    font-size: 55px;
  }
  ${({ theme }) => theme.mediaQ.large} {
    font-size: 65px;
  }
`
const Heading = ({ children, color, fontSize }) => {
  return (
    <Wrapper>
      <StyledHeading fontColor={color}>{children}</StyledHeading>
    </Wrapper>
  )
}

export default Heading
