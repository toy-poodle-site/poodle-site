type BlurbProps = {
  heading: string;
  format?: string;
  Image: any;
  text: string;
};

export default function Blurb({
  heading,
  format = 'normal',
  Image,
  text,
}: BlurbProps) {
  return (
    <div className="flex flex-col items-center space-y-3 w-full md:w-1/3 px-5">
      <Image className="text-3xl md:text-5xl text-zinc-800" />
      <h2 className="text-lg md:text-xl font-semibold font-montserrat text-zinc-700">
        {heading}
      </h2>
      <p className="text-justify text-sm font-montserrat text-zinc-700">
        {text}
      </p>
    </div>
  );
}
