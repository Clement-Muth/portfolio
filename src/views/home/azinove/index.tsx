import { Text } from "library/components/ui";
import Image from "next/image";
import Link from "next/link";
import { Box, Card, Flex } from "rebass";

export const Azinove = () => {
  return (
    <Flex sx={{ gap: 15 }}>
      <Card as="article" p="10px" bg="white" width="650px" sx={{ borderRadius: 10 }}>
        <Flex flex={1} justifyContent="space-between" alignItems="center" p={3}>
          <Box>
            <Text as="h3" fontSize={4}>
              Azinove
            </Text>
            <Text fontSize={2} mt={3}>
              Agence web, création de site web et référencement
            </Text>
          </Box>
          <Box
            sx={{
              boxShadow: "1px 2px 11px rgb(200 200 200)",
              borderRadius: 50,
              "@media (max-width: 1150px)": {
                "& > a > .img-container": {
                  width: 50,
                  height: 50,
                  p: "12px"
                }
              }
            }}
          >
            <Link href="https://azinove.com" target="_blank">
              <Flex
                className="img-container"
                width={62}
                height={62}
                overflow="hidden"
                p="18px"
                bg="white"
                sx={{ borderRadius: 50 }}
              >
                <Image src="/static/svg/arrow.svg" alt="" width={26} height={26} />
              </Flex>
            </Link>
          </Box>
        </Flex>
        <Flex
          bg="#f5f5f5"
          px={6}
          py={5}
          maxHeight="400px"
          sx={{ borderRadius: 10, "& > img": { borderRadius: 10, boxShadow: "0px 2px 11px grey" } }}
        >
          <Image src="/static/images/works/azinove.png" alt="works azinove illustration" width={534} height={276} />
        </Flex>
      </Card>
      <Card as="article" p="10px" bg="white" flex={1} sx={{ borderRadius: 10 }}>
        <Flex bg="#f5f5f5" p={2} height="100%" sx={{ borderRadius: 10, "& > img": { borderRadius: 10 } }}>
          <Image
            src="/static/images/works/azinove-mobile.png"
            alt="works azinove illustration"
            width={299}
            height={424}
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </Flex>
      </Card>
    </Flex>
  );
};
