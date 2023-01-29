/* eslint-disable n/no-path-concat */
const path = require('path');

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  pathPrefix: '/',
  siteMetadata: {
    title: 'Sim Sim Lovelies - Toy Poodles',
    description:
      'Registered Toy Poodle Breeder in Connewarre, Victoria, Australia',
    siteUrl: 'https://toy-poodle-dev.netlify.app',
    author: 'Sima',
    image: '/img/dog-bg.jpg',
  },

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/img`,
        name: 'img',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content`,
        name: 'content',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: 'img',
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {},
          },
        ],
      },
    },

    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-image`,
  ],

  // plugins: [
  //   `gatsby-plugin-sharp`,
  //   `gatsby-transformer-sharp`,
  //   {
  //     resolve: `gatsby-transformer-remark`,
  //     options: {
  //       plugins: [
  //         `gatsby-plugin-netlify-cms-paths`,
  //         {
  //           resolve: `gatsby-remark-relative-images`,
  //           // options: {
  //           //   // [Optional] The root of "media_folder" in your config.yml
  //           //   // Defaults to "static"
  //           //   staticFolderName: 'static',
  //           //   // [Optional] Include the following fields, use dot notation for nested fields
  //           //   // All fields are included by default
  //           //   include: ['featured'],
  //           //   // [Optional] Exclude the following fields, use dot notation for nested fields
  //           //   // No fields are excluded by default
  //           //   exclude: ['featured.skip'],
  //           // },
  //         },
  //         {
  //           resolve: `gatsby-remark-images`,
  //           options: { maxWidth: 1024 },
  //         },
  //       ],
  //     },
  //   },
  //   `gatsby-plugin-image`,
  //   {
  //     resolve: 'gatsby-source-filesystem',
  //     options: {
  //       path: path.join(__dirname, 'static', 'img'),
  //       name: 'static',
  //     },
  //   },
  //   {
  //     resolve: 'gatsby-source-filesystem',
  //     options: {
  //       name: 'content',
  //       path: path.join(__dirname, 'content'),
  //     },
  //   },
  //   `gatsby-plugin-netlify-cms-paths`,
  //   `gatsby-plugin-postcss`,
  //   `gatsby-plugin-netlify-cms`,
  //   `gatsby-plugin-smoothscroll`,
  // ],
  jsxRuntime: 'automatic',
};
