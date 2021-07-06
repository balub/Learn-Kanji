import React, { useContext } from "react";
import { Heading, VStack, HStack } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

import { KanjiContext } from "../utils/KanjiContext";

function SingleKanjiComponent() {
  const { kanjiList, selectedKanji } = useContext(KanjiContext);
  const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

  return (
    <VStack flex="1" spacing={10} align="center">
      <Heading pt="20" size="xl" color="#ffffff">
        Onyomi
      </Heading>
      <Heading
        fontSize={!isSmallerThan600 ? "164" : "100"}
        pt="90"
        color="#ffffff"
      >
        {kanjiList[selectedKanji].kanji}
      </Heading>
      {!isSmallerThan600 ? (
        <HStack spacing={40} pt="150">
          <Heading size="xl" color="#ffffff">
            {kanjiList[selectedKanji].hiragana}
          </Heading>
          <Heading size="xl" color="#ffffff">
            {kanjiList[selectedKanji].meaning}
          </Heading>
        </HStack>
      ) : (
        <VStack spacing={5} pt="50">
          <Heading size="lg" color="#ffffff">
            {kanjiList[selectedKanji].hiragana}
          </Heading>
          <Heading size="lg" color="#ffffff">
            {kanjiList[selectedKanji].meaning}
          </Heading>
        </VStack>
      )}
    </VStack>
  );
}

export default SingleKanjiComponent;
