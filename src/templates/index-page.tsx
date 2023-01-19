import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Hero from '@/components/Hero';
import Intro from '@/components/Intro';
import Blurb from '@/components/Blurb';
import { GiDogBowl, GiDogHouse, GiJumpingDog } from 'react-icons/gi';
import BlurbsContainer from '@/components/BlurbsContainer';
import Gallery from '@/components/Gallery';
import PuppiesForSale from '@/components/PuppiesForSale';

type IndexPageTemplateProps = {
  data: any;
};

export default function IndexPageTemplate({ data }: IndexPageTemplateProps) {
  const heroImage = getImage(data.allImageSharp.edges[0].node);
  console.log(heroImage);

  return (
    <div className="h-full w-full">
      {heroImage && (
        <Hero
          title="Sim Sim Lovelies"
          subtitle="Registered MDBA Breeder - 22084"
          tagline="Healthy, happy toy poodles for your loving care."
          description="We are dedicated to breeding healthy and happy Toy Poodles with excellent temperaments. Our goal is to produce high-quality puppies that are not only beautiful, but also well-suited for families and individuals as loving companions."
          image={heroImage}
          ctaLink="/"
          ctaText="See Our Puppies"
          ctaAltLink="/contact"
          ctaAltText="Contact Us"
        />
      )}

      {/* Intro Section */}
      <section className="relative py-5" id="intro">
        <svg
          className="inset-0 absolute w-full -z-10"
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
        <div className="relative">
          <Intro
            image={heroImage}
            heading="Who are we?"
            description="Here at SimSimLovelies, we are dedicated to raising happy, healthy toy poodles. We take great care in breeding and raising our dogs, ensuring that each one receives the love, attention, and veterinary care they need to thrive. Our puppies are reared in our home and are part of our family, extensively socialised to people, sounds, surfaces, smells, animals and evironments. All Puppies are Registered with MDBA with limited Pedigree (mains can be considered)."
          />
          <BlurbsContainer>
            <Blurb
              heading="What we do"
              Image={GiDogHouse}
              format="normal"
              text="We are a registered MDBA Breeder located in Connewarre, Vic. Our breeding program focuses on producing toy poodles with excellent temperaments and conformation. We carefully select breeding pairs to produce puppies that are not only beautiful, but also well-suited for a variety of homes, including those with children and other pets."
            />
            <Blurb
              heading="How we do it"
              Image={GiDogBowl}
              format="normal"
              text="We have been breeding Toy Poodles for many years and have a deep understanding of the breed. Our breeding stock is carefully selected and health tested to ensure that we are producing the healthiest puppies possible. We also take great care in socializing our puppies from a young age to ensure that they are well-adjusted and confident."
            />
            <Blurb
              heading="Why we do it"
              Image={GiJumpingDog}
              format="normal"
              text="We have a deep love and appreciation for the toy poodle breed and want to share that love with others. We take pride in raising happy, healthy toy poodles that will bring joy and companionship to families. Overall, we believe that breeding toy poodles is a rewarding experience that allows us to make a positive impact in the lives of both the dogs and their new families. We do it because we are passionate about the breed and want to share that passion with others."
            />
          </BlurbsContainer>
          <PuppiesForSale />
          <Gallery
            heading="Some of our Previous Litters"
            subHeading="Click on a photo to learn more about each of our poodles."
            photos={['hi']}
          />
        </div>
      </section>
    </div>
  );
}
