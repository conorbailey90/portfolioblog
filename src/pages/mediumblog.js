import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const mediumBlog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMediumPost {
        edges {
          node {
            title
            createdAt(formatString: "DD MMMM YYYY")
            uniqueSlug
          }
        }
      }
    }
  `)
  return (
    <div>
      <h1>Blog</h1>
      <ol>
        {data.allMediumPost.edges.map(edge => {
          return (
            <li>
              <a
                href={`https://medium.com/@conbailey90/${edge.node.uniqueSlug}`}
                target="_blank"
              >
                <h2>{edge.node.title}</h2>
                <p>{edge.node.createdAt}</p>
              </a>
            </li>
          )
        })}
      </ol>
    </div>
  )
}

export default mediumBlog



