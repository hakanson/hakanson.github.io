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
        path: `${__dirname}/content/pages-markdown/`,
        name: `pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-remark-source-name`,
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
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [ `UA-46763107-2` ],
      },
    },
    // `gatsby-plugin-feed`,
    // https://www.gatsbyjs.com/plugins/gatsby-plugin-feed/
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: {frontmatter: {date: DESC}}
                  filter: {fields: {sourceName: {eq: "blog"}}}
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Kevin Hakanson's Blog RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/20",
            // optional configuration to specify external rss feed, such as feedburner
            // link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-csp/
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
    //     mergeScriptHashes: true, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: false, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       "script-src": "'self' www.google-analytics.com www.googletagmanager.com",
    //       "style-src": "'self' 'unsafe-inline'",
    //       "img-src": "'self' data: www.google-analytics.com www.googletagmanager.com"
    //       // you can add your directives or override defaults
    //     }
    //   }
    // },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-sitemap/
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: 'sitemap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kevinhakanson.com`,
        short_name: `kevinhakanson.com`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/profile-pic.jpg`,
      },
    },
    // `gatsby-plugin-offline`,  // comment out when: gatsby serve
    `gatsby-plugin-remove-serviceworker`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://kevinhakanson.com`,
        //noTrailingSlash: true,
      },
    },
  ],
  trailingSlash: `always`,
}
