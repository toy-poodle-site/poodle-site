import Divider from '../Divider';
import FAQ from '../FAQ';
import { Link } from 'gatsby';

export default function FAQShort() {
  const faqs = [
    {
      question:
        'What is the difference between a Toy Poodle and a Miniature Poodle?',
      answer:
        'A Toy Poodle is the smallest size of Poodle, typically weighing between 4 and 6 pounds. A Miniature Poodle is slightly larger, typically weighing between 15 and 17 pounds.',
    },
    {
      question: 'Are Toy Poodles hypoallergenic?',
      answer:
        'Yes, Toy Poodles are considered hypoallergenic as they have a non-shedding coat that produces less dander.',
    },
    {
      question: 'How long do Toy Poodles live?',
      answer: 'The average lifespan of a Toy Poodle is 12-15 years.',
    },
    {
      question: 'Do Toy Poodles make good family pets?',
      answer:
        'Yes, Toy Poodles are known for their affectionate and loving personalities. They are great with children and make excellent companions.',
    },
    {
      question: 'Do Toy Poodles need a lot of exercise?',
      answer:
        'Toy Poodles are a small breed and do not require a lot of exercise. They are content with a daily walk or playtime in the yard.',
    },
  ];

  return (
    <section className="bg-zinc-200">
      <main className="max-w-screen-lg w-full mx-auto flex flex-wrap py-16 md:py-32 px-5">
        <aside className="w-full md:w-1/3 mb-10 md:px-5">
          <h2 className="mb-5 font-bold text-zinc-600 text-2xl md:text-3xl font-merriweather xl:text-4xl text-shadow-sm shadow-black/10">
            Frequently Asked Questions
          </h2>
          <Divider />
          <h3 className="font-montserrat text-zinc-700 my-5">
            Some of the most common questions we get here at Sim Sim Lovelies
          </h3>
          <Link to="/faqs">
            <button className="btn-learn-more">More FAQs</button>
          </Link>
        </aside>
        <article className="w-full md:w-2/3 flex flex-col">
          {faqs.map((faq, i) => (
            <FAQ
              key={i}
              index={i}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </article>
      </main>
    </section>
  );
}
