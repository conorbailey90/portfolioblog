import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import "../styles/about.scss"

const aboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div>
        <h1>About Me</h1>
        <p>
          Hi, My name is Conor Bailey and i'm a web developer / programmer from
          Essex, UK. Welcome to my website! Here you will find my porfolio
          displaying all of my latest projects as well as my blog which will
          cover a range of topics such as web development, programming,
          electronic music production and drums.
        </p>
        <p>
          I have developed a large passion for web development and programming
          in general. Thus far I have studied and programmed using the following
          technologies: HTML, CSS, SASS, JavaScript, React, Gatsby, Node.JS,
          Python and Git. I'm constantly looking to build on my porfolio so
          please get in touch if you require help with a project.
        </p>
        <p>
          Once again thank you for checking out my website and please do not
          hesitate to contact me if you have any questions. My CV is available
          on request.
        </p>

        <p>Conor</p>
      </div>
    </Layout>
  )
}

export default aboutPage
