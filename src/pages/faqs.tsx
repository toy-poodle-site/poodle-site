import Layout from '@/components/Layout';
import FaqsPageTemplate from '@/templates/faqs-page';

export default function Faqs({ location }: any) {
  return (
    <Layout location={location}>
      {/* Margin for nav */}
      <div className="h-16 w-full" />
      <FaqsPageTemplate />
    </Layout>
  );
}
