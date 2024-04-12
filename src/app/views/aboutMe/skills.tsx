import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { skills } from "~/app/views/aboutMe/constant";
import me from "~/public/static/images/me.jpg";

export const Skills = () => {
  return (
    <Card as="article" fullWidth className="p-5 gap-3 bg-[#1A1F29] items-center" radius="md">
      <CardHeader>
        <div className="flex justify-start items-center w-full">
          <Avatar
            {...me}
            size="lg"
            alt="clément muth profile picture"
            style={{ borderRadius: 50, objectFit: "cover", flex: "0 0 auto" }}
          />
          <div className="flex flex-col text-white ml-4 w-full gap-3">
            <h3 className="text-3xl font-semibold">Clément Muth</h3>
            <p>Ostwald, Strasbourg, France</p>
          </div>
        </div>
      </CardHeader>
      <Divider className="bg-gray-300" />
      <CardBody className="gap-5">
        <div>
          <h3 className="text-xl text-white font-semibold">Skills:</h3>
          <div className="mt-4 grid gap-8 grid-cols-3 h-[calc(100%-44px)]">
            {skills.map(({ bg, icon, label }) => (
              <div className="flex items-center" key={label}>
                <div
                  className="flex overflow-hidden w-8 h-8 p-1 rounded-full"
                  style={{ backgroundColor: bg }}
                >
                  {icon}
                </div>
                <p className="ml-2 text-white font-semibold ">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
