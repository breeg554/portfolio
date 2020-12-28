import React from "react"
import { globalHistory } from "@reach/router"
import PropTypes from "prop-types"
import { Link } from "./style"

const NewAniLink = ({ path, hex, btnBackgroundColor, color, children }) => {
  return (
    <Link
      paintDrip
      to={path}
      hex={hex}
      state={{ prevPage: globalHistory.location.pathname }}
      style={{ bgcColor: btnBackgroundColor, fontColor: color }}
    >
      {children}
    </Link>
  )
}

export default NewAniLink

NewAniLink.defaultProps = {
  hex: "#333",
  btnBackgroundColor: "transparent",
  color: "#fff",
}
NewAniLink.propTypes = {
  path: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  hex: PropTypes.string,
  btnBackgroundColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
