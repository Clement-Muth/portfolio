import { Card, CardBody } from "@nextui-org/card";
import Balancer from "react-wrap-balancer";

const Hero = () => {
  return (
    <section className="flex flex-col pt-16 gap-10">
      <h1 className="text-5xl font-bold text-center leading-[2]">
        <span className="bg-yellow rounded-xl px-4 py-3">Hey, I'm Clément,</span>
        <br />
        web and mobile developer
      </h1>
      <Balancer as="h2" className="text-center text-lg leading-8 max-w-5xl">
        I am a web developer with over 7 years of experience, 3 years of entrepreneurship, and 2 years of
        self-employment as an auto-entrepreneur. I have created numerous personal and professional web
        applications. I founded my communication agency specializing in eco-friendly development,
        performance-oriented, and SEO-focused (<span className="bg-yellow rounded-md px-1">Azinove</span>), as
        well as my freelance web development business as an auto-entrepreneur
      </Balancer>
      <Card className="justify-around items-center" radius="md">
        <CardBody className="!flex-row py-6 justify-around items-center">
          <div className="text-center">
            <p className="text-3xl leading-10 font-bold">6</p>
            <p className="text-xs">Completed projects</p>
          </div>
          <div className="text-center">
            <p className="text-3xl leading-10 font-bold">100%</p>
            <p className="text-xs">Completed at</p>
          </div>
          <div className="text-center">
            <p className="text-3xl leading-10 font-bold">7 ans et +</p>
            <p className="text-xs">Experience</p>
          </div>
          <div className="text-center">
            <p className="text-3xl leading-10 font-bold">1h</p>
            <p className="text-xs">Response time</p>
          </div>
        </CardBody>
      </Card>
    </section>
  );
};

export default Hero;
