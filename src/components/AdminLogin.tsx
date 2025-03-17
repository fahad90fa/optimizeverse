
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check admin credentials
    if (email === 'admin@optimize.com' && password === 'admin123@') {
      toast({
        title: "Success",
        description: "Welcome to the admin dashboard",
        variant: "default",
      });
      navigate('/admin-dashboard');
    } else {
      toast({
        title: "Authentication failed",
        description: "Invalid email or password",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-md mx-auto glass-card rounded-xl p-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold mb-2">
          Admin <span className="gradient-text">Login</span>
        </h1>
        <p className="text-gray-400">
          Sign in to access the admin dashboard
        </p>
      </div>
      
      <form className="space-y-6" onSubmit={handleLogin}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@optimize.com" 
              className="pl-10 bg-white/5 border-white/10 focus:border-optimize-blue"
              required
            />
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
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
              required
            />
          </div>
        </div>
        
        <Button type="submit" className="w-full bg-optimize-blue hover:bg-optimize-blue/90">
          Sign In as Admin
        </Button>
      </form>
    </div>
  );
};

export default AdminLogin;
