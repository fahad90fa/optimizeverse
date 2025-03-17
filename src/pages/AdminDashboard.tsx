
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, ShoppingCart, CreditCard, Activity, Package, User, Settings, LogOut } from 'lucide-react';

const salesData = [
  { name: 'Jan', sales: 4000 },
  { name: 'Feb', sales: 3000 },
  { name: 'Mar', sales: 5000 },
  { name: 'Apr', sales: 2780 },
  { name: 'May', sales: 1890 },
  { name: 'Jun', sales: 2390 },
  { name: 'Jul', sales: 3490 },
];

const recentOrders = [
  { id: '#ORD-001', customer: 'Alex Johnson', plan: 'Gaming', amount: '$29.99', status: 'Completed' },
  { id: '#ORD-002', customer: 'Sarah Williams', plan: 'Working', amount: '$39.99', status: 'Completed' },
  { id: '#ORD-003', customer: 'Mike Chen', plan: 'Regular', amount: '$19.99', status: 'Processing' },
  { id: '#ORD-004', customer: 'Emily Taylor', plan: 'Gaming', amount: '$29.99', status: 'Completed' },
  { id: '#ORD-005', customer: 'David Brown', plan: 'Working', amount: '$39.99', status: 'Failed' },
];

const topProducts = [
  { name: 'Gaming Optimization', sales: 245, revenue: '$7,347.05' },
  { name: 'Working Optimization', sales: 189, revenue: '$7,558.11' },
  { name: 'Regular Optimization', sales: 152, revenue: '$3,037.48' },
  { name: '1000 Valorant Points', sales: 127, revenue: '$1,269.73' },
  { name: '2800 Valorant Points', sales: 93, revenue: '$2,324.07' },
];

const AdminDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex">
            {/* Sidebar */}
            <div className={`${sidebarOpen ? 'w-64' : 'w-20'} shrink-0 transition-all duration-300 glass-card rounded-xl mr-6 p-4 h-[calc(100vh-220px)] sticky top-24`}>
              <div className="flex flex-col h-full">
                <div className="mb-8">
                  <h2 className={`font-bold ${sidebarOpen ? 'text-xl' : 'text-center'}`}>
                    {sidebarOpen ? 'Admin Panel' : 'AP'}
                  </h2>
                </div>
                
                <nav className="space-y-2 flex-1">
                  <button className="w-full flex items-center p-3 rounded-lg bg-white/10 text-white">
                    <Activity className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-3">Dashboard</span>}
                  </button>
                  
                  <button className="w-full flex items-center p-3 rounded-lg hover:bg-white/5 text-gray-300">
                    <Users className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-3">Customers</span>}
                  </button>
                  
                  <button className="w-full flex items-center p-3 rounded-lg hover:bg-white/5 text-gray-300">
                    <ShoppingCart className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-3">Orders</span>}
                  </button>
                  
                  <button className="w-full flex items-center p-3 rounded-lg hover:bg-white/5 text-gray-300">
                    <Package className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-3">Products</span>}
                  </button>
                  
                  <button className="w-full flex items-center p-3 rounded-lg hover:bg-white/5 text-gray-300">
                    <CreditCard className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-3">Payments</span>}
                  </button>
                </nav>
                
                <div className="border-t border-white/10 pt-4 mt-auto">
                  <button className="w-full flex items-center p-3 rounded-lg hover:bg-white/5 text-gray-300">
                    <Settings className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-3">Settings</span>}
                  </button>
                  
                  <button className="w-full flex items-center p-3 rounded-lg hover:bg-white/5 text-gray-300">
                    <LogOut className="h-5 w-5" />
                    {sidebarOpen && <span className="ml-3">Logout</span>}
                  </button>
                </div>
                
                <button 
                  className="absolute -right-3 top-1/2 transform -translate-y-1/2 bg-optimize-blue rounded-full p-1"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  {sidebarOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  )}
                </button>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold">
                    Welcome, <span className="gradient-text">Admin</span>
                  </h1>
                  <p className="text-gray-400">Here's what's happening with your store today.</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-optimize-blue/20 flex items-center justify-center mr-4">
                    <User className="h-5 w-5 text-optimize-blue" />
                  </div>
                  <div>
                    <p className="font-semibold">Admin</p>
                    <p className="text-sm text-gray-400">admin@optimize.com</p>
                  </div>
                </div>
              </div>
              
              {/* Stats Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="glass-card rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-400">Total Sales</p>
                      <h3 className="text-2xl font-bold">$24,780</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                      <CreditCard className="h-5 w-5 text-green-500" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-sm">+18.2%</span>
                    <span className="text-gray-400 text-sm ml-2">from last month</span>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-400">New Customers</p>
                      <h3 className="text-2xl font-bold">387</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-optimize-purple/20 flex items-center justify-center">
                      <Users className="h-5 w-5 text-optimize-purple" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-sm">+12.5%</span>
                    <span className="text-gray-400 text-sm ml-2">from last month</span>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-400">Orders</p>
                      <h3 className="text-2xl font-bold">843</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-optimize-blue/20 flex items-center justify-center">
                      <ShoppingCart className="h-5 w-5 text-optimize-blue" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 text-sm">+8.7%</span>
                    <span className="text-gray-400 text-sm ml-2">from last month</span>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-gray-400">Conversion Rate</p>
                      <h3 className="text-2xl font-bold">3.8%</h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-optimize-teal/20 flex items-center justify-center">
                      <Activity className="h-5 w-5 text-optimize-teal" />
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 text-sm">-1.2%</span>
                    <span className="text-gray-400 text-sm ml-2">from last month</span>
                  </div>
                </div>
              </div>
              
              {/* Tabs */}
              <Tabs defaultValue="overview">
                <TabsList className="glass-card mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  {/* Sales Chart */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Sales Overview</CardTitle>
                      <CardDescription>Monthly sales performance</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                            <XAxis dataKey="name" stroke="#9CA3AF" />
                            <YAxis stroke="#9CA3AF" />
                            <Tooltip 
                              contentStyle={{ backgroundColor: '#1E2A45', borderColor: '#374151' }}
                              labelStyle={{ color: 'white' }}
                            />
                            <Bar dataKey="sales" fill="#0EA5E9" radius={[4, 4, 0, 0]} />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Recent Orders & Top Products */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Recent Orders */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Recent Orders</CardTitle>
                        <CardDescription>Latest customer orders</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {recentOrders.map((order, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                              <div>
                                <div className="font-medium">{order.id}</div>
                                <div className="text-sm text-gray-400">{order.customer}</div>
                              </div>
                              <div className="text-right">
                                <div className="font-medium">{order.amount}</div>
                                <div className={`text-sm ${
                                  order.status === 'Completed' ? 'text-green-500' : 
                                  order.status === 'Processing' ? 'text-yellow-500' : 'text-red-500'
                                }`}>
                                  {order.status}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Top Products */}
                    <Card>
                      <CardHeader>
                        <CardTitle>Top Products</CardTitle>
                        <CardDescription>Best selling products this month</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {topProducts.map((product, i) => (
                            <div key={i} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0">
                              <div>
                                <div className="font-medium">{product.name}</div>
                                <div className="text-sm text-gray-400">{product.sales} sales</div>
                              </div>
                              <div className="text-right font-medium">
                                {product.revenue}
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="analytics">
                  <Card>
                    <CardHeader>
                      <CardTitle>Analytics</CardTitle>
                      <CardDescription>Detailed analytics coming soon</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center h-[400px]">
                        <p className="text-gray-400">More detailed analytics are under development.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="reports">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reports</CardTitle>
                      <CardDescription>Generate and view reports</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center h-[400px]">
                        <p className="text-gray-400">Report generation is coming soon.</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="notifications">
                  <Card>
                    <CardHeader>
                      <CardTitle>Notifications</CardTitle>
                      <CardDescription>System notifications and alerts</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-center h-[400px]">
                        <p className="text-gray-400">You have no new notifications.</p>
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

export default AdminDashboard;
