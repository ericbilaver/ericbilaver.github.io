module.exports = {
  siteMetadata: {
    title: "portfolio1.1",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    // REMARK plugin needed to extract the markdown files and parses

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "xxx",
        short_name: "xxxx",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/EB.png", // This path is relative to the root of the site.
      },
    },
  ],
  pathPrefix: "/ericbilaver.github.io",
};
