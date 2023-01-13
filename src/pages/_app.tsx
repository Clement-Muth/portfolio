import "library/assets/css/main.css";
import { FC, ReactNode, useEffect } from "react";
import { Head } from "library/components/common/Head";
import { theme } from "library/components/common/Theme/theming";
import { ThemeProvider } from "emotion-theming";
import { useNProgress } from "library/hooks";
import { NextPages } from "library/interfaces/pages";
import config from "../config/seo_meta.json";
import type { AppProps } from "next/app";
import { Roboto } from "@next/font/google";
import { Flex } from "rebass";

const inter = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"]
});

const Noop: FC<{ children: ReactNode }> = (props) => <>{props.children}</>;

const MyApp = ({ Component, pageProps }: AppProps<NextPages>) => {
  const Layout: FC<NextPages> = (Component as any).Layout || Noop;

  useNProgress();

  useEffect(() => {
    document.body.classList?.remove("loading");
  }, []);

  return (
    <Flex id="main" className={`${inter.className}`} justifyContent="center">
      <Flex
        flexDirection="column"
        width="1000px"
        pb={3}
        sx={{
          "@media (max-width: 1030px)": {
            width: "95%"
          }
        }}
      >
        <Head config={config} />
        <ThemeProvider theme={theme}>
          <Layout Component={Component} {...pageProps}>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Flex>
    </Flex>
  );
};

export default MyApp;
