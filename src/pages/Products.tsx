
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Zap, Trophy, ShieldCheck, Cpu, MonitorPlay, Laptop } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    icon: <MonitorPlay className="h-12 w-12 text-optimize-purple" />,
    name: 'Gaming Optimization',
    price: '$29.99',
    description: 'Boost your gaming experience with optimized settings for maximum FPS and reduced latency.',
    benefits: [
      'FPS Boost Configurations',
      'Game-Specific Optimizations',
      'Graphics & Latency Tweaks',
      'Peripheral Optimization',
      'Discord & Voice Chat Setup'
    ],
    features: [
      { title: 'Performance Boost', description: 'Up to 60% increase in FPS' },
      { title: 'Latency Reduction', description: 'Reduce input lag by up to 35%' },
      { title: 'Optimization Targets', description: 'Graphics cards, CPU, RAM, and storage' }
    ],
    color: 'bg-optimize-purple',
    testimonial: {
      quote: 'After the gaming optimization, my FPS went from 120 to 220+ in Valorant. The difference is incredible!',
      author: 'Alex Johnson, Pro Valorant Player'
    },
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    icon: <Laptop className="h-12 w-12 text-optimize-blue" />,
    name: 'Working Optimization',
    price: '$39.99',
    description: 'Enhance productivity with faster application performance and efficient resource management.',
    benefits: [
      'Startup & Application Optimization',
      'Memory Management Tweaks',
      'Multitasking Performance Boost',
      'Backup & Recovery Setup',
      'Office Suite Optimization'
    ],
    features: [
      { title: 'Startup Time', description: 'Reduce boot time by up to 70%' },
      { title: 'Application Speed', description: 'Faster load times for work applications' },
      { title: 'Battery Life', description: 'Extend laptop battery life by up to 2 hours' }
    ],
    color: 'bg-optimize-blue',
    testimonial: {
      quote: 'The working optimization made a huge difference in my workflow. My applications launch faster, and I can work with large files without any lag.',
      author: 'Sarah Williams, Graphic Designer'
    },
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  },
  {
    icon: <Cpu className="h-12 w-12 text-optimize-teal" />,
    name: 'Regular Optimization',
    price: '$19.99',
    description: 'General optimization for everyday PC use, improving overall system performance.',
    benefits: [
      'System Cleanup & Optimization',
      'Startup Time Reduction',
      'Basic Security Configuration',
      'Software Updates',
      'Disk Space Optimization'
    ],
    features: [
      { title: 'System Cleanup', description: 'Remove unnecessary files and bloatware' },
      { title: 'Performance Boost', description: 'Improve overall system responsiveness' },
      { title: 'Security', description: 'Basic security settings optimization' }
    ],
    color: 'bg-optimize-teal',
    testimonial: {
      quote: 'I was struggling with an old laptop, but after the regular optimization, it feels like a new machine. My battery life has improved too!',
      author: 'Mike Chen, Student'
    },
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  }
];

const Products = () => {
  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Our <span className="gradient-text">Optimization</span> Products
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            Professional optimization services tailored for gamers, professionals, and everyday users.
          </p>
          
          <div className="space-y-32">
            {products.map((product, index) => (
              <div key={index} className="relative">
                {/* Background Elements */}
                <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10">
                  <div className={`w-96 h-96 rounded-full filter blur-3xl ${product.color}`}></div>
                </div>
                
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className={`order-2 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="glass-card rounded-xl overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-3 rounded-lg ${product.color} bg-opacity-20`}>
                            {product.icon}
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold">{product.name}</h3>
                            <div className="text-xl font-semibold text-optimize-blue">{product.price}</div>
                          </div>
                        </div>
                        
                        <p className="text-gray-300 mb-6">{product.description}</p>
                        
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-semibold mb-2 flex items-center">
                              <Trophy className="h-5 w-5 mr-2 text-yellow-500" /> Key Benefits
                            </h4>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                              {product.benefits.map((benefit, idx) => (
                                <li key={idx} className="flex items-start">
                                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                                  <span className="text-sm">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <Link to="/cart">
                            <Button className="w-full bg-gradient-to-r from-optimize-blue to-optimize-purple">
                              Add to Cart
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className={`space-y-8 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div>
                      <h2 className="text-3xl font-bold mb-4">{product.name}</h2>
                      <p className="text-xl text-gray-300">{product.description}</p>
                    </div>
                    
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold flex items-center">
                        <Zap className="h-5 w-5 mr-2 text-optimize-blue" /> Performance Features
                      </h3>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="glass-card p-4 rounded-xl">
                            <h4 className="font-semibold mb-1">{feature.title}</h4>
                            <p className="text-sm text-gray-400">{feature.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="glass-card p-6 rounded-xl">
                      <h3 className="text-xl font-semibold flex items-center mb-4">
                        <ShieldCheck className="h-5 w-5 mr-2 text-optimize-teal" /> Customer Testimonial
                      </h3>
                      <blockquote className="text-gray-300 italic mb-4">"{product.testimonial.quote}"</blockquote>
                      <cite className="text-sm text-gray-400 block text-right">— {product.testimonial.author}</cite>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your PC experience?</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8">
              Choose the plan that's right for you and start enjoying a faster, more optimized computing experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pricing">
                <Button className="bg-optimize-blue hover:bg-optimize-blue/90 px-8 py-6 h-auto text-lg">
                  View Pricing Plans
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="border-white/20 hover:bg-white/5 px-8 py-6 h-auto text-lg">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
