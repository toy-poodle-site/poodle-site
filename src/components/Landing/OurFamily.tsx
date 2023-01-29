import Intro from '../Intro';
import { useStaticQuery, graphql } from 'gatsby';
import { TOurFamily } from '@/types';
import OurFamilyPhoto from './OurFamilyPhoto';
import { getImage } from 'gatsby-plugin-image';

export default function OurFamily() {
  const data = useStaticQuery(graphql`
    query OurFamilyQuery {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              our_family {
                our_family_photos {
                  our_family_about_dog
                  our_family_dog_image
                  our_family_dog_name
                }
                our_family_subtitle
                our_family_title
              }
            }
          }
        }
      }
    }
  `);

  const {
    our_family: ourFamily,
  }: {
    our_family: TOurFamily;
  } = data.allMarkdownRemark.edges[0].node.frontmatter;

  return (
    <div className="w-full bg-zinc-700 py-5">
      <Intro
        dark
        title={ourFamily.our_family_title}
        heading={ourFamily.our_family_subtitle}
        description={ourFamily.our_family_subtitle}
      />
      <section className=" w-full mx-auto pb-5 flex flex-wrap justify-center">
        {ourFamily.our_family_photos.map((photo) => (
          <OurFamilyPhoto
            key={photo.our_family_dog_name}
            image={photo.our_family_dog_image}
            name={photo.our_family_dog_name}
            text={photo.our_family_about_dog}
          />
        ))}
      </section>
    </div>
  );
}
