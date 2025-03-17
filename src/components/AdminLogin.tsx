
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Lock, Mail, ShieldAlert } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn, login } from '@/utils/auth';
import { motion } from 'framer-motion';

const AdminLoginComponent = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { toast } = useToast();

  // Check if already logged in as admin
  useEffect(() => {
    const user = localStorage.getItem('currentUser');
    if (user) {
      try {
        const userData = JSON.parse(user);
        if (userData.isAdmin) {
          navigate('/admin-dashboard');
        }
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verify admin credentials
    if (email === 'admin@login' && password === 'admin123@') {
      // Admin login successful
      const adminData = {
        email,
        name: "Admin",
        isAdmin: true,
        profilePic: "https://i.pravatar.cc/150?img=12",
      };
      
      // Store admin data
      login(adminData);
      
      toast({
        title: "Admin Login Successful",
        description: "Welcome to the admin dashboard",
      });
      
      navigate('/admin-dashboard');
    } else {
      // Login failed
      toast({
        title: "Admin Login Failed",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <motion.div 
      className="max-w-md mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="glass-card rounded-xl p-8">
        <div className="text-center mb-8">
          <motion.div 
            className="flex justify-center mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          >
            <ShieldAlert className="h-16 w-16 text-optimize-purple" />
          </motion.div>
          <h1 className="text-2xl font-bold mb-2">
            Admin <span className="gradient-text">Login</span>
          </h1>
          <p className="text-gray-400">
            Secure access to the admin dashboard
          </p>
        </div>
        
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <Label htmlFor="admin-email">Email</Label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                id="admin-email" 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@login" 
                className="pl-10 bg-white/5 border-white/10 focus:border-optimize-purple"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="admin-password">Password</Label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input 
                id="admin-password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••" 
                className="pl-10 bg-white/5 border-white/10 focus:border-optimize-purple"
              />
            </div>
          </div>
          
          <Button type="submit" className="w-full bg-optimize-purple hover:bg-optimize-purple/90">
            Admin Sign In
          </Button>
          
          <div className="text-center text-sm text-gray-400 mt-4">
            <p>Admin Credentials (for demo): </p>
            <p>Email: admin@login</p>
            <p>Password: admin123@</p>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default AdminLoginComponent;
