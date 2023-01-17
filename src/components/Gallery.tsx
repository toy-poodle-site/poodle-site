import Intro from './Intro';

type GalleryProps = {
  heading: string;
  subHeading?: string;
  photos?: [any];
};
export default function Gallery({
  heading,
  subHeading = '',
  photos = ['hi', 'there'],
}: GalleryProps) {
  return (
    <section
      id="gallery"
      className="w-full min-h-screen bg-zinc-800 mt-5 text-zinc-100 p-5"
    >
      <Intro heading={heading} description={subHeading} dark />
    </section>
  );
}
