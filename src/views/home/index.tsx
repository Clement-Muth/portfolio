import { Flex } from "rebass";
import { Bio } from "./bio";
import { Head } from "./head";
import { Skills } from "./skills";

export const Home = () => {
  return (
    <>
      <Head />
      <Flex mt={8} sx={{ gap: 15 }}>
        <Skills />
        <Bio />
      </Flex>
    </>
  );
};
