import { useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';

type FAQProps = {
  question: string;
  answer: any;
  index: number;
};
export default function FAQ({ question, answer, index }: FAQProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isOddRow = index % 2 === 0;

  const toggleAnswer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div
      role="button"
      onClick={toggleAnswer}
      className="relative p-3 py-5 border-b border-zinc-400 group"
    >
      <div className="flex space-x-3">
        <div className="text-2xl text-zinc-700 group-hover:text-sky-800">
          {isOpen ? <BiMinus /> : <BiPlus />}
        </div>
        <h3 className="font-montserrat font-semibold text-zinc-700 group-hover:text-sky-800 flex items-center justify-between">
          {question}
        </h3>
      </div>
      <p
        className={`font-montserrat transition-all duration-500 ease-in-out overflow-hidden text-sm pl-9 ${
          !isOpen ? 'h-0 pt-0' : 'h-24 pt-5'
        }`}
      >
        {answer}
      </p>
    </div>
  );
}
