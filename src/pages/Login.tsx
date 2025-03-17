
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, ShieldAlert } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Check if it's the admin login
    if (email === 'admin@optimize.com' && password === 'admin123@') {
      toast({
        title: "Admin Login Successful",
        description: "Welcome to the admin dashboard",
      });
      navigate('/admin-dashboard');
      return;
    }

    // Here you would typically make an API call to authenticate the user
    // For now, we'll simulate a successful login and store basic user info
    const userData = {
      email,
      name: "User", // This would typically come from your backend
      profilePic: "https://i.pravatar.cc/150?img=1", // Default avatar
    };
    
    localStorage.setItem('currentUser', JSON.stringify(userData));
    
    toast({
      title: "Success",
      description: "You have been logged in successfully",
    });
    navigate('/');
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
                    Welcome <span className="gradient-text">Back</span>
                  </h1>
                  <p className="text-gray-400">
                    Sign in to continue to OptimizeVerse
                  </p>
                </div>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
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
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <Link to="/forgot-password" className="text-xs text-optimize-blue hover:underline">
                        Forgot password?
                      </Link>
                    </div>
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
                  </div>
                  
                  <Button type="submit" className="w-full bg-optimize-blue hover:bg-optimize-blue/90">
                    Sign In
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
                    Don't have an account?{" "}
                    <Link to="/signup" className="text-optimize-blue hover:underline">
                      Sign up
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
