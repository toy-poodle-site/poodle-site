import Article from '@/components/About/Article';
import Banner from '@/components/Banner';
import Blurb from '@/components/Landing/Blurb';
import BlurbsContainer from '@/components/Landing/BlurbsContainer';
import ContactCTA from '@/components/Landing/ContactCTA';
import Parallax from '@/components/Parallax';
import { GiDogBowl, GiDogHouse, GiJumpingDog } from 'react-icons/gi';

type AboutPageTemplateProps = {
  data: any;
};

const articles = [
  {
    title: 'Our History',
    content:
      'We have been breeding Toy Poodles for many years and have a deep understanding of the breed. Our breeding stock is carefully selected and health tested to ensure that we are producing the healthiest puppies possible. We also take great care in socializing our puppies from a young age to ensure that they are well-adjusted and confident.',
    image:
      'https://images.unsplash.com/photo-1549297161-14f79605a74c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dG95JTIwcG9vZGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    title: 'Our Specialities',
    content:
      'Our Toy Poodles come in a variety of colors including white, apricot, black, and silver. They are hypoallergenic and non-shedding, making them a great choice for people with allergies. They are also small in size, typically weighing between 4 and 6 pounds, making them the perfect size for apartment living or for those who want a small companion.',
    image:
      'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    title: 'Thank You',
    content:
      'We are always happy to answer any questions you may have about the breed and our process. Feel free get in touch with us if you would like to learn more. Thank you for considering a Toy Poodle from our breeding program.',
    image:
      'https://images.unsplash.com/photo-1587628258686-aec7f3d2ad6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRveSUyMHBvb2RsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
  },
];

export default function AboutPageTemplate({ data }: AboutPageTemplateProps) {
  return (
    <>
      <Banner
        heading="About us"
        image="https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        description="Welcome to Sim Sim Lovelies! We are dedicated to breeding healthy and happy Toy Poodles with excellent temperaments. Our goal is to produce high-quality puppies that are not only beautiful, but also well-suited for families and individuals as loving companions."
      />
      <div className="py-40">
        <section className="relative">
          {/* Background pattern */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            // xmlns:svgjs="http://svgjs.com/svgjs"
            width="1280"
            height="1280"
            preserveAspectRatio="none"
            viewBox="0 0 1280 1280"
            className="absolute inset-0 -z-10 w-full h-full"
          >
            <g mask='url("#SvgjsMask1859")' fill="none">
              <rect
                width="1280"
                height="1280"
                x="0"
                y="0"
                fill="url(#SvgjsLinearGradient1860)"
              ></rect>
              <path
                d="M1280 0L1164.38 0L1280 307.17z"
                fill="rgba(255, 255, 255, .1)"
              ></path>
              <path
                d="M1164.38 0L1280 307.17L1280 734.4300000000001L642.8300000000002 0z"
                fill="rgba(255, 255, 255, .075)"
              ></path>
              <path
                d="M642.83 0L1280 734.4300000000001L1280 767.9000000000001L562.3100000000001 0z"
                fill="rgba(255, 255, 255, .05)"
              ></path>
              <path
                d="M562.3100000000001 0L1280 767.9000000000001L1280 779.95L550.47 0z"
                fill="rgba(255, 255, 255, .025)"
              ></path>
              <path
                d="M0 1280L0.68 1280L0 1093.62z"
                fill="rgba(0, 0, 0, .1)"
              ></path>
              <path
                d="M0 1093.62L0.68 1280L393.85 1280L0 768.6299999999999z"
                fill="rgba(0, 0, 0, .075)"
              ></path>
              <path
                d="M0 768.63L393.85 1280L762.99 1280L0 767.47z"
                fill="rgba(0, 0, 0, .05)"
              ></path>
              <path
                d="M0 767.47L762.99 1280L1122.73 1280L0 395.33000000000004z"
                fill="rgba(0, 0, 0, .025)"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1859">
                <rect width="1280" height="1280" fill="#ffffff"></rect>
              </mask>
              <linearGradient
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient1860"
              >
                <stop stopColor="rgba(255, 255, 255, 1)" offset="0"></stop>
                <stop stopColor="rgba(229, 231, 235, 1)" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
          <main className="relative max-w-screen-xl mx-auto flex flex-col border">
            {articles.map((article, index) => (
              <Article
                key={`${article.title}-${index}`}
                title={article.title}
                image={article.image}
                content={article.content}
                index={index}
                lastItem={index === articles.length - 1}
              />
            ))}
          </main>
        </section>
      </div>
      <Parallax image="https://images.unsplash.com/photo-1528362426376-962bcf4f76c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1596&q=80">
        <ContactCTA />
      </Parallax>
    </>
  );
}
