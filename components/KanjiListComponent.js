import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import KanjiListItem from "./KanjiListItem";

function KanjiListComponent({ data }) {
  return (
    <Wrap p={5} spacing="20px" justify="start" overflowY="scroll" maxH="100vh">
      {data &&
        data.map((item, index) => {
          return (
            <WrapItem m={20} key={index}>
              <KanjiListItem kanji={item.kanji} index={index} />
            </WrapItem>
          );
        })}
    </Wrap>
  );
}

export default KanjiListComponent;
