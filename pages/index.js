import styles from "./index.module.css";
import { Flex, Spacer, Center, Text, Divider, Box } from "@chakra-ui/react";

import SingleKanjiComponent from "../components/SingleKanjiComponent";
import KanjiListComponent from "../components/KanjiListComponent";

export default function Home() {
  return (
    <div className={styles.container}>
      <Flex h="100vh">
        <Box w="60%">
          <SingleKanjiComponent />
        </Box>
        <Divider orientation="vertical" />
        <Box w="40%">
          <KanjiListComponent />
        </Box>
      </Flex>
    </div>
  );
}
