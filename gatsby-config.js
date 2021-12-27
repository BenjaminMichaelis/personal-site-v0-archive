module.exports = {
  siteMetadata: {
    siteUrl: "https://bencodes.michaelis.net/",
    title: "Benjamin Michaelis",
    author: "Benjamin Michaelis",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-S10Q6VG46J",
      },
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
