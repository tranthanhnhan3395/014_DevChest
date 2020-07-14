import React, { useContext } from "react"
import { Box, Main, ResponsiveContext } from "grommet"
import { PageHeader } from "./Header"
import { PageFooter } from "./Footer"

export const Layout = ({ main }) => {
  return (
    <AppContainer>
      <Box flex overflow="auto">
        <Box height={{ min: "100%" }} gap="none">
          <PageHeader></PageHeader>
          <Main
            // height is for demonstration of scroll
            fill={undefined}
            flex={false}
            pad={{
              top: "none",
              bottom: "small",
              left: "large",
              right: "large",
            }}
            round="xsmall"
          >
            {main}
          </Main>
          <PageFooter></PageFooter>
        </Box>
      </Box>
    </AppContainer>
  )
}

const AppContainer = ({ ...rest }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box
      direction={size === "small" ? "column-reverse" : "row"}
      gap={size !== "small" ? "small" : undefined}
      {...rest}
    />
  )
}
