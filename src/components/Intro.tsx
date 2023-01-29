import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import Divider from './Divider';
import MarkdownContent from './MarkdownContent';

type IntroProps = {
  heading: string;
  title: string;
  description: any;
  image?: any;
  dark?: boolean;
};

export default function Intro({
  heading,
  dark = false,
  title,
  description,
  image = null,
}: IntroProps) {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-5 pt-5 px-5">
      <h1
        className={`text-2xl md:text-3xl font-merriweather xl:text-4xl text-center font-bold text-shadow-sm shadow-black/10 ${
          dark ? 'text-zinc-50' : 'text-zinc-600'
        }`}
      >
        {title}
      </h1>
      <Divider />

      {image ? (
        <div className="md:flex items-center md:space-x-5 w-full py-5">
          <div className="w-full h-full flex-1 overflow-hidden">
            <img
              alt="hero"
              src={image}
              className="h-full shadow hover:scale-110 transition-all duration-1000"
            />
          </div>
          <div className="py-5 md:w-1/2 h-full">
            <h2 className="font-merriweather font-bold text-lg mb-5 text-zinc-600">
              <span className="font-black text-shadow shadow-black/10 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600">
                {heading}
              </span>
            </h2>
            <MarkdownContent
              content={description}
              className="font-montserrat text-zinc-500 my-5 prose"
            />
            <Link to="/about">
              <button className="transition-all font-montserrat px-5 py-2 border-2 border-sky-800 rounded-md hover:shadow-xl shadow text-gray-100 bg-sky-800 text-sm font-normal hover:bg-sky-900 hover:border-sky-900">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="  h-full">
          <h2 className="font-merriweather font-bold text-lg mb-5 text-zinc-600">
            <span className="font-black text-shadow shadow-black/10 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600">
              {heading}
            </span>
          </h2>
        </div>
      )}
    </div>
  );
}
