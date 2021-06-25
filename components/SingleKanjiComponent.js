import React from "react";
import { Heading, VStack, HStack } from "@chakra-ui/react";

function SingleKanjiComponent() {
  return (
    <VStack flex="1" spacing={10} align="center">
      <Heading pt="20" size="xl">
        Onyomi
      </Heading>
      <Heading fontSize="164" pt="90">
        動物
      </Heading>
      <HStack spacing={40} pt="150">
        <Heading size="xl">どうぶつ</Heading>
        <Heading size="xl">Animal</Heading>
      </HStack>
    </VStack>
  );
}

export default SingleKanjiComponent;
