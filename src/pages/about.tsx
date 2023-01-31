import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import AboutPageTemplate from '@/templates/about-page';
import { TAboutPageQueryResult } from '@/types';

export default function About({
  location,
  data,
}: {
  location: Location;
  data: TAboutPageQueryResult;
}) {
  return (
    <Layout location={location}>
      <AboutPageTemplate data={data} />
    </Layout>
  );
}

export const aboutPageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { template_key: { eq: "about_page" } }) {
      frontmatter {
        title
        template_key
        contact_parallax {
          image
          show
        }
        about_banner {
          heading
          image
          subtitle
        }
        articles {
          article {
            content
            heading
            image
          }
        }
      }
    }
  }
`;
