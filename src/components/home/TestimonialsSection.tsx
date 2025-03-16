
import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex Johnson',
    role: 'Pro Valorant Player',
    content: 'After the gaming optimization, my FPS went from 120 to 220+ in Valorant. The difference is incredible, and my gameplay has improved significantly.',
    rating: 5,
    image: 'https://i.pravatar.cc/100?img=1'
  },
  {
    name: 'Sarah Williams',
    role: 'Graphic Designer',
    content: 'The working optimization made a huge difference in my workflow. My applications launch faster, and I can work with large files without any lag.',
    rating: 5,
    image: 'https://i.pravatar.cc/100?img=5'
  },
  {
    name: 'Mike Chen',
    role: 'Student',
    content: 'I was struggling with an old laptop, but after the regular optimization, it feels like a new machine. My battery life has improved too!',
    rating: 4,
    image: 'https://i.pravatar.cc/100?img=3'
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Users</span> Say
          </h2>
          <p className="text-gray-400 text-lg">
            Don't just take our word for it. Here's what our customers have experienced.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-card rounded-xl p-6 transition-all duration-300 hover:border-optimize-blue/50">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-500'}`} 
                  />
                ))}
              </div>
              
              <p className="text-gray-300 italic">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 glass-card rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to transform your PC experience?</h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Join thousands of satisfied users who have already optimized their systems.
          </p>
          <div className="flex justify-center">
            <div className="glass-card p-4 rounded-xl inline-flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <span className="font-semibold">4.9/5</span>
              <span className="text-gray-400 text-sm">(500+ reviews)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
