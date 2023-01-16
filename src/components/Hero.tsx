import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

type HeroProps = {
  tagline: string;
  description: string;
  image: any;
  ctaLink: string;
  ctaText: string;
};

export default function Hero({
  tagline,
  description,
  image,
  ctaLink,
  ctaText,
}: HeroProps) {
  return (
    <div className="h-screen relative">
      <GatsbyImage image={image} alt="Hero Image" className="h-screen" />
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
        <div className="max-w-screen-xl w-full md:h-1/2 flex justify-end">
          <div className="rounded bg-black/30 md:bg-black/0 p-5 w-full md:w-1/2 h-full flex flex-col justify-center space-y-5">
            <h1 className="font-playfair text-shadow shadow-black/25 text-2xl md:text-3xl xl:text-5xl font-black text-white">
              {tagline}
            </h1>
            <hr className="w-16 h-[2px] rounded  bg-amber-400 border-0" />
            <h2 className="text-base text-shadow shadow-black/25 font-montserrat md:text-lg xl:text-xl text-gray-200">
              {description}
            </h2>
            <Link to={ctaLink}>
              <button className="transition-all font-montserrat px-5 py-2 border-2 border-amber-400 rounded-md bg-black/25 shadow hover:text-gray-700 hover:bg-amber-400 text-lg font-semibold text-amber-400">
                {ctaText}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
