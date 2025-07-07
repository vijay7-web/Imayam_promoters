'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Shalini',
    role: 'Business Person',
    image: '/assets/images/testi-thumb2.jpg',
    rating: 5,
    comment: 'Imayam Promoters truly cares about their clients. They listened to my requirements and found me a property that exceeded my expectations.',
  },
  {
    name: 'Arun Kumar',
    role: 'Software Engineer',
    image: '/assets/images/testi-thumb1.jpg',
    rating: 5,
    comment: 'Working with Imayam Promoters was a game changer. They were professional, quick, and highly reliable.',
  },
  {
    name: 'Meena R.',
    role: 'Entrepreneur',
    image: '/assets/images/testi-thumb3.jpg',
    rating: 4,
    comment: 'Their team helped me find the right investment property. I appreciate their knowledge and patience.',
  },
  {
    name: 'Rahul Dev',
    role: 'Bank Manager',
    image: '/assets/images/testi-thumb4.jpg',
    rating: 5,
    comment: 'From the first consultation to the final deal, they were amazing to work with. I highly recommend them!',
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-16 bg-gradient-to-r from-[#f0f4ff] via-white to-[#f0f4ff]">
      <div className="max-w-6xl mx-auto px-6 text-center">
                <h2 className="text-4xl font-thin text-orange-500 uppercase tracking-tight mb-2">
          What Our Clients Say</h2>
        <p className="text-lg text-gray-500 mb-12">See what our happy clients have to say about us</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 relative rounded-full overflow-hidden">
                  <Image
                    src={'/testi-thumb2.jpg'}
                    alt={'icon'}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <i key={i} className="fa fa-star text-sm"></i>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 text-md italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
