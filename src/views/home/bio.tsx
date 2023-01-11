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
        Je suis un développeur web avec 8 ans d&apos;expérience et 3 ans d&apos;entrepreneuriat. J&apos;ai réalisé de
        nombreuses applications web pour ma famille et ai créé ma propre agence de communication spécialisée dans le
        développement éco-responsables, orientée performance et SEO (Azinove). J&apos;ai également travaillé pour la
        startup Pasha (anciennement AirCampus). Je maîtrise React et NextJS pour les applications web et React native
        pour les applications mobiles, les technologies back-end (Firebase, Node.js...), la plateforme google cloud.
        J&apos;aime aussi façonner mes créations en de belles choses, j’ai donc de bonnes bases en UX/UI pour les
        applications web / mobiles.
      </Text>
    </Card>
  );
};
