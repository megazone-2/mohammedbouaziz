
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-91FFNSEFR2"
        ],
        pluginConfig: {
          head: true,
        },
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
                 name: `projects`,
                 path: `${__dirname}/src/projects/`,
                },
        },
      {
        resolve:  `gatsby-source-filesystem`,
        options: {
            name: `blog`,
            path: `${__dirname}/src/blog/`,
        },
      },

      {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    `gatsby-remark-emoji`,
                ]
            }
      },
    
    {
      resolve: `gatsby-source-filesystem`,
      options: {
                 name: `images`,
                 path: `${__dirname}/src/images/`,
                },
        },
      
        {
          resolve: `gatsby-plugin-facebook-pixel`,
          options: {
            pixelId: "924168505028809",
          },
        },

  ],
  siteMetadata: {
    title: 'Full stack Engineer and Developer, Phd',
    description: 'Mohammed Bouaziz creates optimal, greatly tailored and engineered digital solutions for companies and individuals, delivered with council and accompaniment along the process, all to ensure unparalleled success',
    copyright: 'This digital platform is copyright 2021 Mohammed Bouaziz',
    contact: 'contact@mohammedbouaziz.com',
    url: "https://mohammedbouaziz.com",
    siteUrl: 'https://mohammedbouaziz.com',
    twitterUsername:  "@techforbusines",
    facebookUsername: "@TheNextWare",
    author: "Mohammed Bouaziz"
  }
}
