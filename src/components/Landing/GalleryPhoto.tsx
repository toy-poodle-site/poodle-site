import { GatsbyImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';

type GalleryPhotoType = {
  galleryImage: any;
  galleryImageAltText: string;
};

export default function GalleryPhoto({
  galleryImage,
  galleryImageAltText,
}: GalleryPhotoType) {
  return (
    <div className="group relative">
      <GatsbyImage
        image={galleryImage}
        alt={galleryImageAltText}
        className="h-[60vh] xl:h-[50vh] w-full object-cover group-hover:contrast-50 transition-all duration-300"
      />
      <div className="absolute bottom-16 px-3 py-2 rounded w-max mx-auto inset-x-0 text-center invisible group-hover:visible cursor-pointer">
        <Link to="/about">
          <button className=" font-montserrat px-5 py-2 border-2 border-sky-800 rounded-md hover:shadow-xl shadow text-gray-100 bg-sky-800 text-sm font-normal hover:bg-sky-900 hover:border-sky-900">
            {galleryImageAltText}
          </button>
        </Link>
      </div>
    </div>
  );
}
