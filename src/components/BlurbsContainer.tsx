import { GiDogBowl, GiDogHouse, GiJumpingDog } from 'react-icons/gi';
import Blurb from './Blurb';

export default function BlurbsContainer({ children }: any) {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row">
      {children}
    </div>
  );
}
