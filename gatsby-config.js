module.exports = {
  siteMetadata: {
    title: `kevinhakanson.com`,
    author: `Kevin Hakanson`,
    description: `Kevin Hakanson's Blog`,
    siteUrl: `https://kevinhakanson.com/`,
    social: {
      twitter: `hakanson`,
      linkedin: `kevinhakanson`,
      github: `hakanson`,
    },
  },
  plugins: [
    {
      // https://www.gatsbyjs.org/packages/gatsby-source-filesystem/
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog-posts-markdown/`,
        name: `blog`,
        ignore: [`**/\.js`, `**/README\.md`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          // TODO: look at https://www.gatsbyjs.org/packages/gatsby-remark-vscode/ instad
          {
            // https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: { console: "bash" },
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
            }
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
