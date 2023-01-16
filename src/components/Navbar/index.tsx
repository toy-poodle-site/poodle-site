import { Link } from 'gatsby';
import { useEffect, useState } from 'react';
import useGlobalSettings from '@/hooks/useGlobalSettings';

export default function Navbar({ location }: any) {
  console.log(location);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { globals } = useGlobalSettings();

  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  const navLinks = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Puppies',
      href: '/puppies',
    },
    {
      name: 'Payments',
      href: '/payments',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ];
  return (
    <>
      {/* Force margin */}
      {/* <div className="h-16" /> */}
      <div
        className={`transition-all duration-300 ${
          show ? 'translate-y-0 ' : '-translate-y-full'
        } fixed top-0 h-16 inset-x-0 z-40 bg-black/25 shadow-sm backdrop-blur-sm`}
      >
        <div className="w-full h-full max-w-screen-lg mx-auto flex items-center justify-between px-5">
          <h1 className="font-black font-merriweather text-xl text-amber-400">
            Serifima&apos;s Poodles
          </h1>
          <div className="hidden md:flex items-center h-full">
            {navLinks.map((link) => (
              <Link to={link.href} key={link.name}>
                <button
                  className={`${
                    location.pathname === link.href
                      ? 'border-b-2 border-b-amber-400'
                      : 'border-b-transparent'
                  } uppercase font-montserrat h-16 px-3 w-full flex-grow border-b-2  hover:border-b-amber-400 text-white hover:text-amber-400 transition`}
                >
                  {link.name}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
