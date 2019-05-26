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
              <Link>
                <i class="fas fa-globe" />
              </Link>
              <Link>
                <i className="fab fa-github" />
              </Link>
              <p>Music production website</p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default portfolioPage
