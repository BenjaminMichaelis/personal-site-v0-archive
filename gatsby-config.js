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
        icon: `static/icons/BAMIcon.png`,
        crossOrigin: `use-credentials`,
        icons: [
          {
            "src": "/android-chrome-192x192.png",
            "sizes": "192x192",
            "type": "image/png"
          },
          {
            "src": "/android-chrome-384x384.png",
            "sizes": "384x384",
            "type": "image/png"
          },
        ]
      },
      icons: [
        {
          "src": "/android-chrome-192x192.png",
          "sizes": "192x192",
          "type": "image/png"
        },
        {
          "src": "/android-chrome-384x384.png",
          "sizes": "384x384",
          "type": "image/png"
        },
      ]
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-218221996-4",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: [
          "G-0MBFQCH50V", // Google Analytics / GA
        ],
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
