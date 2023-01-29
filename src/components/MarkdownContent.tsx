import showdown from 'showdown';

type MarkdownContentProps = {
  content: string;
  className?: string;
};

const converter = new showdown.Converter();

export default function MarkdownContent({
  content,
  className = '',
}: MarkdownContentProps) {
  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: converter.makeHtml(content) }}
    />
  );
}
