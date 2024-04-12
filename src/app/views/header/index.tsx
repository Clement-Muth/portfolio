import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import ImageNext from "next/image";
import LinkNext from "next/link";
import me from "~/public/static/images/me.jpg";

export const links = [
  {
    href: "/",
    label: "About"
  },
  {
    href: "/works",
    label: "Works"
  }
];

export const socials = [
  {
    href: "https://www.malt.fr/profile/clementmuth",
    label: "Malt"
  },
  {
    href: "https://www.linkedin.com/in/clement-muth/",
    label: "Linkedin"
  },
  {
    href: "https://github.com/Clement-Muth",
    label: "Github"
  }
];

const Header = () => {
  return (
    <header className="flex py-4 h-[86px] w-[1024px] justify-self-center">
      <div className="flex items-center bg-white w-full p-2 rounded-full shadow-[0px_2px_1px_rgb(200_200_200)]">
        <div className="flex-[0_0_auto]">
          <Link as={LinkNext} href="/" className="flex">
            <Image
              as={ImageNext}
              {...me}
              width={40}
              height={40}
              alt="clément muth profile picture"
              quality={100}
              className="rounded-full"
              style={{ objectFit: "cover" }}
            />
          </Link>
        </div>
        <div className="flex items-center flex-[0_0_auto] mx-4 gap-7">
          {links.map(({ href, label }) => (
            <Link as={LinkNext} href={href} key={label} color="foreground">
              {label}
            </Link>
          ))}
        </div>
        <p className="text-gray-400 font-thin">|</p>
        <div className="flex items-center flex-[0_0_auto] mx-4 gap-7">
          {socials.map(({ href, label }) => (
            <Link as={LinkNext} href={href} key={label} color="foreground">
              {label}
            </Link>
          ))}
        </div>
        <div className="grow" />
        <Button
          as={LinkNext}
          href="mailto:clementmuth@gmail.com"
          target="_blank"
          className="bg-yellow"
          radius="full"
        >
          Contact Me
        </Button>
      </div>
    </header>
  );
};

export default Header;
