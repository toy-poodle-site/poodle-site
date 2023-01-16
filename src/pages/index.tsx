import { useEffect } from 'react';
import IndexPageTemplate from '@/templates/index-page';
import Layout from '@/components/Layout';
import { graphql } from 'gatsby';

import useGlobalSettings from '@/hooks/useGlobalSettings';

export default function Home({ data, location }: any) {
  const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
  const { updateGlobals } = useGlobalSettings();

  useEffect(() => {
    updateGlobals(frontmatter);
  }, []);

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
            global_title
            logo
            title
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
