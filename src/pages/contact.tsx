import Layout from '@/components/Layout';
import ContactPageTemplate from '@/templates/contact-page';

export default function Contact({ location }: any) {
  return (
    <Layout location={location}>
      {/* Margin for nav */}
      <div className="h-16 w-full" />
      <ContactPageTemplate />
    </Layout>
  );
}
