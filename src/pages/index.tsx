import { NextSeo } from "next-seo";
import { Layout } from "library/components/common/Layout";
import { Home } from "views/home";

const IndexPage = () => {
  return (
    <>
      <NextSeo
        title="Clément Muth - Freelance Développeur web - React/Nextjs/Typescript"
        description="Je suis un développeur web avec 8 ans d'expérience et 3 ans d'entrepreneuriat. J'ai réalisé de nombreuses applications web pour ma famille et ai créé ma propre agence de communication spécialisée dans le développement éco-responsables, orientée performance et SEO (Azinove)."
      />
      <Home />
    </>
  );
};

IndexPage.Layout = Layout;

export default IndexPage;
