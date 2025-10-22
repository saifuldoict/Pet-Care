// TestimonialsSection.jsx
import React from "react";

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Pet Owner",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    testimonial:
      "The pet care tips on this platform are amazing! My dog has never been healthier. Highly recommend!",
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Pet Owner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    testimonial:
      "I love the expert vet advice here. It saved me a lot of stress when my cat was sick.",
  },
  {
    id: 3,
    name: "Emily Davis",
    role: "Pet Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    testimonial:
      "The winter care tips are life savers! My pets stayed warm and happy all season.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-700 mb-4">"{item.testimonial}"</p>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
