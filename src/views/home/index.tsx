import { Box, Button, Flex } from "rebass";
import { Bio } from "./bio";
import { Head } from "./head";
import { Skills } from "./skills";
import { Azinove } from "./azinove";
import { useRouter } from "next/router";
import { Faq } from "./faq";
import { HireMe } from "./hireme";

export const Home = () => {
  const router = useRouter();

  return (
    <>
      <Head />
      <Flex as="section" mt={8} sx={{ gap: 15 }}>
        <Skills />
        <Bio />
      </Flex>
      <Box as="section" mt="15px" sx={{ gap: 15 }}>
        <Azinove />
        <Flex mt="15px" sx={{ gap: 15 }}>
          <Button
            onClick={() => router.push("/works")}
            width={650}
            color="black"
            fontWeight={500}
            bg="white"
            sx={{ borderRadius: 50, boxShadow: "unset" }}
          >
            Contact me
          </Button>
          <Button
            flex={1}
            bg="black"
            fontWeight={500}
            onClick={() => router.push("/works")}
            sx={{ borderRadius: 50, boxShadow: "unset" }}
          >
            See All ~ My projects
          </Button>
        </Flex>
      </Box>
      <HireMe />
      <Faq />
    </>
  );
};
