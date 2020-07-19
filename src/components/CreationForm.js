import React, { useState, useContext } from "react"
import {
  Layer,
  Box,
  Button,
  FormField,
  Heading,
  Select,
  TextArea,
  TextInput,
  ResponsiveContext,
} from "grommet"
import { Formik } from "formik"

const CreationForm = ({ handleCreationFormOutsideClick }) => {
  const size = useContext(ResponsiveContext)
  return (
    <Layer onClickOutside={handleCreationFormOutsideClick} responsive={false}>
      <Box width={size !== "small" ? "medium" : "small"} margin="large">
        <Heading>New creation</Heading>
        <Formik>
          <form>
            <FormField label="Creation name">
              <TextInput name="creation-name" />
            </FormField>
            <FormField label="Brief description">
              <TextArea name="brief-description" />
            </FormField>
            <FormField label="Creation type">
              <Select name="creation-type" options={["prototype", "project"]} />
            </FormField>
            <FormField label="Domain">
              <Select
                name="domain"
                options={[
                  "web development",
                  "mobile development",
                  "embedded system",
                ]}
              />
            </FormField>
            <FormField label="Technology">
              <TextInput name="technology" />
            </FormField>
            <FormField label="Open source resource">
              <TextInput name="open-spource-resource" />
            </FormField>
            <Box
              tag="footer"
              margin={{ top: "medium" }}
              direction="row"
              justify="between"
            >
              <Button label="Cancel" />
              <Button type="submit" primary label="Create" />
            </Box>
          </form>
        </Formik>
      </Box>
    </Layer>
  )
}

export { CreationForm }
