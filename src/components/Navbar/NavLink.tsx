import { Link } from 'gatsby';

type NavLinkProps = {
  name: string;
  to: string;
  currentPathname: string;
  size?: 'normal' | 'small';
  mobile?: boolean;
};

export default function NavLink({
  name,
  to,
  currentPathname,
  size = 'normal',
  mobile = false,
}: NavLinkProps) {
  const small = size === 'small';

  const normalClass = `${
    currentPathname === to
      ? `border-b-2 border-b-amber-400 text-amber-400`
      : 'border-b-transparent'
  } uppercase font-montserrat ${
    small ? 'py-2 text-xs md:text-sm px-2' : 'h-16 px-3'
  } w-full flex-grow text-sm border-b-2 hover:border-b-amber-400 text-zinc-100 hover:text-amber-400 transition`;

  const mobileClass = `${
    currentPathname === to
      ? `border-l-2 border-l-amber-400 text-amber-400`
      : 'border-l-transparent'
  } uppercase text-sm font-montserrat py-3 text-left px-3 w-full flex-grow border-l-2 hover:border-l-amber-400 text-zinc-100 hover:text-amber-400 transition`;

  return (
    <Link to={to}>
      <button className={mobile ? mobileClass : normalClass}>{name}</button>
    </Link>
  );
}
