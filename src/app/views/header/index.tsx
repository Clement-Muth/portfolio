"use client";

import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { Navbar, NavbarContent, NavbarMenu, NavbarMenuToggle } from "@nextui-org/navbar";
import ImageNext from "next/image";
import LinkNext from "next/link";
import { useState } from "react";
import me from "~/public/static/images/me.jpg";

export const links = [
  {
    href: "/",
    label: "About Me"
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      classNames={{ base: "-mx-6 w-[100vw] pb-2", wrapper: "px-3 sm:px-6" }}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-transparent !px-0"
    >
      <div className="md:flex py-4 h-[86px] w-full lg:w-[1024px] justify-self-center">
        <div className="flex items-center bg-white w-full p-2 rounded-full shadow-[0px_2px_1px_rgb(200_200_200)]">
          <div className="flex-[0_0_auto] w-[calc(100%-36px)] md:w-auto">
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
          <div className="hidden md:flex justify-between w-full items-center">
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
                <Link as={LinkNext} href={href} key={label} color="foreground" target="_blank">
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
          <NavbarContent className="md:hidden">
            <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} className="md:hidden" />
          </NavbarContent>
        </div>
      </div>
      <NavbarMenu className="md:hidden mt-16">
        <div className="flex flex-col gap-7">
          <div className="flex flex-col items-center mx-4 gap-7">
            {links.map(({ href, label }) => (
              <Link
                as={LinkNext}
                href={href}
                key={label}
                color="foreground"
                className="font-semibold text-2xl"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col  items-center mx-4 gap-7">
            {socials.map(({ href, label }) => (
              <Link
                as={LinkNext}
                target="_blank"
                href={href}
                key={label}
                color="foreground"
                className="font-semibold text-2xl"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="grow" />
          <Button
            as={LinkNext}
            href="mailto:clementmuth@gmail.com"
            target="_blank"
            className="bg-yellow font-semibold"
            radius="full"
            fullWidth
          >
            Contact Me
          </Button>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};

export default Header;
