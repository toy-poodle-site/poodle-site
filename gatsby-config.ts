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
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      // options: {
      //   plugins: [
      //         `gatsby-plugin-netlify-cms-paths`,
      //     {
      //       resolve: `gatsby-remark-relative-images`,
      //       options: {
      //         name: 'img',
      //       },
      //     },
      //     {
      //       resolve: `gatsby-remark-images`,
      //       options: {},
      //     },
      //   ],
      // },
    },

    `gatsby-plugin-postcss`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-image`,
  ],

  jsxRuntime: 'automatic',
};
