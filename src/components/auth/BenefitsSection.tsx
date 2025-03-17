
import React from 'react';

const BenefitsSection = () => {
  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-6">
        Unlock the full <span className="gradient-text">potential</span> of your PC
      </h2>
      
      <div className="space-y-6">
        <div className="flex">
          <div className="w-12 h-12 rounded-full bg-optimize-blue/20 flex items-center justify-center mr-4 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optimize-blue"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Gaming Optimization</h3>
            <p className="text-gray-400">Boost your FPS and reduce latency for a competitive edge.</p>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-12 h-12 rounded-full bg-optimize-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optimize-purple"><rect width="20" height="14" x="2" y="3" rx="2"/><line x1="8" x2="16" y1="21" y2="21"/><line x1="12" x2="12" y1="17" y2="21"/></svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Working Optimization</h3>
            <p className="text-gray-400">Enhance productivity with faster application performance.</p>
          </div>
        </div>
        
        <div className="flex">
          <div className="w-12 h-12 rounded-full bg-optimize-teal/20 flex items-center justify-center mr-4 flex-shrink-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optimize-teal"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <div>
            <h3 className="font-semibold text-lg">Valorant VP Store</h3>
            <p className="text-gray-400">Purchase Valorant Points at the best prices with instant delivery.</p>
          </div>
        </div>
      </div>
      
      <div className="mt-10 glass-card p-4 rounded-xl">
        <div className="flex items-center">
          <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-12 h-12 rounded-full mr-4" />
          <div>
            <p className="text-sm italic text-gray-300">"The optimization service boosted my gaming performance beyond what I thought was possible. Highly recommend!"</p>
            <p className="text-xs text-gray-400 mt-1">— Alex J., Professional Gamer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
