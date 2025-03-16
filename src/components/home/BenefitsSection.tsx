
import React from 'react';
import { Zap, Trophy, Clock, Shield } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="h-6 w-6 text-optimize-blue" />,
    title: 'Performance Boost',
    description: 'Increase your PC speed by up to 60% with our expert optimization techniques.'
  },
  {
    icon: <Trophy className="h-6 w-6 text-optimize-purple" />,
    title: 'Gaming Edge',
    description: 'Get higher FPS, lower ping, and a competitive advantage in your favorite games.'
  },
  {
    icon: <Clock className="h-6 w-6 text-optimize-teal" />,
    title: 'Work Efficiency',
    description: 'Improve productivity with faster application launches and smoother multitasking.'
  },
  {
    icon: <Shield className="h-6 w-6 text-optimize-blue" />,
    title: 'System Protection',
    description: 'Optimize system security and prevent performance degradation over time.'
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="gradient-text">Optimize</span> Your PC?
          </h2>
          <p className="text-gray-400 text-lg">
            Our optimization services provide measurable improvements for gaming, work, and everyday use.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-card p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
