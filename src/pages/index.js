import React from "react"
import { Grommet, Heading, Button, TextInput } from "grommet"
import { hpe } from "grommet-theme-hpe"
import { Layout } from "../components/layout"

const Index = () => {
  return (
    <Grommet theme={hpe}>
      <Layout main={<IndexMain />}></Layout>
    </Grommet>
  )
}

const IndexMain = () => {
  return (
    <React.Fragment>
      <Heading>Hello, this is a grommet app</Heading>
      <TextInput placeholder="You can type something here"></TextInput>
      <Button primary label="this is also a button"></Button>
    </React.Fragment>
  )
}

export default Index
