import Layout from '@/components/Layout';
import OurDogsPageTemplate from '@/templates/our-dogs-page';

export default function OurDogs({ location }: any) {
  return (
    <Layout location={location}>
      {/* Margin for nav */}
      <div className="h-16 w-full" />
      <OurDogsPageTemplate />
    </Layout>
  );
}
