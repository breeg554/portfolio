import React from "react"
import { Helmet } from "react-helmet"

const Seo = () => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta name="description" content="Portfolio Dawid Kielbasa breeg554 " />
        <title data-react-helmet="true">Dawid Kielbasa - portfolio</title>
      </Helmet>
    </>
  )
}

export default Seo
