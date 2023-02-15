/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["links.papareact.com"],
  },
  env: {
    NEXT_PUBLIC_MAPBOX_KEY:
      "pk.eyJ1IjoibmVsb3UiLCJhIjoiY2xlNGRvYXUxMDIxYzNvbXN4d2N5aTQwZCJ9.E65Hotu_NYYFZiJg85wH4w",
  },
};
