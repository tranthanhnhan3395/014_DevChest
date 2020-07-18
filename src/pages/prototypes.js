import React from "react"
import { Grommet, Box, Heading } from "grommet"
import { hpe } from "grommet-theme-hpe"
import { Layout } from "../components/layout"
import { SearchBar } from "../components/SearchBar"
import { CardContainer } from "../components/CardContainer"

const Prototypes = () => {
  return (
    <Grommet theme={hpe}>
      <Layout main={<PrototypesMain />} searchbar={<SearchBar />}></Layout>
    </Grommet>
  )
}

const PrototypesMain = () => {
  return (
    <Box>
      <Box alignSelf="center" style={{ width: `1024px` }}>
        <Heading>Hey, this cool Prototypes page will be available soon</Heading>
        <CardContainer />
      </Box>
    </Box>
  )
}

export default Prototypes
