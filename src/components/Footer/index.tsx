import { NAV_LINKS } from '@/constants';
import { Link } from 'gatsby';
import scrollTo from 'gatsby-plugin-smoothscroll';
import NavLink from '../Navbar/NavLink';

export default function Footer() {
  return (
    <footer className=" bg-zinc-800 text-zinc-100 font-montserrat">
      <main className="p-5">
        <div className="border-b border-zinc-600">
          <Link to={'/'}>
            <div className="flex w-max cursor-pointer items-center space-x-3 text-zinc-300 hover:contrast-75 ">
              <h2 className="font-merriweather font-black text-xl md:text-3xl text-shadow shadow-black/10 bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-pink-600 to-purple-600">
                SimSimLovelies
              </h2>
              <h3 className="text-amber-400  pt-1 md:pt-3 text-sm">By Sima</h3>
            </div>
          </Link>
          <div>
            <p className="font-montserrat text-base font-light text-zinc-300">
              Healthy, happy toy poodles for your loving care.
            </p>
          </div>
          <div className="py-5 flex flex-col md:flex-row md:items-center justify-between space-y-5 md:space-y-0 md:space-x-5">
            <div className="flex flex-wrap items-center h-full">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.href}
                  name={link.name}
                  currentPathname={link.name}
                  size="small"
                />
              ))}
            </div>
            <button
              onClick={() => scrollTo('#top')}
              className="rounded-full w-max border border-amber-400 py-2 px-3 font-bold text-amber-400 shadow transition-all hover:bg-amber-400 hover:text-zinc-900  hover:shadow-amber-400/30"
            >
              Back to Top &#9757;
            </button>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="flex flex-col space-y-1 md:space-y-0 md:flex-row md:items-center justify-between pt-5 text-xs text-zinc-500">
          <p className="text-zinc-300 text-sm">
            &copy; 2023 SimSimLovelies. All Rights Reserved.
          </p>
          <a href="https://github.com/MarkyJD" title="Marky JD Github link">
            Created by MarkyJD
          </a>
        </div>
      </main>
    </footer>
  );
}
