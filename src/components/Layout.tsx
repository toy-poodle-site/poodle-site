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
    <div
      className="antialiased flex flex-col relative min-h-screen w-screen overflow-x-hidden"
      id="top"
    >
      <Navbar location={location} />
      <div className="flex-grow">{children}</div>
      <Footer />
    </div>
  );
}
