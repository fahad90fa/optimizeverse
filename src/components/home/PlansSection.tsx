
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Gamepad2, Briefcase, Monitor, ShoppingCart } from 'lucide-react';
import { addToCart } from '@/utils/cart';
import { useToast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';

const plans = [
  {
    icon: <Gamepad2 className="h-10 w-10 text-optimize-purple" />,
    name: 'Gaming Optimization',
    price: 29.99,
    description: 'Optimize your PC for maximum gaming performance.',
    features: [
      'FPS Boost Configurations',
      'Game-Specific Optimizations',
      'Graphics & Latency Tweaks',
      'Peripheral Optimization',
      'Discord & Voice Chat Setup'
    ],
    color: 'from-purple-500 to-purple-700',
    iconBg: 'bg-purple-500/20',
    type: 'subscription' as const
  },
  {
    icon: <Briefcase className="h-10 w-10 text-optimize-blue" />,
    name: 'Working Optimization',
    price: 39.99,
    description: 'Enhance productivity and workflow efficiency.',
    features: [
      'Startup & Application Optimization',
      'Memory Management Tweaks',
      'Multitasking Performance Boost',
      'Backup & Recovery Setup',
      'Office Suite Optimization'
    ],
    color: 'from-optimize-blue to-blue-700',
    iconBg: 'bg-optimize-blue/20',
    type: 'subscription' as const
  },
  {
    icon: <Monitor className="h-10 w-10 text-optimize-teal" />,
    name: 'Regular Optimization',
    price: 19.99,
    description: 'Basic optimization for everyday PC use.',
    features: [
      'System Cleanup & Optimization',
      'Startup Time Reduction',
      'Basic Security Configuration',
      'Software Updates',
      'Disk Space Optimization'
    ],
    color: 'from-teal-500 to-teal-700',
    iconBg: 'bg-teal-500/20',
    type: 'subscription' as const
  }
];

const PlansSection = () => {
  const { toast } = useToast();
  
  const handleAddToCart = (plan: typeof plans[0]) => {
    addToCart({
      name: plan.name,
      price: plan.price,
      type: plan.type,
    });
  };

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Optimization</span> Plans
          </h2>
          <p className="text-gray-400 text-lg">
            Choose the perfect optimization plan tailored to your specific needs.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="glass-card rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <div className={`p-6 border-b border-white/10`}>
                <div className={`w-16 h-16 rounded-lg ${plan.iconBg} flex items-center justify-center mb-4`}>
                  {plan.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">${plan.price}</span>
                  <span className="text-gray-400 ml-1">one-time</span>
                </div>
                <p className="text-gray-400">{plan.description}</p>
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
                
                <div className="grid grid-cols-2 gap-2">
                  <Button 
                    className={`w-full bg-gradient-to-r ${plan.color} hover:opacity-90`}
                    onClick={() => handleAddToCart(plan)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Add to Cart
                  </Button>
                  
                  <Link to="/products">
                    <Button variant="outline" className="w-full border-white/20 hover:bg-white/5">
                      Details
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link to="/pricing">
            <Button variant="outline" className="border-white/20 hover:bg-white/5">
              Compare All Features
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PlansSection;
