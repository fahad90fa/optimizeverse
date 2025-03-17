
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, CreditCard, Package, Settings, Bell, LogOut } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Profile = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [address, setAddress] = useState('123 Main St, City, Country');
  const { toast } = useToast();

  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Profile Updated",
      description: "Your profile has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div className="md:w-1/4">
              <div className="glass-card rounded-xl p-6 mb-6">
                <div className="flex flex-col items-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-optimize-blue to-optimize-purple p-1 mb-4">
                    <div className="w-full h-full rounded-full bg-optimize-dark flex items-center justify-center">
                      <User className="h-10 w-10 text-white" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold">{name}</h2>
                  <p className="text-gray-400 text-sm">{email}</p>
                  <Button variant="outline" className="mt-4 w-full border-white/10">
                    Edit Photo
                  </Button>
                </div>
              </div>
              
              <div className="glass-card rounded-xl overflow-hidden">
                <nav>
                  <button className="w-full flex items-center p-4 bg-white/10 border-l-2 border-optimize-blue">
                    <User className="h-5 w-5 mr-3" />
                    <span>My Profile</span>
                  </button>
                  <button className="w-full flex items-center p-4 hover:bg-white/5 border-l-2 border-transparent">
                    <Package className="h-5 w-5 mr-3 text-gray-400" />
                    <span className="text-gray-400">My Orders</span>
                  </button>
                  <button className="w-full flex items-center p-4 hover:bg-white/5 border-l-2 border-transparent">
                    <CreditCard className="h-5 w-5 mr-3 text-gray-400" />
                    <span className="text-gray-400">Payment Methods</span>
                  </button>
                  <button className="w-full flex items-center p-4 hover:bg-white/5 border-l-2 border-transparent">
                    <Bell className="h-5 w-5 mr-3 text-gray-400" />
                    <span className="text-gray-400">Notifications</span>
                  </button>
                  <button className="w-full flex items-center p-4 hover:bg-white/5 border-l-2 border-transparent">
                    <Settings className="h-5 w-5 mr-3 text-gray-400" />
                    <span className="text-gray-400">Settings</span>
                  </button>
                  <button className="w-full flex items-center p-4 hover:bg-white/5 border-l-2 border-transparent">
                    <LogOut className="h-5 w-5 mr-3 text-gray-400" />
                    <span className="text-gray-400">Sign Out</span>
                  </button>
                </nav>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="md:w-3/4">
              <h1 className="text-3xl font-bold mb-6">
                My <span className="gradient-text">Profile</span>
              </h1>
              
              <Tabs defaultValue="personal" className="w-full">
                <TabsList className="mb-6">
                  <TabsTrigger value="personal">Personal Information</TabsTrigger>
                  <TabsTrigger value="orders">Order History</TabsTrigger>
                  <TabsTrigger value="subscription">Subscription</TabsTrigger>
                </TabsList>
                
                <TabsContent value="personal">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                      <CardDescription>Update your personal details</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleUpdateProfile} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <div className="relative">
                              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                              <Input 
                                id="name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="pl-10"
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
                                className="pl-10"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <div className="relative">
                              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                              <Input 
                                id="phone" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <div className="relative">
                              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                              <Input 
                                id="address" 
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="pl-10"
                              />
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex justify-end pt-4">
                          <Button type="submit">Save Changes</Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="orders">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>View your recent orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[1, 2, 3].map((order) => (
                          <div key={order} className="glass-card p-4 rounded-lg">
                            <div className="flex justify-between mb-2">
                              <div>
                                <span className="text-sm text-gray-400">Order ID:</span>
                                <span className="font-semibold ml-2">#ORD-{order.toString().padStart(5, '0')}</span>
                              </div>
                              <div>
                                <span className={`text-sm ${order === 1 ? 'text-green-500' : 'text-blue-500'}`}>
                                  {order === 1 ? 'Completed' : 'Processing'}
                                </span>
                              </div>
                            </div>
                            
                            <div className="flex justify-between mb-2">
                              <div>
                                <span className="text-sm text-gray-400">Date:</span>
                                <span className="ml-2">May {10 + order}, 2023</span>
                              </div>
                              <div>
                                <span className="text-sm text-gray-400">Total:</span>
                                <span className="font-semibold ml-2">${order === 1 ? '29.99' : order === 2 ? '39.99' : '19.99'}</span>
                              </div>
                            </div>
                            
                            <div className="mt-3 pt-3 border-t border-white/10">
                              <div className="flex justify-between">
                                <div className="flex items-center">
                                  <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center mr-3">
                                    <Package className="h-5 w-5" />
                                  </div>
                                  <div>
                                    <p className="font-medium">
                                      {order === 1 ? 'Gaming' : order === 2 ? 'Working' : 'Regular'} Optimization
                                    </p>
                                    <p className="text-sm text-gray-400">One-time purchase</p>
                                  </div>
                                </div>
                                
                                <Button variant="outline" size="sm" className="h-8">
                                  View Details
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="subscription">
                  <Card>
                    <CardHeader>
                      <CardTitle>Your Subscription</CardTitle>
                      <CardDescription>Manage your optimization subscription</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="glass-card p-6 rounded-lg mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold">Gaming Optimization</h3>
                            <p className="text-sm text-gray-400">Monthly Subscription</p>
                          </div>
                          <div className="bg-green-500/20 text-green-500 py-1 px-3 rounded-full text-sm">
                            Active
                          </div>
                        </div>
                        
                        <div className="flex justify-between mb-6">
                          <div>
                            <p className="text-sm text-gray-400">Next billing date</p>
                            <p>June 15, 2023</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-400">Monthly fee</p>
                            <p className="text-xl font-bold">$4.99</p>
                          </div>
                        </div>
                        
                        <div className="flex space-x-3">
                          <Button variant="outline" className="flex-1">Upgrade Plan</Button>
                          <Button variant="destructive" className="flex-1">Cancel Subscription</Button>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Subscription Benefits</h3>
                        <ul className="space-y-2">
                          <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            Monthly system optimization checkups
                          </li>
                          <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            Priority customer support
                          </li>
                          <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            Game-specific optimizations for new releases
                          </li>
                          <li className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 mr-2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                            10% discount on Valorant VP purchases
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
