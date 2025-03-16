
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, BarChart, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-16">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-20"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-optimize-blue/30 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-optimize-purple/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Unlock Your PC's <span className="gradient-text">Full Potential</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-lg">
              Professional optimization services tailored for gamers, professionals, and everyday users.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button className="bg-optimize-blue hover:bg-optimize-blue/90 button-glow px-6 py-6 h-auto text-base">
                  Optimize Now <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button variant="outline" className="border-white/20 hover:bg-white/5 px-6 py-6 h-auto text-base">
                  View Plans
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center gap-4 pt-6">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-r from-optimize-blue to-optimize-purple p-0.5">
                    <div className="w-full h-full rounded-full bg-optimize-dark"></div>
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm text-gray-300">Trusted by <span className="text-white font-semibold">2,500+</span> users</p>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Main PC Graphic */}
              <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden animate-pulse-glow">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 border-2 border-white/20 rounded-lg relative flex flex-col justify-between p-6">
                    {/* CPU Animation */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <Cpu className="h-16 w-16 text-optimize-blue animate-pulse" />
                    </div>
                    
                    {/* Performance Lines */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2">
                        <BarChart className="h-4 w-4 text-optimize-purple" />
                        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-optimize-blue to-optimize-purple w-3/4 animate-gradient-x"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Power Indicators */}
                    <div className="absolute top-6 right-6">
                      <Zap className="h-6 w-6 text-optimize-teal animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-0 right-0 transform -translate-y-1/4 translate-x-1/4">
                <div className="glass-card p-3 rounded-lg animate-float shadow-lg">
                  <div className="text-xs font-semibold text-white">+120 FPS</div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 transform translate-y-1/4 -translate-x-1/4">
                <div className="glass-card p-3 rounded-lg animate-float shadow-lg delay-75">
                  <div className="text-xs font-semibold text-white">CPU +30%</div>
                </div>
              </div>
              
              <div className="absolute top-1/2 left-0 transform -translate-x-1/3">
                <div className="glass-card p-3 rounded-lg animate-float shadow-lg delay-150">
                  <div className="text-xs font-semibold text-white">GPU Optimized</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
