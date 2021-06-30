import React, { useContext } from "react";
import { Box, Heading } from "@chakra-ui/react";

import { KanjiContext } from "../utils/KanjiContext";

function KanjiListItem(props) {
  const { setSelectedKanji } = useContext(KanjiContext);
  const { kanji, index } = props;

  const setKanji = () => {
    setSelectedKanji(index);
  };

  return (
    <Box textAlign="center" onClick={setKanji}>
      <Heading as="h1" size="xl" isTruncated>
        {kanji}
      </Heading>
    </Box>
  );
}

export default KanjiListItem;
