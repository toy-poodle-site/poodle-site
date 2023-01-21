import { useContext, useLayoutEffect } from 'react';
import IndexPageTemplate from '@/templates/index-page';
import Layout from '@/components/Layout';
import { graphql, HeadFC } from 'gatsby';

import { ThemeContext } from '@/providers/ThemeProvider';
import SEO from '@/components/SEO';

export default function Home({ data, location }: any) {
  // const frontmatter = data.allMarkdownRemark.edges[0].node.frontmatter;
  // const { updateAccentColor, updateLogo } = useContext(ThemeContext);

  // useLayoutEffect(() => {
  //   updateAccentColor(frontmatter.accent_color);
  //   updateLogo(frontmatter.logo);
  //   console.log('i ran');
  // }, [
  //   frontmatter.accent_color,
  //   frontmatter.logo,
  //   updateAccentColor,
  //   updateLogo,
  // ]);

  return (
    <Layout location={location}>
      <IndexPageTemplate data={data} />
    </Layout>
  );
}

export const Head: HeadFC = ({ location }) => (
  <SEO pathname={location.pathname} />
);

export const query = graphql`
  query MyQuery {
    allImageSharp(filter: { fixed: { originalName: { eq: "dog-bg.jpg" } } }) {
      edges {
        node {
          gatsbyImageData(layout: FULL_WIDTH, quality: 100)
        }
      }
    }
  }
`;

// export const pageQuery = graphql`
//   query MyQuery {
//     markdownRemark(frontmatter: { template_key: { eq: "index_page" } }) {
//       frontmatter {
//         template_key
//         hero {
//           title
//           subtitle
//           tagline
//           description
//           cover_image
//           cta {
//             cta_text
//             cta_link
//           }
//         }
//         intro {
//           intro_title
//           intro_image
//           intro_heading
//           blurb1_image
//           blurb2_image
//           blurb3_image
//           blurb3_text
//           blurb2_text
//           intro_body
//           blurb1_text
//           blurb1_heading
//           blurb2_heading
//           blurb3_heading
//         }
//         gallery {
//           gallery_title
//           gallery_subtitle
//           gallery_photos {
//             gallery_image_alt_text
//             gallery_image
//           }
//         }
//       }
//     }
//   }
// `;
