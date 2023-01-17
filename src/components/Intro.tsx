import Divider from './Divider';

type IntroProps = {
  heading: string;
  description: string;
  dark?: boolean;
};

export default function Intro({
  heading,
  description,
  dark = false,
}: IntroProps) {
  return (
    <div className="max-w-screen-md mx-auto flex flex-col items-center space-y-5 my-5">
      <h1
        className={`text-2xl md:text-3xl text-merriweather xl:text-4xl text-center font-light text-shadow shadow-black/10 ${
          dark ? 'text-zinc-100' : 'text-zinc-600'
        }`}
      >
        {heading}
      </h1>
      <Divider />
      <p
        className={`text-center font-montserrat py-5 ${
          dark ? 'text-zinc-300' : 'text-zinc-500'
        }`}
      >
        {description}
      </p>
    </div>
  );
}
