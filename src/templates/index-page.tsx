import Hero from '@/components/Landing/Hero';
import Intro from '@/components/Intro';
import Blurb from '@/components/Landing/Blurb';
import { GiDogBowl, GiDogHouse, GiJumpingDog } from 'react-icons/gi';
import BlurbsContainer from '@/components/Landing/BlurbsContainer';
import Gallery from '@/components/Landing/Gallery';
import PuppiesForSale from '@/components/Landing/PuppiesForSale';
import { TIndexQueryResult } from '@/types';
import OurFamily from '@/components/Landing/OurFamily';
import Parallax from '@/components/Parallax';
import ContactCTA from '@/components/Landing/ContactCTA';
import FAQShort from '@/components/Landing/FAQShort';
import Testimonials from '@/components/Landing/Testimonials';
import { getImage } from 'gatsby-plugin-image';

type IndexPageTemplateProps = {
  data: TIndexQueryResult;
};

export default function IndexPageTemplate({ data }: IndexPageTemplateProps) {
  const { intro, gallery, hero } = data.markdownRemark.frontmatter;
  console.log(data.markdownRemark.frontmatter.hero.coverImage);

  return (
    <div className="h-full w-full">
      <Hero
        title={hero.title}
        subtitle={hero.subtitle}
        tagline={hero.tagline}
        description={hero.description}
        image={hero.coverImage}
        ctaLink="/"
        ctaText="See Our Puppies"
        ctaAltLink={hero.cta.cta_link}
        ctaAltText={hero.cta.cta_text}
      />
      {/* Intro Section */}
      <section className="relative pt-5" id="intro">
        {/* background pattern */}
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
        <div className="relative bg-black/">
          <Intro
            image={intro.intro_image}
            heading={intro.intro_heading}
            title={intro.intro_title}
            description={intro.intro_body}
          />
          <BlurbsContainer>
            <Blurb
              heading={intro.blurb1_heading}
              Icon={GiDogHouse}
              image={intro.blurb1_image}
              format="normal"
              text={intro.blurb1_text}
            />
            <Blurb
              heading={intro.blurb2_heading}
              Icon={GiDogBowl}
              image={intro.blurb2_image}
              format="normal"
              text={intro.blurb2_text}
            />
            <Blurb
              heading={intro.blurb3_heading}
              Icon={GiJumpingDog}
              image={intro.blurb3_image}
              format="normal"
              text={intro.blurb3_text}
            />
          </BlurbsContainer>
          <PuppiesForSale />
          <OurFamily />
          <Testimonials />
          <FAQShort />
          <Parallax image="https://wallpapercave.com/wp/wp7310478.jpg">
            <ContactCTA />
          </Parallax>
          <Gallery
            title={gallery.gallery_title}
            subtitle={gallery.gallery_subtitle}
            photos={gallery.gallery_photos}
          />
        </div>
      </section>
    </div>
  );
}
