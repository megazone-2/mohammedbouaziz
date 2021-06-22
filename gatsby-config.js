
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-3NHE4NKVXX",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
        // Setting this parameter is optional
        anonymize: true,
      },
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
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

  ],
  siteMetadata: {
    title: 'Full stack Engineer and Developper, Phd',
    description: 'Mohammed Bouaziz creates optimal, greatly tailored and engineered digital solutions for companies and individuals, delivered with council and accompaniment along the process, all to ensure unparalleled success',
    copyright: 'This digital platform is copyright 2021 Mohammed Bouaziz',
    contact: 'contact@mohammedbouaziz.com',
    url: "http://mohammedbouaziz.com",
    twitterUsername:  "@techforbusines",
    facebookUsername: "@TheNextWare",
    author: "Mohammed Bouaziz"
  }
}
