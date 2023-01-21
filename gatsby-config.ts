/* eslint-disable n/no-path-concat */

module.exports = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
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
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'img',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify-cms-paths`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // `gatsby-plugin-netlify-cms-paths`,
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              // [Optional] The root of "media_folder" in your config.yml
              // Defaults to "static"
              staticFolderName: 'static',
              // [Optional] Include the following fields, use dot notation for nested fields
              // All fields are included by default
              include: ['featured'],
              // [Optional] Exclude the following fields, use dot notation for nested fields
              // No fields are excluded by default
              exclude: ['featured.skip'],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: { maxWidth: 1024 },
          },
        ],
      },
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-smoothscroll',
  ],
  jsxRuntime: 'automatic',
};
