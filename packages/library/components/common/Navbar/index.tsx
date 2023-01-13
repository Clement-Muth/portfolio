import { Button, Flex } from "rebass";
import { Relative } from "../Positions/Relative";
import { links, socials } from "./constant";
import Link from "next/link";
import { Text } from "../../ui";
import Image from "next/image";

export const Navbar = () => {
  return (
    <Relative as="header" display="flex" py={3} height="86px" width="100%">
      <Flex
        bg="white"
        alignItems="center"
        width="100%"
        p={2}
        sx={{ borderRadius: 50, boxShadow: "0px 2px 1px rgb(200 200 200)" }}
      >
        <Flex flex="0 0 auto" sx={{ "& > a": { display: "flex", "& > img": { borderRadius: 50 } } }}>
          <Link href="/">
            <Image
              src="/static/images/me.png"
              width={40}
              height={40}
              alt="clément muth profile picture"
              quality={100}
              style={{ objectFit: "cover" }}
            />
          </Link>
        </Flex>
        <Flex alignItems="center" flex="0 0 auto " mx={4} sx={{ gap: 30, "& > a": { fontSize: 14 } }}>
          {links.map(({ href, label }) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </Flex>
        <Text color="grey" fontWeight={200}>
          |
        </Text>
        <Flex alignItems="center" width="100%" ml={4} sx={{ gap: 30, "& > a": { fontSize: 14 } }}>
          {socials.map(({ href, label }) => (
            <Link href={href} key={label}>
              {label}
            </Link>
          ))}
        </Flex>
        <Flex flexGrow={1} />
        <Button
          height={40}
          bg="yellow"
          fontSize={0}
          px={4}
          color="black"
          sx={{ borderRadius: 50, boxShadow: "unset", whiteSpace: "nowrap" }}
        >
          TJM ~ 350€
        </Button>
      </Flex>
    </Relative>
  );
};
