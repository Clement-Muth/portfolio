import { Relative } from "library/components/common/Positions/Relative";
import { themeColor } from "library/components/common/Theme/theming";
import { Text } from "library/components/ui";
import { Box, Card, Flex } from "rebass";
import { useRouter } from "next/router";

export const HireMe = () => {
  const router = useRouter();

  return (
    <Box as="section" mt={8} width="100%">
      <Card
        as="article"
        display="flex"
        flexDirection="column"
        alignItems="center"
        py={6}
        px={7}
        bg="white"
        sx={{ borderRadius: 10 }}
      >
        <Text as="h2" textAlign="center" fontSize={6} fontWeight="500">
          Vous voulez <br />
          Travailler avec moi ?
        </Text>
        <Relative
          display="flex"
          mt={4}
          bg={themeColor.yellow}
          onClick={() => router.push("/contact")}
          alignItems="center"
          p={1}
          pl={4}
          sx={{ borderRadius: 50, cursor: "pointer" }}
        >
          <Text mr={6} fontWeight="700">
            Contactez moi
          </Text>
          <Flex
            bg="white"
            justifyContent="center"
            alignItems="center"
            p={2}
            width={50}
            height={50}
            sx={{ borderRadius: 50 }}
          >
            <Flex
              bg="black"
              justifyContent="center"
              alignItems="center"
              width={15}
              height={15}
              sx={{ borderRadius: 50 }}
            >
              <svg viewBox="0 0 24 24" fill="white" width="10px" height="10px">
                <path d="m12 4-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" strokeWidth="5px" />
              </svg>
            </Flex>
          </Flex>
        </Relative>
      </Card>
    </Box>
  );
};
