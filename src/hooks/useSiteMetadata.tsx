import { graphql, useStaticQuery } from 'gatsby';

type ReturnValue = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      image: string;
      siteUrl: string;
      author: string;
    };
  };
};

export default function useSiteMetadata() {
  const data = useStaticQuery<ReturnValue>(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          image
          siteUrl
          author
        }
      }
    }
  `);

  return data.site.siteMetadata;
}
