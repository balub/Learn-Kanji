import React from "react";
import { Box, Heading } from "@chakra-ui/react";

function KanjiListItem(props) {
  const { kanji } = props;
  return (
    <Box textAlign="center">
      <Heading as="h1" size="xl" isTruncated>
        {kanji}
      </Heading>
    </Box>
  );
}

export default KanjiListItem;
