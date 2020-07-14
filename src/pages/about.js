import React from "react"
import { Grommet, Heading } from "grommet"
import { hpe } from "grommet-theme-hpe"
import { Layout } from "../components/layout"

const About = () => {
  return (
    <Grommet theme={hpe}>
      <Layout main={<AboutMain />}></Layout>
    </Grommet>
  )
}

const AboutMain = () => {
  return <Heading>Hey, this is the About page of Grommet app</Heading>
}

export default About
