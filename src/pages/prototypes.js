import React from "react"
import { Grommet, Heading } from "grommet"
import { hpe } from "grommet-theme-hpe"
import { Layout } from "../components/layout"
import { CardContainer } from "../components/CardContainer"

const Prototypes = () => {
  return (
    <Grommet theme={hpe}>
      <Layout main={<PrototypesMain />}></Layout>
    </Grommet>
  )
}

const PrototypesMain = () => {
  return (
    <React.Fragment>
      <Heading>Hey, this cool Prototypes page will be available soon</Heading>
      <CardContainer />
    </React.Fragment>
  )
}

export default Prototypes
