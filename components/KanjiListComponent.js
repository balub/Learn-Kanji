import React from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";

import KanjiListItem from "./KanjiListItem";

function KanjiListComponent() {
  return (
    <Wrap p={5} spacing="20px" justify="start">
      <WrapItem m={2}>
        <KanjiListItem kanji={"使用中"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"動物"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"両手"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"兄弟"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"肉や"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"自動車"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"自動車"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"自動車"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"自動車"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"自動車"} />
      </WrapItem>
      <WrapItem>
        <KanjiListItem kanji={"自動車"} />
      </WrapItem>
    </Wrap>
  );
}

export default KanjiListComponent;
