import { GatsbyImage } from 'gatsby-plugin-image';
import Divider from './Divider';

type IntroProps = {
  heading: string;
  description: string;
  image?: any;
};

export default function Intro({
  heading,
  description,
  image = null,
}: IntroProps) {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-5 my-5 px-5">
      <h1 className="text-2xl md:text-3xl text-merriweather xl:text-4xl text-center font-light text-shadow shadow-black/10 text-zinc-600">
        {heading}
      </h1>
      <Divider />

      {image ? (
        <div className="md:flex  md:space-x-5 w-full py-5">
          <div className="w-full h-full flex-1 overflow-hidden">
            <GatsbyImage
              alt="hero"
              image={image}
              className="h-full shadow hover:scale-110 transition-all duration-1000"
            />
          </div>
          <div className="py-5 md:w-1/2 h-full">
            <h2 className="font-merriweather font-light text-2xl mb-5 text-zinc-600">
              We are{' '}
              <span className="font-black text-shadow shadow-black/10 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600">
                SimSimLovelies
              </span>
            </h2>
            <p className="font-montserrat text-zinc-500 mt-5">{description}</p>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-center font-montserrat py-5 text-zinc-500">
            {description}
          </p>
        </div>
      )}
    </div>
  );
}
