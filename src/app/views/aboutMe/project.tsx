import CardProject from "~/app/views/cardProject";
import facixLandingMobile from "~/public/static/images/works/facix-landing-mobile.webp";
import facixLanding from "~/public/static/images/works/facix-landing.webp";

const Project = () => {
  return (
    <CardProject
      description="Project EIP (Epitech Innovative Project) (Beta version in development)"
      name="Facix"
      href="https://facix.fr"
      desktopImage={facixLanding}
      mobileImage={facixLandingMobile}
    />
  );
};

export default Project;
