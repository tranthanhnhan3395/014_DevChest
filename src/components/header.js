import React, { useContext } from "react"
import {
  Box,
  Button,
  Header,
  Heading,
  Menu,
  Nav,
  ResponsiveContext,
  Text,
} from "grommet"
import { Link } from "gatsby"

const items = [
  { label: "Home", href: "/" },
  { label: "Prototypes", href: "/prototypes" },
]

export const PageHeader = () => {
  const size = useContext(ResponsiveContext)
  return (
    <Header
      fill="horizontal"
      pad={
        size !== "large" ? "medium" : { vertical: "24px", horizontal: "96px" }
      }
    >
      <Heading size="small" margin="none">
        DevChest
      </Heading>

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
