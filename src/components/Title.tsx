import { ReactNode } from 'react';

type TitleProps = {
  children: ReactNode;
};

export default function Title({ children }: TitleProps) {
  return <h1 className="text-blue-800 text-3xl">{children}</h1>;
}
