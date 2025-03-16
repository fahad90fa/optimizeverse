
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const ValorantPromo = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1580327344181-c1163234e5a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-optimize-dark via-optimize-dark/95 to-optimize-dark/90"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <div className="glass-card rounded-xl p-4 inline-block rotate-3 mb-6">
                <h3 className="text-sm font-semibold text-optimize-purple">VALORANT STORE</h3>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Get <span className="gradient-text">Valorant VP</span> at the Best Prices
              </h2>
              
              <p className="text-xl text-gray-300 mb-6">
                Purchase Valorant Points directly through our secure store. Instant delivery to your account.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-optimize-purple mr-3"></div>
                  <p className="text-gray-300">Competitive pricing on all VP bundles</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-optimize-blue mr-3"></div>
                  <p className="text-gray-300">Instant delivery to your Valorant account</p>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-optimize-teal mr-3"></div>
                  <p className="text-gray-300">Secure payment methods & 24/7 support</p>
                </div>
              </div>
              
              <Link to="/valorant-store">
                <Button className="bg-optimize-purple hover:bg-optimize-purple/90 button-glow px-6 py-6 h-auto text-base">
                  Browse VP Store <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="md:w-1/2 md:pl-12 flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 bg-optimize-purple/20 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter blur-3xl"></div>
                <div className="glass-card rounded-xl overflow-hidden border border-white/20 shadow-xl relative">
                  <img 
                    src="https://images.unsplash.com/photo-1600861194942-f883de0dfe96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80" 
                    alt="Valorant VP" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-semibold">1000 Valorant Points</p>
                        <p className="text-xs text-gray-400">Instant Delivery</p>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-optimize-purple">$9.99</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl overflow-hidden border border-white/20 shadow-xl absolute -bottom-10 -right-10 w-2/3 rotate-6">
                  <img 
                    src="https://images.unsplash.com/photo-1590422749897-47726d1b0b5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                    alt="Valorant VP" 
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute bottom-0 left-0 w-full bg-black/70 backdrop-blur-sm p-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs font-semibold">2800 Valorant Points</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-optimize-purple">$24.99</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValorantPromo;
