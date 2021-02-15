module.exports = {
  siteMetadata: {
    title: "portfolio1.1",
  },
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        icon: `src/images/EB.png`,
      },
    },
  ],
  pathPrefix: "/ericbilaver.github.io",
};
