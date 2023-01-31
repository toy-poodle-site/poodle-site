import { graphql } from 'gatsby';
import Layout from '@/components/Layout';
import AboutPageTemplate from '@/templates/about-page';

export default function About({ location }: any) {
  return (
    <Layout location={location}>
      <AboutPageTemplate data={null} />
    </Layout>
  );
}

// export const aboutPageQuery = graphql`
//   query AboutPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
//       frontmatter {

//       }
//     }
//   }

// `;
