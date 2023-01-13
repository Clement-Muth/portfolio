import { themeColor } from "library/components/common/Theme/theming";
import { Text } from "library/components/ui";
import Link from "next/link";
import { Box, Flex } from "rebass";

export const Head = () => {
  return (
    <Flex as="section" flexDirection="column" mt={7} lineHeight={1.5}>
      <Text as="h1" textAlign="center" sx={{ "& > span": { fontSize: 6 } }}>
        <Text as="span" bg="yellow" px={4} py={3} sx={{ borderRadius: 10 }}>
          Hey, Je suis Clément
        </Text>
        <br />
        <Text as="span">développeur web et mobile</Text>
      </Text>
      <Text as="h2" fontSize={3} textAlign="center" mt={5} fontWeight="400">
        Je suis un développeur web avec +7 ans d&apos;expérience et 3 ans d&apos;entrepreneuriat. J&apos;ai réalisé de
        nombreuses applications web pour ma famille et ai créé ma propre agence de communication spécialisée dans le
        développement éco-responsables, orientée performance et SEO (
        <Link
          href="https://azinove.com/fr"
          target="_blank"
          style={{ background: themeColor.yellow, borderRadius: 5, paddingLeft: 5, paddingRight: 5 }}
        >
          Azinove
        </Link>
        ).
      </Text>
      <Flex
        p={3}
        bg="white"
        mt={7}
        width="100%"
        justifyContent="space-around"
        alignItems="center"
        sx={{ borderRadius: 10 }}
      >
        <Box textAlign="center">
          <Text fontSize={5} fontWeight="700">
            3
          </Text>
          <Text fontSize="12px" fontWeight={400}>
            Missions effectuées
          </Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize={5} fontWeight="700">
            100%
          </Text>
          <Text fontSize="12px" fontWeight={400}>
            Missions achevées
          </Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize={5} fontWeight="700">
            7 ans et +
          </Text>
          <Text fontSize="12px" fontWeight={400}>
            Experience
          </Text>
        </Box>
        <Box textAlign="center">
          <Text fontSize={5} fontWeight="700">
            1h
          </Text>
          <Text fontSize="12px" fontWeight={400}>
            Temps de réponse
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};
