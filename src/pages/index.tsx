import { useEffect, useContext, useState, useLayoutEffect } from 'react';
import IndexPageTemplate from '@/templates/index-page';
import Layout from '@/components/Layout';
import { graphql } from 'gatsby';

import { ThemeContext } from '@/providers/ThemeProvider';

export default function Home({ data, location }: any) {
  const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
  const { updateAccentColor, updateLogo } = useContext(ThemeContext);

  useLayoutEffect(() => {
    updateAccentColor(frontmatter.accent_color);
    updateLogo(frontmatter.logo);
    console.log('i ran');
  }, [
    frontmatter.accent_color,
    frontmatter.logo,
    updateAccentColor,
    updateLogo,
  ]);

  return (
    <Layout location={location}>
      <IndexPageTemplate data={data} />
    </Layout>
  );
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            accent_color
            logo
          }
        }
      }
    }
    allImageSharp(filter: { fixed: { originalName: { eq: "dog-bg.jpg" } } }) {
      edges {
        node {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  }
`;
