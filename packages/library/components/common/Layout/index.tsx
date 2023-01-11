import { Box } from "rebass";
import type { FC } from "react";
import { NextPages } from "../../../interfaces/pages";
import { Navbar } from "../Navbar";
import { Footer } from "../Footer";

export const Layout: FC<NextPages> = ({ ...props }) => {
  return (
    <>
      <Navbar />
      <Box as="main" className="fit" pb={8}>
        {props.children}
      </Box>
      <Footer />
    </>
  );
};
