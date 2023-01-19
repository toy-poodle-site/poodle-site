import Intro from './Intro';
import { useStaticQuery, graphql } from 'gatsby';

type GalleryProps = {
  heading: string;
  subHeading?: string;
  photos?: [any];
};
export default function Gallery({
  heading,
  subHeading = '',
  photos = ['hi', 'there'],
}: GalleryProps) {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  console.log(data);

  return (
    <section
      id="gallery"
      className="w-full min-h-screen bg-white text-zinc-100 p-5"
    >
      <Intro heading={heading} description={subHeading} />
      {data && (
        <h1 className="text-white text-5xl text-center">
          {data.site.siteMetadata.title}
        </h1>
      )}
    </section>
  );
}
