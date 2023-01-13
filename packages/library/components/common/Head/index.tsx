import type { FC } from "react";
import { SEO } from "../SEO";

export const Head: FC<{ config?: any }> = ({ config }) => {
  return (
    <SEO config={config}>
      <meta key="viewport" name="viewport" content="width=device-width, initial-scale=1" />
      <meta key="ms-application-config" name="msapplication-config" content="/static/icons/browserconfig.xml" />
      <meta name="theme-color" content="#13111c" />
      <link rel="icon" href="/static/icons/favicon.ico" sizes="any" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/static/icons/apple-touch-icon.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
    </SEO>
  );
};
