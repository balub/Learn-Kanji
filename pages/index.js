import fs from "fs/promises";
import path from "path";

import React, { Provider, useState } from "react";
import styles from "./index.module.css";
import { Flex, Spacer, Center, Text, Divider, Box } from "@chakra-ui/react";

import SingleKanjiComponent from "../components/SingleKanjiComponent";
import KanjiListComponent from "../components/KanjiListComponent";

import { KanjiContext } from "../utils/KanjiContext";

export default function Home(props) {
  const { kanjiList } = props;
  const [selectedKanji, setSelectedKanji] = useState(0);

  return (
    <KanjiContext.Provider
      value={{ selectedKanji, setSelectedKanji, kanjiList }}
    >
      <div className={styles.container}>
        <Flex>
          <Box className={styles.singleContainer}>
            <SingleKanjiComponent />
          </Box>
          <Divider orientation="vertical" />
          <Box className={styles.listContainer}>
            <KanjiListComponent data={kanjiList} />
          </Box>
        </Flex>
      </div>
    </KanjiContext.Provider>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "utils", "N5_Kanji.json");
  const jsonFile = await fs.readFile(filePath);
  const jsonData = JSON.parse(jsonFile);

  return {
    props: {
      kanjiList: jsonData,
    },
  };
}
