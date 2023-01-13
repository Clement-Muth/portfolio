import { Text } from "library/components/ui";
import { Card } from "rebass";

export const Bio = () => {
  return (
    <Card
      as="article"
      p="21px"
      bg="white"
      width="50%"
      justifyContent="space-around"
      alignItems="center"
      sx={{ borderRadius: 10 }}
    >
      <Text as="h2" fontSize={3}>
        Bio
      </Text>
      <Text mt={4} lineHeight={1.5} color="darkGrey">
        Je suis un développeur web avec +7 ans d'expérience et 3 ans d'entrepreneuriat. J'ai réalisé de nombreuses applications web pour mon entourage, associations et ai créé ma propre agence de communication spécialisée dans le développement éco-responsable, orientée performance et SEO (Azinove). Je suis spécialisé dans les frameworks React / NextJS / Typescript pour les applications web et React native pour les applications mobiles. J'utilise quotidiennement Firebase, Node.js et express comme technologies back-end. J'aime aussi façonner mes créations en de belles choses, j’ai donc de bonnes bases en UX/UI pour les applications web / mobiles.
        <br /><br />
        Au plaisir de prendre contact avec vous !
      </Text>
    </Card>
  );
};
