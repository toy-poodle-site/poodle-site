import Layout from '@/components/Layout';
import AboutPageTemplate from '@/templates/about-page';

export default function About({ location }: any) {
  return (
    <Layout location={location}>
      {/* Margin for nav */}
      <div className="h-16 w-full" />
      <AboutPageTemplate />
    </Layout>
  );
}
