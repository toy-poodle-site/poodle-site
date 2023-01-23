import Intro from './Intro';
import { useStaticQuery, graphql } from 'gatsby';
import { TGalleryPhoto } from '@/types';
import GalleryPhoto from './GalleryPhoto';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useState } from 'react';

type GalleryProps = {
  title: string;
  subtitle?: string;
  photos?: [TGalleryPhoto] | null;
};
export default function Gallery({
  title,
  subtitle = '',
  photos = null,
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

  return (
    <section id="gallery" className="w-full bg-zinc-50 p-5">
      <Intro title={title} heading={subtitle} description={subtitle} />
      <div className="max-w-screen-md mx-auto py-5">
        {photos && photos.length > 0 && (
          <Carousel
            className="drop-shadow-md"
            emulateTouch
            showThumbs={false}
            autoPlay
            stopOnHover
            showStatus={false}
            infiniteLoop
            onClickItem={(item, i) => console.log(item, i)}
          >
            {photos.map((photo, i) => (
              <GalleryPhoto
                key={`${photo.gallery_image_alt_text}-${i}`}
                galleryImage={getImage(photo.gallery_image)}
                galleryImageAltText={photo.gallery_image_alt_text}
              />
            ))}
          </Carousel>
        )}
      </div>
    </section>
  );
}
