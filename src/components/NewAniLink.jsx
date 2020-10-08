import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { globalHistory } from "@reach/router"
const NewAniLink = ({ path, hex = "#333", children }) => {
  return (
    <AniLink
      paintDrip
      to={path}
      hex={hex}
      state={{ prevPage: globalHistory.location.pathname }}
    >
      {children}
    </AniLink>
  )
}

export default NewAniLink
