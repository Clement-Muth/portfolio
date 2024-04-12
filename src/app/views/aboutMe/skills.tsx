import { Avatar } from "@nextui-org/avatar";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Link } from "@nextui-org/link";
import { skills } from "~/app/views/aboutMe/constant";
import me from "~/public/static/images/me.jpg";

export const Skills = () => {
  return (
    <Card as="article" fullWidth className="p-5 gap-3 bg-[#1A1F29] items-center" radius="md">
      <CardHeader className="flex flex-col">
        <div className="flex justify-start items-center w-full">
          <Avatar
            {...me}
            size="lg"
            alt="clément muth profile picture"
            style={{ borderRadius: 50, objectFit: "cover", flex: "0 0 auto" }}
          />
          <div className="flex flex-col text-white ml-4 w-full gap-3">
            <h3 className="text-xl md:text-3xl font-semibold">Clément Muth</h3>
            <p>Ostwald, Strasbourg, France</p>
          </div>
        </div>
      </CardHeader>
      <Divider className="bg-gray-300" />
      <CardBody className="gap-5">
        <div>
          <h3 className="text-xl text-white font-semibold">Skills:</h3>
          <div className="mt-4 grid gap-x-3 gap-y-5 grid-cols-2 md:grid-cols-3 h-[calc(100%-44px)]">
            {skills.map(({ bg, icon, label }) => (
              <div className="flex items-center" key={label}>
                <div
                  className="flex overflow-hidden w-8 h-8 p-1 rounded-full"
                  style={{ backgroundColor: bg }}
                >
                  {icon}
                </div>
                <p className="ml-2 text-sm md:text-base text-white font-semibold ">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
      <Divider className="bg-gray-300" />
      <CardFooter>
        <Link
          as={Button}
          href="https://www.malt.fr/profile/clementmuth"
          target="_blank"
          isBlock
          showAnchorIcon
          className="bg-white text-black"
          fullWidth
        >
          All My Skills
        </Link>
      </CardFooter>
    </Card>
  );
};
