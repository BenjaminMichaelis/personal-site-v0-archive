import * as React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import SEO from "../components/seo.js"

// markup
const AboutPage = () => {
  return (
    <Layout>
    <SEO title="Home" />
    <h1>I'm Ben</h1>
    <p>This is a little about myself</p>
  </Layout>
  )
}

export default AboutPage
