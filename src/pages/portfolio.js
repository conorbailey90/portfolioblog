import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/portfolio.scss"

const portfolioPage = () => {
  return (
    <div>
      <Layout>
        <h1>Portfolio</h1>
        <div className="wrapper">
          <div className="project">
            <img src={require("../images/conorsite.png")} alt="conor" />
            <div className="content-overlay">
              <a
                href="https://conorbailey90.github.io/conor_portfolio/"
                target="_blank"
              >
                <i class="fas fa-globe" />
              </a>
              <a
                href="https://github.com/conorbailey90/conor_portfolio"
                target="_blank"
              >
                <i className="fab fa-github" />
              </a>
              <p>Music production website</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default portfolioPage
