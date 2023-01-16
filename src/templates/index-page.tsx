import { getImage } from 'gatsby-plugin-image';
import Hero from '@/components/Hero';

type IndexPageTemplateProps = {
  data: any;
};

export default function IndexPageTemplate({ data }: IndexPageTemplateProps) {
  const heroImage = getImage(data.allImageSharp.edges[0].node);

  return (
    <div>
      {heroImage && (
        <Hero
          tagline="Healthy, happy toy poodles for your loving care."
          description="Please feel free to contact us with any questions or to schedule a visit to meet our poodles in person. We look forward to helping you find the perfect addition to your family."
          image={heroImage}
          ctaLink="/"
          ctaText="Contact Us"
        />
      )}
      <section>
        <p>hi</p>
      </section>
    </div>
  );
}
