import React, { useState, useContext } from "react"
import styled from "styled-components"
import {
  Box,
  TextInput,
  Select,
  Text,
  Anchor,
  ResponsiveContext,
} from "grommet"
import { Search, Add, Down } from "grommet-icons"
import { CreationForm } from "../components/CreationForm"

const SearchBarBox = styled(Box)`
  background: #8360c3; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #2ebf91,
    #8360c3
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

const SearchBarTextInput = styled(TextInput)`
  color: white;

  ::placeholder {
    color: white;
    opacity: 0.75;
  }
`

const SearchBarSelect = styled(Select)`
  color: white;
`

const SearchBarAnchor = styled(Anchor)`
  font-weight: normal;
`

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState()
  const [searchType, setSearchType] = useState("creations")
  const [showCreationForm, setShowCreationForm] = useState(false)

  const handleUpdateSearchTerm = event => {
    setSearchTerm(event.target.value)
    console.log(`search term is updated to: ${searchTerm}`)
  }

  const handleUpdateSearchType = ({ option }) => {
    setSearchType(option)
    console.log(`search type is updated to: ${searchType}`)
  }

  const handleAddCreationAnchorClick = event => {
    console.log(`handleAddCreationAnchorClick is triggered`)
    event.preventDefault()
    setShowCreationForm(true)
  }

  const handleCreationFormOutsideClick = event => {
    console.log(`handleCreationFormOutsideClick is triggered`)
    setShowCreationForm(false)
  }

  return (
    <SearchBarBox
      fill="horizontal"
      height="192px"
      align="center"
      justify="center"
    >
      <SearchBarInput
        handleUpdateSearchTerm={handleUpdateSearchTerm}
        searchType={searchType}
        handleUpdateSearchType={handleUpdateSearchType}
      />
      <SearchBarAnchor
        href="#"
        color="white"
        label="Add a new creation"
        icon={<Add size="16px" />}
        reverse
        size="medium"
        margin="xsmall"
        onClick={handleAddCreationAnchorClick}
      />
      {showCreationForm ? (
        <CreationForm
          handleCreationFormOutsideClick={handleCreationFormOutsideClick}
        />
      ) : null}
    </SearchBarBox>
  )
}

const SearchBarInput = ({
  handleUpdateSearchTerm,
  searchType,
  handleUpdateSearchType,
}) => {
  const size = useContext(ResponsiveContext)
  return (
    <Box
      round="xsmall"
      border="white"
      direction="row"
      align="center"
      width={size !== "small" ? "large" : "280px"}
      pad={{ horizontal: "small", vertical: "none" }}
      margin={{ horizontal: "medium", vertical: "medium" }}
    >
      <Box width="small" onMouseDown={e => e.preventDefault()}>
        <SearchBarSelect
          plain
          options={["creations", "prototypes", "projects"]}
          icon={<Down color="white" size="16px" />}
          value={searchType}
          onChange={handleUpdateSearchType}
        />
      </Box>
      <Text color="white">|</Text>
      <SearchBarTextInput
        plain
        placeholder="Search for prototypes or projects"
        onChange={handleUpdateSearchTerm}
      />
      <Search color="white" />
    </Box>
  )
}

export { SearchBar }
