import fs from "fs/promises";
import path from "path";

import styles from "./index.module.css";
import { Flex, Spacer, Center, Text, Divider, Box } from "@chakra-ui/react";

import SingleKanjiComponent from "../components/SingleKanjiComponent";
import KanjiListComponent from "../components/KanjiListComponent";

export default function Home(props) {
  const { kanjiList } = props;
  return (
    <div className={styles.container}>
      <Flex h="100vh">
        <Box w="60%">
          <SingleKanjiComponent />
        </Box>
        <Divider orientation="vertical" />
        <Box w="40%">
          <KanjiListComponent data={kanjiList} />
        </Box>
      </Flex>
    </div>
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
