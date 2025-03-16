
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Profile = () => {
  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            User <span className="gradient-text">Profile</span>
          </h1>
          <p className="text-xl text-gray-400 text-center max-w-3xl mx-auto mb-16">
            User profile functionality coming soon. Check back to manage your account.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
