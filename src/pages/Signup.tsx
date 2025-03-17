
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, User, ShieldAlert } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (password.length < 8) {
      toast({
        title: "Error",
        description: "Password must be at least 8 characters",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically make an API call to register the user
    // For now, we'll just simulate a successful registration
    toast({
      title: "Success",
      description: "Your account has been created successfully",
    });
    navigate('/profile');
  };

  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card rounded-xl p-8 order-2 md:order-1">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold mb-2">
                    Create an <span className="gradient-text">Account</span>
                  </h1>
                  <p className="text-gray-400">
                    Join OptimizeVerse to unlock your PC's potential
                  </p>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input 
                        id="name" 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center">
                    <Link to="/admin" className="flex items-center text-sm text-gray-400 hover:text-white">
                      <ShieldAlert className="h-4 w-4 mr-1" />
                      Admin Login
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <div className="h-full flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-6">
                    Join our <span className="gradient-text">community</span> of optimized PC users
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex">
                      <div className="w-12 h-12 rounded-full bg-optimize-blue/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optimize-blue"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">One-Time Optimization</h3>
                        <p className="text-gray-400">Get an instant boost in performance with our one-time services.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-12 h-12 rounded-full bg-optimize-purple/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optimize-purple"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Ongoing Support</h3>
                        <p className="text-gray-400">Subscribe for continuous optimization and priority support.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="w-12 h-12 rounded-full bg-optimize-teal/20 flex items-center justify-center mr-4 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-optimize-teal"><path d="m16 16 2 2 4-4"/><path d="M3 11v3a1 1 0 0 0 1 1h1"/><path d="M13 5v16"/><path d="M8 5v4"/><path d="M3 5v4"/><path d="M8 9a5 5 0 0 1 5 5v3"/></svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Performance Guarantee</h3>
                        <p className="text-gray-400">If you don't see improvement, we'll refund your purchase.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 p-6 glass-card rounded-xl">
                    <h3 className="text-lg font-semibold mb-4">Join 2,500+ Satisfied Users</h3>
                    <div className="flex flex-wrap">
                      <img src="https://i.pravatar.cc/100?img=1" alt="User" className="w-12 h-12 rounded-full border-2 border-optimize-dark" />
                      <img src="https://i.pravatar.cc/100?img=2" alt="User" className="w-12 h-12 rounded-full border-2 border-optimize-dark -ml-3" />
                      <img src="https://i.pravatar.cc/100?img=3" alt="User" className="w-12 h-12 rounded-full border-2 border-optimize-dark -ml-3" />
                      <img src="https://i.pravatar.cc/100?img=4" alt="User" className="w-12 h-12 rounded-full border-2 border-optimize-dark -ml-3" />
                      <img src="https://i.pravatar.cc/100?img=5" alt="User" className="w-12 h-12 rounded-full border-2 border-optimize-dark -ml-3" />
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-sm border-2 border-optimize-dark -ml-3">
                        +2.4k
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Signup;
