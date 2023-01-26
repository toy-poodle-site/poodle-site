import { toKebabCase } from '@/utilities';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import { BiArrowToRight } from 'react-icons/bi';

type OurFamilyPhotoProps = {
  name: string;
  image: any;
  text: {
    html: any;
  };
};

export default function OurFamilyPhoto({
  name,
  image,
  text,
}: OurFamilyPhotoProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-96 p-5 group ">
      <div className="w-full h-full flex flex-col rounded-md overflow-hidden bg-zinc-200 drop-shadow-xl">
        <div className="h-[250px] overflow-hidden">
          <GatsbyImage
            image={image}
            alt={name}
            className="object-cover h-full w-full transition-all duration-[3000ms] group-hover:scale-110"
          />
        </div>

        <div className="flex-1 p-5">
          <h2 className="mb-2 font-montserrat text-xl font-bold text-zinc-700 group-hover:underline underline-offset-2 decoration-amber-400 decoration-4">
            {name}
          </h2>
          <div
            className="w-full text-sm text-zinc-600 font-montserrat prose markdown"
            dangerouslySetInnerHTML={{ __html: text.html }}
          />
        </div>
        <Link to={`/our-dogs#${toKebabCase(name)}`}>
          <button className="btn-learn-more-amber m-5 flex items-center">
            Learn More
            <span className="text-xl ml-1">
              <BiArrowToRight />
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
}
