import React, { useContext } from "react";
import { Grid, ResponsiveContext } from "grommet";
import { Card } from "./Card";

const CardContainer = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Grid
      align="start"
      columns={size !== "small" && { count: "fill", size: "medium" }}
      gap="medium"
    >
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export { CardContainer };
