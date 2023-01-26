import { FaQuoteLeft } from 'react-icons/fa';
import { format } from 'date-fns';

type TestimonialProps = {
  name: string;
  date: string;
  review: string;
  index: number;
};
export default function Testimonial({
  name,
  date,
  review,
  index,
}: TestimonialProps) {
  const isOddRow = index % 2 === 0;

  return (
    <div className="bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600 rounded-lg relative">
      <div className={`bg-white shadow rounded-md p-3 py-5 m-0.5`}>
        <FaQuoteLeft className="text -top-7 absolute text-5xl text-amber-400 opacity-30 z-0" />
        <h3 className="font-montserrat font-semibold text-zinc-700 flex items-center justify-between">
          {name}
          <span className="ml-3 text-xs font-normal text-zinc-500">
            {format(new Date(date), 'MMMM do, yyyy')}
          </span>
        </h3>
        <p className="font-montserrat text-sm mt-3">{`"${review}"`}</p>
      </div>
    </div>
  );
}
