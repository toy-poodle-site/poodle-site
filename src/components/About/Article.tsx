import Divider from '../Divider';
import MarkdownContent from '../MarkdownContent';

type ArticleProps = {
  image: string;
  title: string;
  content: string;
  index?: number;
  lastItem?: boolean;
};

export default function Article({
  image,
  title,
  content,
  index = 0,
  lastItem = false,
}: ArticleProps) {
  const isOdd = index % 2 !== 0;
  return (
    <article
      className={`flex ${index === 0 && 'mt-10'} ${lastItem && 'mb-10'} ${
        isOdd && 'flex-row-reverse'
      } flex-wrap md:px-5 md:flex-nowrap my-5`}
    >
      <img
        src={image}
        alt={title}
        className="w-full md:w-1/2 object-cover h-96 shadow"
      />
      <div className="w-full p-5">
        <h2 className="font-black font-merriweather text-lg text-zinc-700 mb-5">
          {title}
        </h2>
        <Divider />
        <MarkdownContent content={content} className="markdown" />
      </div>
    </article>
  );
}
