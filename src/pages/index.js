import React from "react"
import { Link } from "gatsby"
import Head from "../components/head"
import Layout from "../components/layout"
import "../styles/index.scss"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <div className="logo">
        <h1>Conor Bailey</h1>
        <h5>Developer, Programmer</h5>
      </div>

      <div className="social-media">
        <a href="https://www.facebook.com/conor.bailey1" target="_blank">
          <i className="fab fa-facebook" />
        </a>
        <a href="https://twitter.com/conorbailey" target="_blank">
          <i className="fab fa-twitter" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCcNEvbajb34cXufYddZ57og"
          target="_blank"
        >
          <i className="fab fa-youtube" />
        </a>
        <a href="https://www.instagram.com/conorbeats/" target="_blank">
          <i className="fab fa-instagram" />
        </a>
        <a
          href="https://uk.linkedin.com/in/conor-bailey-0975819a"
          target="_blank"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a href="https://github.com/conorbailey90" target="_blank">
          <i className="fab fa-github" />
        </a>
      </div>
    </Layout>
  )
}

export default IndexPage
