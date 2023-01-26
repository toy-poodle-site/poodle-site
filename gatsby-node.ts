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

// Make sure our fields from the frontmatter that are Markdown are given an html field.
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      intro: Intro
      our_family: OurFamily
    }
    type Intro {
      intro_body: String @md
      blurb1_text: String @md
      blurb2_text: String @md
      blurb3_text: String @md
    }
  type OurFamily {
    our_family_photos: [OurFamilyPhotos]
  }

  type OurFamilyPhotos {
    our_family_about_dog: String @md
  }

  `;
  createTypes(typeDefs);
};
