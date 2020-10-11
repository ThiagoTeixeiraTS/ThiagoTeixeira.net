import React from "react"
import { Link } from "gatsby";

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Meu Site</h1>
    <p>   
     Usando Link  <Link to="/about">About</Link>
    </p>
    <p>   
     Usando href  <a href="/about">About</a>
    </p>
    
  </Layout>
)

export default IndexPage
