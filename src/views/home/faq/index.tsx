import { Text } from "library/components/ui";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Box, Button, Card, Flex } from "rebass";

interface BoxFaqProps {
  title: string;
  description: string;
}

const BoxFaq: FC<BoxFaqProps> = ({ title, description }) => {
  const [close, setClose] = useState<Boolean>(true);

  return (
    <Flex
      as="article"
      px={4}
      py={3}
      onClick={() => setClose(!close)}
      sx={{ cursor: "pointer", borderRadius: 10, border: "solid 1px lightGrey" }}
    >
      <Box flex={1}>
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize={2} fontWeight={400}>
            {title}
          </Text>
          <Box>
            <svg viewBox="0 0 24 24" width="20px" height="20px">
              <path d="m7 10 5 5 5-5z" />
            </svg>
          </Box>
        </Flex>
        {!close && (
          <Text mt={3} width="90%" fontSize={1} lineHeight={1.5}>
            {description}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export const Faq = () => {
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
        <Text as="h2" textAlign="center" fontSize={5}>
          Questions fréquemment posées
        </Text>
        <Flex
          as="ul"
          flexDirection="column"
          pl={0}
          mt={6}
          width="100%"
          sx={{ gap: 10, "& > li": { listStyle: "none" } }}
        >
          <Box as="li">
            <BoxFaq
              title="Première question souvant posée"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I"
            />
          </Box>
          <Box as="li">
            <BoxFaq
              title="Première question souvant posée"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I"
            />
          </Box>
          <Box as="li">
            <BoxFaq
              title="Première question souvant posée"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I"
            />
          </Box>
          <Box as="li">
            <BoxFaq
              title="Première question souvant posée"
              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. I"
            />
          </Box>
        </Flex>
        <Button
          flex={1}
          bg="black"
          px={5}
          py={3}
          mt={4}
          fontWeight={500}
          onClick={() => router.push("/contact")}
          sx={{ borderRadius: 50, boxShadow: "unset" }}
        >
          Posez-moi vos questions
        </Button>
      </Card>
    </Box>
  );
};
