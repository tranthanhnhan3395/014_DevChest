import React, { useContext } from "react"
import {
  Box,
  Button,
  Header,
  Menu,
  Nav,
  ResponsiveContext,
  Text,
} from "grommet"
import { Hpe } from "grommet-icons"
import { Link } from "gatsby"

const items = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Prototypes", href: "/prototypes" },
]

export const PageHeader = () => {
  const size = useContext(ResponsiveContext)
  return (
    <Header fill="horizontal" pad="medium">
      <Button plain>
        <Box direction="row" align="center" gap="medium">
          <Hpe color="brand" />
          <Box direction="row" gap="xsmall">
            <Text weight="bold">HPE</Text>
            <Text>App Name</Text>
          </Box>
        </Box>
      </Button>
      {size !== "small" ? (
        <Nav direction="row">
          {items.map(item => (
            <Link to={item.href}>
              <Button label={item.label} key={item.label} />
            </Link>
          ))}
        </Nav>
      ) : (
        <Menu label="Menu" items={items} />
      )}
    </Header>
  )
}
