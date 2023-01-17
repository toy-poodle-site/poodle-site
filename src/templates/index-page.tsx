import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Blurb from '@/components/Blurb';
import { GiDogBowl, GiDogHouse, GiJumpingDog } from 'react-icons/gi';
import BlurbsContainer from '@/components/BlurbsContainer';
import Gallery from '@/components/Gallery';

type IndexPageTemplateProps = {
  data: any;
};

export default function IndexPageTemplate({ data }: IndexPageTemplateProps) {
  const heroImage = getImage(data.allImageSharp.edges[0].node);
  // const logo = getImage(data.allImageSharp.edges[0].node);

  return (
    <>
      {heroImage && (
        <Hero
          title="Sim Sim Lovelies"
          tagline="Healthy, happy toy poodles for your loving care."
          description="Please feel free to contact us with any questions or to schedule a visit to meet our poodles in person. We look forward to helping you find the perfect addition to your family."
          image={heroImage}
          ctaLink="/"
          ctaText="See Our Puppies"
          ctaAltLink="/contact"
          ctaAltText="Contact Us"
        />
      )}

      {/* Intro and blurbs */}
      <section className="relative w-full min-h-screen">
        {/* Background */}
        <svg
          className="w-full absolute z-0"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          // xmlns:xlink="http://www.w3.org/1999/xlink"
          // xmlns:svgjs="http://svgjs.com/svgjs"
          width="1280"
          height="1920"
          preserveAspectRatio="none"
          viewBox="0 0 1280 1920"
        >
          <g mask='url("#SvgjsMask1008")' fill="none">
            <rect
              width="1280"
              height="1920"
              x="0"
              y="0"
              fill="rgba(241, 241, 241, 1)"
            ></rect>
            <path
              d="M0,488.042C107.279,499.4,227.391,553.332,317.039,493.322C406.801,433.235,395.551,299.096,433.399,197.927C468.054,105.293,525.797,22.592,530.108,-76.218C534.995,-188.226,537.753,-317.881,459.403,-398.075C381.178,-478.141,246.533,-442.364,139.709,-475.806C30.174,-510.097,-62.479,-618.265,-175.222,-596.751C-288.342,-575.165,-356.387,-460.727,-424.792,-368.084C-488.819,-281.37,-558.704,-187.819,-556.739,-80.047C-554.85,23.564,-464.474,98.502,-414.628,189.354C-369.165,272.218,-353.334,375.222,-276.645,430.467C-198.64,486.66,-95.604,477.92,0,488.042"
              fill="#d9d9d9"
            ></path>
            <path
              d="M1280 2667.551C1418.132 2649.029 1528.077 2560.299 1656.1019999999999 2505.226 1814.859 2436.933 2024.501 2447.009 2122.923 2304.95 2221.811 2162.218 2170.34 1967.397 2148.0280000000002 1795.196 2125.434 1620.8229999999999 2104.772 1437.916 1992.993 1302.188 1880.046 1165.042 1708.555 1089.731 1535.157 1051.0149999999999 1368.895 1013.892 1196.394 1031.516 1035.842 1088.475 881.198 1143.338 754.63 1247.798 642.581 1367.673 526.891 1491.444 407.44399999999996 1623.424 379.60900000000004 1790.5430000000001 351.52700000000004 1959.146 408.226 2130.734 490.539 2280.535 569.034 2423.387 686.608 2543.852 832.9649999999999 2615.6 970.4490000000001 2682.999 1128.242 2687.9 1280 2667.551"
              fill="#ffffff"
            ></path>
          </g>
          <defs>
            <mask id="SvgjsMask1008">
              <rect width="1280" height="1920" fill="#ffffff"></rect>
            </mask>
          </defs>
        </svg>

        {/* Layer atop svg */}
        <div className="absolute inset-0">
          <div className="max-w-screen-xl mx-auto p-5 w-full" id="intro">
            <Intro
              heading="What are Toy Poodles?"
              description="Toy Poodles are absolutely amazing! They are a small and highly intelligent breed that make the perfect companion for families and individuals alike. One of the best things about Toy Poodles is that they are incredibly trainable. They are eager to please and love learning new things, making them a breeze to train. They excel in obedience training, agility, and even therapy work."
            />
            <BlurbsContainer />
          </div>
          {/* Gallery */}
          <Gallery
            heading="Our Toy Poodles"
            subHeading="We have a variety of colors and sizes available. Click on a photo to learn more about each of our poodles."
            photos={['hi']}
          />
        </div>
      </section>
    </>
  );
}
