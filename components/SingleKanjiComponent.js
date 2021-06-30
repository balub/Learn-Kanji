import React, { useContext } from "react";
import { Heading, VStack, HStack } from "@chakra-ui/react";

import { KanjiContext } from "../utils/KanjiContext";

function SingleKanjiComponent() {
  const { kanjiList, selectedKanji } = useContext(KanjiContext);

  return (
    <VStack flex="1" spacing={10} align="center">
      <Heading pt="20" size="xl">
        Onyomi
      </Heading>
      <Heading fontSize="164" pt="90">
        {kanjiList[selectedKanji].kanji}
      </Heading>
      <HStack spacing={40} pt="150">
        <Heading size="xl">{kanjiList[selectedKanji].hiragana}</Heading>
        <Heading size="xl">{kanjiList[selectedKanji].meaning}</Heading>
      </HStack>
    </VStack>
  );
}

export default SingleKanjiComponent;
