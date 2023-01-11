import { Box, Flex } from "rebass";
import { Text } from "../../ui";
import Link from "next/link";
import { themeColor } from "../Theme/theming";
import Image from "next/image";

const Footer = () => {
  return (
    <Flex as="footer" bg="white" width="100%" py={6} px={7} sx={{ borderRadius: 10 }}>
      <Flex alignItems="center" justifyContent="space-between" flex={1}>
        <Flex sx={{ gap: 50 }}>
          <Box>
            <Text color="grey">Travaillez avec moi</Text>
            <Text mt={2} mb={1}>
              clementmuth@gmail.com
            </Text>
            <Link
              href="https://www.malt.fr/profile/clementmuth"
              style={{ background: themeColor.yellow, borderRadius: 5, paddingLeft: 5, paddingRight: 5 }}
            >
              Malt
            </Link>
          </Box>
          <Box>
            <Text color="grey">Suivez-moi</Text>
            <Flex mt={2} sx={{ gap: 20 }}>
              <Link
                href="https://github.com/Clement-Muth"
                style={{ background: themeColor.yellow, borderRadius: 5, paddingLeft: 5, paddingRight: 5 }}
              >
                Github
              </Link>
              <Link
                href="https://www.linkedin.com/in/clement-muth/"
                style={{ background: themeColor.yellow, borderRadius: 5, paddingLeft: 5, paddingRight: 5 }}
              >
                Linkedin
              </Link>
            </Flex>
          </Box>
        </Flex>
        <Flex>
          <Flex flex="0 0 auto" sx={{ "& > a": { display: "flex", "& > img": { borderRadius: 50 } } }}>
            <Link href="/">
              <Image
                src="/static/images/me.png"
                width={40}
                height={40}
                alt="clément muth profile picture"
                quality={100}
                style={{ objectFit: "cover" }}
              />
            </Link>
          </Flex>
          <Box ml={3}>
            <Text color="grey" mb={1}>
              Portfolio
            </Text>
            <Link
              href="https://github.com/Clement-Muth/portfolio"
              target="_blank"
              style={{ background: themeColor.yellow, borderRadius: 5, paddingLeft: 5, paddingRight: 5 }}
            >
              Repository
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Footer;
