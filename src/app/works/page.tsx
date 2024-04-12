import CardProject from "~/app/views/cardProject";
import facixDashboardMobile from "~/public/static/images/works/facix-dashboard-mobile.webp";
import facixDashboard from "~/public/static/images/works/facix-dashboard.webp";
import facixLandingMobile from "~/public/static/images/works/facix-landing-mobile.webp";
import facixLanding from "~/public/static/images/works/facix-landing.webp";
import gameOfEmpireMobile from "~/public/static/images/works/game-of-empire-mobile.webp";
import gameOfEmpire from "~/public/static/images/works/game-of-empire.webp";
import headbandMobile from "~/public/static/images/works/headband-mobile.webp";
import headband from "~/public/static/images/works/headband.webp";
import optineoLandingMobile from "~/public/static/images/works/optineo-mobile.webp";
import optineoLanding from "~/public/static/images/works/optineo.webp";
import tspLandingMobile from "~/public/static/images/works/tsp-motorsport-mobile.webp";
import tspLanding from "~/public/static/images/works/tsp-motorsport.webp";

const WorksPage = () => {
  return (
    <div className="flex flex-col justify-center gap-5 w-full lg:w-[1024px] md:mt-20">
      <CardProject
        description="Project EIP (Epitech Innovative Project) (Beta version – development)"
        name="Facix"
        href="https://facix.fr"
        desktopImage={facixLanding}
        mobileImage={facixLandingMobile}
      />
      <CardProject
        description="Project EIP (Epitech Innovative Project) (Beta version – development)"
        name="Facix Dashboard"
        href="https://dashboard-facix.vercel.app/en"
        desktopImage={facixDashboard}
        mobileImage={facixDashboardMobile}
      />
      <CardProject
        description="Chiptuning and software optimization"
        name="Tsp Chiptuning"
        href="https://tsp-chiptuning.de/"
        desktopImage={tspLanding}
        mobileImage={tspLandingMobile}
      />
      <CardProject
        description="Aids 2023 | Benefit from state aid for your energy renovation project"
        name="Optineo"
        href="https://optineo.info/"
        desktopImage={optineoLanding}
        mobileImage={optineoLandingMobile}
      />
      <CardProject
        description="Cal States San Marcos University – HTML Canvas Project"
        name="Game Of Empire"
        href="https://clement-muth.github.io/game-of-empire/"
        desktopImage={gameOfEmpire}
        mobileImage={gameOfEmpireMobile}
      />
      <CardProject
        description="Cal States San Marcos University – Computer Science Project"
        name="headband"
        href="/works#"
        desktopImage={headband}
        mobileImage={headbandMobile}
      />
    </div>
  );
};

export default WorksPage;
