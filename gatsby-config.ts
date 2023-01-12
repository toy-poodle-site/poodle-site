import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: ['gatsby-plugin-postcss', 'gatsby-plugin-netlify-cms'],
  jsxRuntime: 'automatic',
};

export default config;
