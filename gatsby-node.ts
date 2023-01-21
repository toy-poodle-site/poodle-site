import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';
import type { GatsbyNode } from 'gatsby';
import { fmImagesToRelative } from 'gatsby-remark-relative-images-v2';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.onCreateNode = ({ node }) => {
  fmImagesToRelative(node);
};
