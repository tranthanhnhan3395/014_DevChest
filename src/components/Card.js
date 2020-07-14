import React from "react";
import { Box, Button, Image, Heading, Text } from "grommet";

import { Favorite } from "grommet-icons";

const Card = ({ ...rest }) => {
  return (
    <Box round="xxsmall" elevation="small" overflow="hidden" {...rest}>
      <Box height="small">
        <Image src="" fit="cover" />
      </Box>
      <CardHeader />
      <CardFooter />
    </Box>
  );
};

const CardHeader = () => {
  return (
    <Box pad={{ horizontal: "small" }}>
      <Box
        margin={{ top: "small" }}
        direction="row"
        align="center"
        justify="between"
      >
        <Box>
          <Heading level="3" margin="none">
            Card name
          </Heading>
          <Text color="dark-5" size="small">
            Card Type &#8226; Card other info
          </Text>
        </Box>
      </Box>
      <Text size="small" color="dark-5" margin={{ vertical: "small" }} truncate>
        Card Description
      </Text>
    </Box>
  );
};

const CardFooter = () => {
  return (
    <Box
      tag="footer"
      direction="row"
      align="center"
      justify="between"
      pad={{ left: "small", vertical: "small" }}
    >
      <Button a11yTitle={`Reviews for restaurant`} onClick={() => {}}>
        <Box round="small">
          <Text color="brand" size="small">
            <strong>ACTION</strong>
          </Text>
        </Box>
      </Button>
      <Button
        margin={{ right: "small" }}
        a11yTitle={`Favorite restaurant name`}
      >
        <Box>
          <Favorite />
        </Box>
      </Button>
    </Box>
  );
};

export { Card };
