import { LinkProps } from "next/link";

export type Link = { href: LinkProps["href"]; label: string; icon?: string };

export const links: Link[] = [
  {
    href: "/",
    label: "About"
  },
  {
    href: "/works",
    label: "Works"
  }
];

export const socials: Link[] = [
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
