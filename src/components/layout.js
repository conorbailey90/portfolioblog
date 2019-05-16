import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"
// Importing CSS
import layoutStyles from "./layout.module.scss"

const Layout = props => {
  return (
    <div>
      <div className={layoutStyles.container}>
        <Header />
        <Navbar />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
