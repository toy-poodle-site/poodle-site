import { GatsbyImage } from 'gatsby-plugin-image';
import MarkdownContent from '../MarkdownContent';

type BlurbProps = {
  heading: string;
  format?: string;
  Icon: any;
  image: any;
  text: string;
};

export default function Blurb({
  heading,
  format = 'normal',
  Icon,
  image,
  text,
}: BlurbProps) {
  return (
    <div className="flex flex-col items-center space-y-3 w-full md:w-1/3 px-5">
      {image ? (
        <img alt="Blurb image" src={image} className="w-16 h-auto" />
      ) : (
        <Icon className="text-3xl md:text-5xl text-zinc-800" />
      )}
      <h2 className="text-lg md:text-xl font-semibold font-montserrat text-zinc-700">
        {heading}
      </h2>
      <MarkdownContent
        content={text}
        className="text-justify text-sm font-montserrat text-zinc-700 markdown"
      />
    </div>
  );
}
