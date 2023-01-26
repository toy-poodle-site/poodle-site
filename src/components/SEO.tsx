import useSiteMetadata from '@/hooks/useSiteMetadata';
import React from 'react';

type SEOProps = {
  title?: string;
  description?: string;
  pathname?: string;
  children?: React.ReactNode;
};

export default function SEO({
  title,
  description,
  pathname,
  children,
}: SEOProps) {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    author,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ''}`,
    author,
  };

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="author" content={seo.author} />
      <link id="favicon" rel="icon" href="/favicon.ico" type="image/x-icon" />
      {children}
    </>
  );
}
