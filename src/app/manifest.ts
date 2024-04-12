import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "clementmuth",
    short_name: "clementmuth",
    description: "My portfolio",
    start_url: "/",
    id: "/",
    icons: [
      {
        src: "/static/icons/android-192x192.png",
        type: "image/png",
        sizes: "192x192"
      },
      {
        src: "/static/icons/android-256x256.png",
        type: "image/png",
        sizes: "256x256"
      },
      {
        src: "/static/icons/android-384x384.png",
        type: "image/png",
        sizes: "384x384"
      },
      {
        src: "/static/icons/android-chrome-512x512.png",
        type: "image/png",
        sizes: "512x512"
      },
      {
        src: "/static/icons/maskable.png",
        type: "image/png",
        sizes: "192x192",
        purpose: "maskable"
      }
    ],
    display: "standalone",
    background_color: "#FFFAF6",
    scope: "/",
    theme_color: "#FFFAF6",
    orientation: "portrait",
    dir: "ltr",
    lang: "en",
    screenshots: [
      {
        src: "/static/logo.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
