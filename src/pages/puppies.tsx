import Layout from '@/components/Layout';
import PuppiesPageTemplate from '@/templates/puppies-page';

export default function Puppies({ location }: any) {
  return (
    <Layout location={location}>
      {/* Margin for nav */}
      <div className="h-16 w-full" />
      <PuppiesPageTemplate />
    </Layout>
  );
}
