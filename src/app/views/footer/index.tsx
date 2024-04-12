import { Avatar } from "@nextui-org/avatar";
import { Card, CardBody } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import LinkNext from "next/link";
import me from "~/public/static/images/me.jpg";

const Footer = () => {
  return (
    <Card as="footer" className="grid mt-32 w-full lg:w-[1024px]" radius="lg">
      <CardBody className="self-center justify-self-center py-6 px-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 flex-wrap md:items-center md:justify-between">
          <div className="flex flex-wrap gap-6 md:gap-12">
            <div>
              <p>Work with me</p>
              <p className="mt-2 mb-1">clementmuth@gmail.com</p>
              <Link
                as={LinkNext}
                href="https://www.malt.fr/profile/clementmuth"
                target="_blank"
                className="bg-yellow rounded-md px-1"
                color="foreground"
              >
                Malt
              </Link>
            </div>
            <div>
              <p>Follow me</p>
              <div className="flex mt-2 gap-5">
                <Link
                  as={LinkNext}
                  href="https://github.com/Clement-Muth"
                  target="_blank"
                  className="bg-yellow rounded-md px-1"
                  color="foreground"
                >
                  Github
                </Link>
                <Link
                  as={LinkNext}
                  href="https://www.linkedin.com/in/clement-muth/"
                  target="_blank"
                  className="bg-yellow rounded-md px-1"
                  color="foreground"
                >
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-3 md:items-center md:justify-center">
            <div className="flex flex-[0_0_auto]">
              <Link as={LinkNext} href="/" className="flex">
                <Avatar className="rounded-full" {...me} size="md" alt="clément muth profile picture" />
              </Link>
            </div>
            <div>
              <p className="mb-1">Portfolio</p>
              <Link
                as={LinkNext}
                href="https://github.com/Clement-Muth/portfolio"
                target="_blank"
                className="bg-yellow rounded-md px-1"
                color="foreground"
              >
                Repository
              </Link>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Footer;
