import React, { useContext } from "react"
import {
  Grommet,
  Box,
  Heading,
  Button,
  Text,
  Paragraph,
  ResponsiveContext,
} from "grommet"
import { hpe } from "grommet-theme-hpe"
import { Link } from "gatsby"
import { Layout } from "../components/layout"
import Image from "../components/image"

const Index = () => {
  return (
    <Grommet theme={hpe} full>
      <Layout main={<IndexMain />}></Layout>
    </Grommet>
  )
}

const IndexMain = () => {
  const size = useContext(ResponsiveContext)
  return (
    <Box alignSelf="center" style={{ width: `1024px` }}>
      <Box
        direction={size !== "small" ? "row" : "column"}
        justify="between"
        align="center"
      >
        <Heading>Hey, this is DevChest.</Heading>
        <Link to="/prototypes">
          <Button
            primary
            size="large"
            label="Get started"
            style={{ padding: `6px 64px` }}
          ></Button>
        </Link>
      </Box>
      <Box
        width={size !== "small" ? "320px" : "240px"}
        height={size !== "small" ? "320px" : "240px"}
        margin="medium"
        alignSelf="center"
      >
        <Image />
      </Box>
      <Text size="xlarge" alignSelf={size !== "small" ? "start" : "center"}>
        One place to keep track of all your awesome prototypes and personal
        projects.
      </Text>
      <Paragraph
        fill="true"
        size="large"
        alignSelf={size !== "small" ? "start" : "center"}
      >
        Sometimes, as a hardworking and creative developer, you built many
        awesome prototypes and projects to explore things.
        <br />
        However, as life go on, you might forgot what you have built and how
        cool they are.
        <br />
        That is why DevChest is here to help you keep track of all your
        creations and revisit them when needed.
      </Paragraph>
    </Box>
  )
}

export default Index
