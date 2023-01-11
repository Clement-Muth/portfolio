import { Box, Card, Flex } from "rebass";
import Image from "next/image";
import { Text } from "library/components/ui";
import { skills } from "./constant";

export const Skills = () => {
  return (
    <Card as="article" p="21px" bg="#1A1F29" width="50%" alignItems="center" sx={{ borderRadius: 10 }}>
      <Flex justifyContent="left" alignItems="center" width="100%" sx={{ borderBottom: "solid 1px grey" }}>
        <Image
          src="/static/images/me.png"
          width={100}
          height={100}
          alt="clément muth profile picture"
          style={{ borderRadius: 50, objectFit: "cover", flex: "0 0 auto" }}
        />
        <Box color="white" ml={4} width="100%">
          <Text as="h3" fontSize={4} fontWeight="700">
            Clément Muth
          </Text>
          <Text mt={1}>Ostwald, Strasbourg, France</Text>
          <Flex mt={3} width="100%">
            <Box pr={6} pb={3} sx={{ borderRight: "solid 1px grey" }}>
              <Text fontSize={3} color="lightGrey">
                Following
              </Text>
              <Text fontSize={3} fontWeight="800" mt={1}>
                24
              </Text>
            </Box>
            <Box pl={6}>
              <Text fontSize={3} color="lightGrey">
                Followers
              </Text>
              <Text fontSize={3} fontWeight="800" mt={1}>
                21
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>
      <Box mt={4}>
        <Text as="h3" color="white" fontSize={3} fontWeight="600">
          Skills:
        </Text>
        <Box mt={4} display="grid" sx={{ gap: 30, gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))" }}>
          {skills.map(({ bg, icon, label }) => (
            <Flex alignItems="center" key={label}>
              <Flex overflow="hidden" bg={bg} width={30} height={30} p={1} sx={{ borderRadius: 50 }}>
                {icon}
              </Flex>
              <Text ml={2} color="white" fontWeight={700} fontSize={1}>
                {label}
              </Text>
            </Flex>
          ))}
        </Box>
      </Box>
    </Card>
  );
};
