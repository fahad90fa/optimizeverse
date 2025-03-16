
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, User } from 'lucide-react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-md mx-auto glass-card rounded-xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold mb-2">
                Create an <span className="gradient-text">Account</span>
              </h1>
              <p className="text-gray-400">
                Join OptimizeVerse to unlock your PC's potential
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    id="name" 
                    type="text" 
                    placeholder="Your Name" 
                    className="pl-10 bg-white/5 border-white/10 focus:border-optimize-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="you@example.com" 
                    className="pl-10 bg-white/5 border-white/10 focus:border-optimize-blue"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    className="pl-10 bg-white/5 border-white/10 focus:border-optimize-blue"
                  />
                </div>
                <p className="text-xs text-gray-400">Must be at least 8 characters</p>
              </div>
              
              <Button type="submit" className="w-full bg-optimize-blue hover:bg-optimize-blue/90">
                Create Account
              </Button>
            </form>
            
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-white/10"></div>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-optimize-dark px-2 text-gray-400">Or continue with</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="h-5 w-5 mr-2" />
                  Google
                </Button>
              </div>
            </div>
            
            <div className="mt-6 text-center text-sm">
              <p className="text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="text-optimize-blue hover:underline">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
