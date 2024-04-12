const readEnvironmentVariable = (key, defaultValue = undefined) => {
  const value = process.env[key];

  if (value === undefined && defaultValue === undefined) {
    throw new Error(`The environment variable "${key} is missing".`);
  }

  if (value === "true") {
    return true;
  }

  if (value === "false") {
    return false;
  }

  return value || defaultValue;
};

/** @type {import('next').NextConfig} */
const nextConfig = () => {
  return {
    optimizeFonts: true,
    compress: true,
    reactStrictMode: true,
    swcMinify: true,
    async headers() {
      return [
        {
          source: "/:all*(webp|svg|jpg|png|woff2|js|css|json)",
          locale: false,
          headers: [
            {
              key: "Cache-Control",
              value: "public, max-age=86400, must-revalidate"
            }
          ]
        }
      ];
    },
    typescript: {
      ignoreBuildErrors: true
    },
    env: {
      PUBLIC_URL: readEnvironmentVariable("PUBLIC_URL"),
    }
  };
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
  openAnalyzer: false
});

const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  sw: "service-worker.js"
});

module.exports = withPWA(withBundleAnalyzer(nextConfig()));
