import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import SEO from "../components/seo.js"

// markup
const IndexPage = () => {
  return (
    <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
  )
}

export default IndexPage
