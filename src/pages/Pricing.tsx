
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Gaming',
    price: '$29.99',
    monthlyPrice: '$4.99',
    description: 'Optimize your PC for maximum gaming performance.',
    features: [
      'FPS Boost Configurations',
      'Game-Specific Optimizations',
      'Graphics & Latency Tweaks',
      'Peripheral Optimization',
      'Discord & Voice Chat Setup'
    ],
    color: 'from-purple-500 to-purple-700',
    best: false
  },
  {
    name: 'Working',
    price: '$39.99',
    monthlyPrice: '$6.99',
    description: 'Enhance productivity and workflow efficiency.',
    features: [
      'Startup & Application Optimization',
      'Memory Management Tweaks',
      'Multitasking Performance Boost',
      'Backup & Recovery Setup',
      'Office Suite Optimization',
      'Priority Customer Support',
      'Monthly System Checkup'
    ],
    color: 'from-optimize-blue to-blue-700',
    best: true
  },
  {
    name: 'Regular',
    price: '$19.99',
    monthlyPrice: '$2.99',
    description: 'Basic optimization for everyday PC use.',
    features: [
      'System Cleanup & Optimization',
      'Startup Time Reduction',
      'Basic Security Configuration',
      'Software Updates',
      'Disk Space Optimization'
    ],
    color: 'from-teal-500 to-teal-700',
    best: false
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="gradient-text">Pricing</span> Plans
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-8">
            Choose the perfect optimization plan tailored to your specific needs.
          </p>
          
          <div className="flex justify-center mb-12">
            <div className="glass-card inline-flex rounded-lg p-1">
              <button className="px-4 py-2 rounded-md bg-white/10 text-white font-medium">One-time</button>
              <button className="px-4 py-2 rounded-md text-gray-300 font-medium">Monthly</button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={`glass-card rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 relative ${plan.best ? 'border-2 border-optimize-blue' : ''}`}
              >
                {plan.best && (
                  <div className="absolute top-0 left-0 w-full bg-optimize-blue text-white text-center py-1 text-sm font-medium">
                    MOST POPULAR
                  </div>
                )}
                <div className={`p-6 border-b border-white/10 ${plan.best ? 'pt-8' : ''}`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold">{plan.price}</span>
                    <span className="text-gray-400 ml-1">one-time</span>
                  </div>
                  <p className="text-gray-400 mb-3">{plan.description}</p>
                  <div className="text-sm text-gray-400">
                    Or subscribe for <span className="text-white font-medium">{plan.monthlyPrice}/month</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/cart">
                    <Button className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90`}>
                      Choose Plan
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card rounded-xl p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">What's the difference between one-time and subscription?</h3>
                <p className="text-gray-400">One-time payment gives you a thorough optimization for your current system state. The subscription includes monthly check-ups, continuous optimization, and priority support.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Can I upgrade my plan later?</h3>
                <p className="text-gray-400">Yes, you can upgrade your plan at any time. The price difference will be prorated if you're on a subscription.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Do you offer refunds?</h3>
                <p className="text-gray-400">We offer a 7-day satisfaction guarantee. If you're not happy with the results, we'll refund your purchase.</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">How do I cancel my subscription?</h3>
                <p className="text-gray-400">You can cancel your subscription anytime from your account dashboard. You'll continue to receive benefits until the end of your billing period.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
