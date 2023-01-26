import Divider from '../Divider';
import Testimonial from './Testimonial';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ace Ventura',
      date: '2022-12-25',
      review:
        'I had come last year on Christmas Day to pick up my puppy and the breeder was very Russian. Many thanks!',
    },
    {
      name: 'Neil Young',
      date: '2022-07-18',
      review:
        'We purchased a toy poodle puppy from this breeder and we are extremely happy with our decision. Our puppy is beautiful, healthy, and well-socialized. The breeder was very helpful and patient with us throughout the process. We would definitely recommend this breeder to anyone looking for a toy poodle puppy.',
    },
    {
      name: 'Frank Sinatra',
      date: '2022-07-12',
      review:
        'Our toy poodle puppy is the cutest and most well-behaved dog we have ever owned. She is so easy to train and always eager to please. We highly recommend this breed to anyone looking for a loving and loyal companion.',
    },
    {
      name: 'Anthony Albanese',
      date: '2022-05-13',
      review:
        'We absolutely adore our toy poodle puppy! She is so playful and full of energy, and she has brought so much joy and laughter into our lives. We are so grateful to have her as a member of our family.',
    },
  ];

  return (
    <section className="bg-zinc-50">
      <main className="max-w-screen-lg w-full mx-auto flex flex-wrap py-16 md:py-32 px-5">
        <aside className="w-full md:w-1/3 mb-10 md:px-5">
          <h2 className="mb-5 font-bold text-zinc-600 text-2xl md:text-3xl font-merriweather xl:text-4xl text-shadow-sm shadow-black/10">
            What our Customers are saying about us
          </h2>
          <Divider />
        </aside>
        <article className="w-full md:w-2/3 flex flex-col space-y-5">
          {testimonials.map((testimonial, i) => (
            <Testimonial
              key={testimonial.name + '-' + testimonial.date}
              index={i}
              name={testimonial.name}
              review={testimonial.review}
              date={testimonial.date}
            />
          ))}
        </article>
      </main>
    </section>
  );
}
