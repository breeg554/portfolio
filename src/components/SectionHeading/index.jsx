import React from "react"
import styled from "styled-components"
const StyledHeading = styled.h2`
  color: ${({ fontColor }) => (fontColor ? fontColor : "#000")};
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "45px")};
`
const Heading = ({ children, color, fontSize }) => {
  return <StyledHeading fontColor={color}>{children}</StyledHeading>
}

export default Heading
