import AniLink from "gatsby-plugin-transition-link/AniLink"
import styled from "styled-components"
export const Link = styled(AniLink)`
  font-size: 20px;
  background-color: ${({ style }) => style.bgcColor};
  color: ${({ style }) => style.fontColor};
  border-radius: 5px;
`
