// const dotenv = require("dotenv")

// if (process.env.ENVIRONMENT !== "production") {
//   dotenv.config()
// }

module.exports = {
  plugins: [
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: 'UA-116699912-9',
    //     head: true,
    //   }
    // },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    // 'gatsby-transformer-remark',
    'gatsby-plugin-typescript',
    // {
    //   resolve: 'gatsby-plugin-graphql-codegen',
    //   options: {
    //     fileName: 'types/graphql-types.d.ts'
    //   }
    // },
    // {
    //   resolve: 'gatsby-plugin-intl',
    //   options: {
    //     path: `${__dirname}/src/locales`,
    //     languages: ['ja', 'en'],
    //     defaultLanguage: 'ja',
    //     redirect: true,
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/static/uploaded/img`,
    //     name: 'uploads',
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     path: `${__dirname}/src/static/img`,
    //     name: 'img',
    //   },
    // },
    // {
    //   resolve: "gatsby-source-contentful",
    //   options: {
    //     spaceId: process.env.spaceId,
    //     accessToken: process.env.accessToken,
    //   },
    // },
  ]
}