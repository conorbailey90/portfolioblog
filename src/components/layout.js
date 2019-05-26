import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import Header from "./header"
import NewNavBar from "./newNavBar"
import Footer from "./footer"
import { Helmet } from "react-helmet"
// Importing CSS
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
          integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
          crossorigin="anonymous"
        />
      </Helmet>

      <div className={layoutStyles.container}>
        <div className={layoutStyles.overlay} />
        <NewNavBar />
        <div className={layoutStyles.content}>{props.children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
