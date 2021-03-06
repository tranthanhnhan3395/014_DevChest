import React, { useContext } from "react"
import { Box, Button, Footer, ResponsiveContext, Text } from "grommet"

export const PageFooter = () => {
  const size = useContext(ResponsiveContext)

  return (
    <Footer
      direction={size !== "small" ? "row" : "column"}
      align={size !== "small" ? "center" : undefined}
      pad={
        size !== "large" ? "medium" : { vertical: "24px", horizontal: "96px" }
      }
    >
      <Box
        direction={size !== "small" ? "row" : "column"}
        align={size !== "small" ? "center" : undefined}
        gap="xsmall"
      >
        <Text size="small">&copy; Design and built by Nhan Thanh Tran</Text>
      </Box>
    </Footer>
  )
}
