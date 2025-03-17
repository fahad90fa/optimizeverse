
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, ShieldAlert } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { isLoggedIn, login } from '@/utils/auth';

const LoginForm = () => {
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
      // Use the login utility for admin
      login({
        email,
        name: "Admin",
        isAdmin: true,
        profilePic: "https://i.pravatar.cc/150?img=12",
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
    
    // Use the login utility
    login(userData);
    
    toast({
      title: "Success",
      description: "You have been logged in successfully",
    });
    navigate('/');
  };

  return (
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
  );
};

export default LoginForm;
