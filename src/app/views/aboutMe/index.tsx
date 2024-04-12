import { Button } from "@nextui-org/button";
import Link from "next/link";
import Bio from "~/app/views/aboutMe/bio";
import Project from "~/app/views/aboutMe/project";
import { Skills } from "~/app/views/aboutMe/skills";

const AboutMe = () => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex gap-5">
        <Skills />
        <Bio />
      </div>
      <Project />
      <Button as={Link} href="/works" radius="full" size="lg" className="bg-[#1A1F29] text-white">
        See all ~ My projects
      </Button>
    </section>
  );
};

export default AboutMe;
