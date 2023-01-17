import { GiDogBowl, GiDogHouse, GiJumpingDog } from 'react-icons/gi';
import Blurb from './Blurb';

export default function BlurbsContainer() {
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row">
      <Blurb
        heading="Hypoallergenic"
        Image={GiDogHouse}
        format="normal"
        text="They are known for their hypoallergenic and non-shedding coats, which makes them a great choice for people with allergies. They come in a variety of colors such as white, apricot, black, and silver. Their coat is thick and curly, and it requires regular grooming to keep them looking their best."
      />
      <Blurb
        heading="Companionship"
        Image={GiDogBowl}
        format="normal"
        text="Toy Poodles are known for their sweet and loving personalities. They are incredibly affectionate and love to be around their families. They are excellent with children and make great playmates. They are also known to be quite adaptable and can adjust well to different living situations, whether it be an apartment or a house with a yard."
      />
      <Blurb
        heading="Trainability"
        Image={GiJumpingDog}
        format="normal"
        text="Toy Poodles are also great for show. They have a long history of being used in circuses and stage performances due to their intelligence and trainability. Overall, Toy Poodles are an absolutely fantastic breed for anyone looking for a loving and intelligent companion. They are truly one of a kind!"
      />
    </div>
  );
}
