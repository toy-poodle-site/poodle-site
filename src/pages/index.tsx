import IndexPageTemplate from '@/templates/index-page';
import Layout from '@/components/Layout';
import { graphql, HeadFC } from 'gatsby';

import SEO from '@/components/SEO';
import { TIndexQueryResult } from '@/types/';

export default function Home({
  data,
  location,
}: {
  data: TIndexQueryResult;
  location: Location;
}) {
  return (
    <Layout location={location}>
      <IndexPageTemplate data={data} />
    </Layout>
  );
}

export const Head: HeadFC = ({ location }) => (
  <SEO pathname={location.pathname} />
);

// export const pageQuery = graphql`
//   query IndexPageQuery {
//     markdownRemark(frontmatter: { template_key: { eq: "index_page" } }) {
//       frontmatter {
//         hero {
//           coverImage {
//             childImageSharp {
//               gatsbyImageData(layout: FULL_WIDTH, quality: 100)
//             }
//           }
//           cta {
//             cta_link
//             cta_text
//           }
//           description
//           subtitle
//           tagline
//           title
//         }
//         intro {
//           blurb1_heading
//           blurb1_text
//           blurb2_heading
//           blurb3_heading
//           blurb3_text
//           blurb2_text
//           intro_body
//           intro_heading
//           intro_title
//           blurb1_image {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, quality: 100)
//             }
//           }
//           blurb2_image {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, quality: 100)
//             }
//           }
//           blurb3_image {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, quality: 100)
//             }
//           }
//           intro_image {
//             childImageSharp {
//               gatsbyImageData(layout: CONSTRAINED, quality: 100)
//             }
//           }
//         }
//         gallery {
//           gallery_subtitle
//           gallery_title
//           gallery_photos {
//             gallery_image_alt_text
//             gallery_image {
//               childImageSharp {
//                 gatsbyImageData(layout: CONSTRAINED, quality: 100)
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(frontmatter: { template_key: { eq: "index_page" } }) {
      frontmatter {
        hero {
          coverImage
          cta {
            cta_link
            cta_text
          }
          description
          subtitle
          tagline
          title
        }
        intro {
          blurb1_heading
          blurb1_text
          blurb2_heading
          blurb3_heading
          blurb3_text
          blurb2_text
          intro_body
          intro_heading
          intro_title
          blurb1_image
          blurb2_image
          blurb3_image
          intro_image
        }
        gallery {
          gallery_subtitle
          gallery_title
          gallery_photos {
            gallery_image_alt_text
            gallery_image
          }
        }
      }
    }
  }
`;
