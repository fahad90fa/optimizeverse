
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AdminLoginComponent from '@/components/AdminLogin';

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <AdminLoginComponent />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AdminLogin;
