import React from "react"
import Layout from "../components/layout"
import { Link, graphql, useStaticQuery } from "gatsby"
import Head from "../components/head"
import "../styles/blog.scss"

const blogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMediumPost(sort: { fields: [createdAt], order: DESC }) {
        edges {
          node {
            id
            title
            createdAt(formatString: "DD MMMM YYYY")
            uniqueSlug
            virtuals {
              subtitle
              previewImage {
                imageId
              }
            }
            author {
              name
            }
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <Head title="Blog" />
      <div>
        <h1>Blog</h1>
        <ol>
          {data.allMediumPost.edges.map(edge => {
            return (
              <li>
                <a
                  href={`https://medium.com/@conbailey90/${
                    edge.node.uniqueSlug
                  }`}
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
    </Layout>
  )
}

export default blogPage
