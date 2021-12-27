module.exports = {
  siteMetadata: {
    title: "Benjamin Michaelis",
    description: "Software Engineering Student @ Washington State University",
    author: "Benjamin Michaelis",
    siteUrl: "https://bencodes.michaelis.net/",
    social: {
      github: `@BenjaminMichaelis`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Benjamin Michaelis",
        short_name: "BAM",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#2e4052",
        display: "standalone",
        icon: `src/images/BAMIcon.png`,
        crossOrigin: `use-credentials`,
      },
    },
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
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
};
