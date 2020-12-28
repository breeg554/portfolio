import React from "react"
import { Wrapper, StyledHeading } from "./style"
const Heading = ({ children, color, fontSize }) => {
  return (
    <Wrapper>
      <StyledHeading fontColor={color}>{children}</StyledHeading>
    </Wrapper>
  )
}

export default Heading
