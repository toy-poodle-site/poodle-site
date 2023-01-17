import { ReactNode } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

type LayoutProps = {
  children: ReactNode;
  location: any;
};

export default function Layout({ children, location }: LayoutProps) {
  console.log(location);
  return (
    <div className="antialiased min-h-screen flex flex-col">
      <Navbar location={location} />
      <div className="flex-1">{children}</div>
      {/* <Footer /> */}
    </div>
  );
}
