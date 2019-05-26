import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import "../styles/contact.scss"

const contactPage = () => {
  return (
    <Layout>
      <Head title="Contact Me" />
      <div>
        <h1>Contact Me</h1>
        <p>
          If you would like more information then please do not hestitate to
          contact me.
        </p>

        <div className="email">
          <span>E-mail:</span> conbailey90@gmail.com
        </div>
        <div className="mobile">
          <span>Mobile:</span> 07540809644
        </div>
        <div className />
      </div>
    </Layout>
  )
}

export default contactPage
