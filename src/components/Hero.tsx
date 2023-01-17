import { Link } from 'gatsby';
import { BiChevronsDown } from 'react-icons/bi';
import { GatsbyImage } from 'gatsby-plugin-image';
import scrollTo from 'gatsby-plugin-smoothscroll';
import Divider from './Divider';

type HeroProps = {
  title: string;
  tagline: string;
  description: string;
  image: any;
  ctaLink: string;
  ctaText: string;
  ctaAltLink: string;
  ctaAltText: string;
};

export default function Hero({
  title,
  tagline,
  description,
  image,
  ctaLink,
  ctaText,
  ctaAltLink,
  ctaAltText,
}: HeroProps) {
  return (
    <div className="h-screen relative group">
      <BiChevronsDown
        onClick={() => scrollTo('#intro')}
        className="text-5xl text-amber-100 absolute mx-auto inset-x-0 bottom-5 z-10 cursor-pointer animate-fade-in-down "
      />
      <GatsbyImage image={image} alt="Hero Image" className="h-screen" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <div className="max-w-screen-xl w-full flex justify-end">
          <div className="rounded bg-black/30 md:bg-black/0 p-5 w-full md:w-1/2 h-full flex flex-col justify-center space-y-5">
            <h1 className="font-playfair text-shadow-lg shadow-black/25 text-3xl md:text-5xl xl:text-7xl font-black text-amber-50">
              {title}
              <span className="text-slate-100 block text-sm font-light font-merriweather">
                Registered MDBA member 2023
              </span>
            </h1>
            <h2 className="font-playfair text-shadow shadow-black/25 text-xl md:text-2xl xl:text-3xl font-normal text-white">
              {tagline}
            </h2>
            {/* <hr className="w-16 h-[2px] rounded  bg-amber-400 border-0" /> */}
            <Divider />
            <h3 className="text-base text-shadow shadow-black/25 font-montserrat md:text-lg xl:text-xl text-gray-200">
              {description}
            </h3>
            <div className="flex space-x-3">
              <button
                onClick={() => scrollTo('#gallery')}
                className="transition-all font-montserrat px-5 py-2 border-2 border-amber-400 rounded-md hover:shadow-xl shadow text-gray-700 bg-amber-400 text-lg font-semibold hover:bg-amber-300 hover:border-amber-300"
              >
                {ctaText}
              </button>

              <Link to={ctaAltLink}>
                <button className="transition-all font-montserrat px-5 py-2 border-2 border-amber-400 rounded-md bg-black/25 hover:shadow-xl shadow hover:text-gray-700 hover:bg-amber-400 text-lg font-semibold text-amber-400">
                  {ctaAltText}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
