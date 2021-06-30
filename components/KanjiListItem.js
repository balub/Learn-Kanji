import React, { useContext } from "react";
import { Box, Heading } from "@chakra-ui/react";

import { KanjiContext } from "../utils/KanjiContext";

function KanjiListItem(props) {
  const { selectedKanji, setSelectedKanji } = useContext(KanjiContext);
  const { kanji, index } = props;

  const setKanji = () => {
    setSelectedKanji(index);
  };

  return (
    <Box
      textAlign="center"
      onClick={setKanji}
      borderBottom={selectedKanji === index ? "#BC050C solid 3px" : ""}
    >
      <Heading as="h1" size="xl" color="#ffffff" isTruncated>
        {kanji}
      </Heading>
    </Box>
  );
}

export default KanjiListItem;
