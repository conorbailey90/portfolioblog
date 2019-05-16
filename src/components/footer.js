import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <div>
      <h5>© 2019 {data.site.siteMetadata.author}</h5>
    </div>
  )
}

export default Footer
