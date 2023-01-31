import Divider from './Divider';

type BannerProps = {
  image: string;
  heading: string;
  description: string;
};
export default function Banner({ image, heading, description }: BannerProps) {
  return (
    <div className="w-full p-5 pt-16 object-cover min-h-[30vh] relative ">
      {/* Shading */}
      <div className="absolute inset-0 bg-black/50 z-10" />
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1544197807-bb503430e22d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="banner dog img"
      />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center pt-10 relative z-10">
        <h1 className="text-zinc-100 text-shadow-lg  shadow-black/20 text-5xl font-playfair mb-5">
          {heading}
        </h1>
        <Divider />
        <p className="text-zinc-300 font-merriweather mt-10">{description}</p>
      </div>
    </div>
  );
}
