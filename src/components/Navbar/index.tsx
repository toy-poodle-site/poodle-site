import { NAV_LINKS } from '@/constants';
import { ThemeContext } from '@/providers/ThemeProvider';
import { Link } from 'gatsby';
import { useEffect, useState, useContext, useRef } from 'react';
import Logo from '../Logo';
import NavLink from './NavLink';

export default function Navbar({ location }: any) {
  const [show, setShow] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuOpenRef = useRef<HTMLDivElement>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { accentColor, logo } = useContext(ThemeContext);

  // Hide navbar on scroll down, show on scroll up
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

  // Hide navbar on scroll down, show on scroll up
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  // Check if clicked outside of menu to automatically close
  useEffect(() => {
    const checkIfClickedOutside = (e: any) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (
        isMenuOpen &&
        menuOpenRef &&
        menuOpenRef.current &&
        !menuOpenRef.current.contains(e.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', checkIfClickedOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', checkIfClickedOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Force margin */}
      {/* <div className="h-16" /> */}
      <div
        className={`transition-all duration-300 ${
          show ? 'translate-y-0 ' : '-translate-y-full'
        } fixed top-0 h-16 inset-x-0 z-40 bg-zinc-900/50 shadow-sm backdrop-blur-sm`}
      >
        <div className="w-full h-full max-w-screen-xl mx-auto flex items-center justify-between px-5">
          <Link
            to="/"
            className="hover:contrast-125 cursor-pointer transition-all"
          >
            <h1 className=" flex items-center font-black font-merriweather text-lg text-zinc-200 text-shadow-lg">
              <Logo className="h-8 w-8 mr-3" color="amber" />
              Sim Sim Lovelies
            </h1>
          </Link>
          <div className="hidden md:flex items-center h-full">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                name={link.name}
                to={link.href}
                currentPathname={location.pathname}
              />
            ))}
          </div>
          <div className="md:hidden text-zinc-100">
            <button onClick={() => setIsMenuOpen(true)} className="p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuOpenRef}
        className={`transition-all duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden overflow-y-auto fixed right-0 inset-y-0 w-2/3 z-50 bg-zinc-800 px-5 flex flex-col drop-shadow-xl`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="h-14 p-1 self-end text-zinc-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div className="px-5 pb-10 h-full flex flex-col space-y-10 justify-between">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <div className="flex flex-col w-max cursor-pointer text-zinc-300 hover:contrast-75 ">
              <h2 className="font-merriweather font-black text-xl md:text-3xl text-shadow shadow-black/10 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600">
                SimSimLovelies
              </h2>
              <h3 className="text-amber-400  pt-1 md:pt-3 text-sm">By Sima</h3>
            </div>
          </Link>

          <div className="flex flex-col h-full justify-end">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                name={link.name}
                to={link.href}
                currentPathname={location.pathname}
                mobile
              />
            ))}
          </div>
        </div>
      </div>

      {/* Backdrop blur when menu open */}

      <div
        className={`transition-all duration-300 ${
          isMenuOpen ? 'z-40 backdrop-blur-sm' : 'backdrop-blur-none'
        } md:hidden fixed inset-0`}
      />
    </>
  );
}
