import React from "react"
import Head from "../components/head"

import Layout from "../components/layout"
import { Link } from "gatsby"

const NotFoundPage = () => (
  <Layout>
    <Head title="404" />
    <h1>PAGE NOT FOUND</h1>
    <Link to="/">Home</Link>
  </Layout>
)

export default NotFoundPage
