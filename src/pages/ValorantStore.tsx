
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from 'react-router-dom';
import { redirectToWhatsApp, DEFAULT_WHATSAPP_NUMBER } from '@/utils/whatsapp';
import { getCurrentUser } from '@/utils/auth';

const ValorantStore = () => {
  const user = getCurrentUser();
  
  const vpPackages = [
    { id: 1, amount: 1000, price: 9.99, image: 'public/lovable-uploads/d21f032b-622f-4175-b855-53dff4e2bd4d.png' },
    { id: 2, amount: 2800, price: 24.99, image: 'public/lovable-uploads/d21f032b-622f-4175-b855-53dff4e2bd4d.png' },
    { id: 3, amount: 5600, price: 49.99, image: 'public/lovable-uploads/d21f032b-622f-4175-b855-53dff4e2bd4d.png' },
    { id: 4, amount: 11500, price: 99.99, image: 'public/lovable-uploads/d21f032b-622f-4175-b855-53dff4e2bd4d.png' },
  ];

  const handlePurchase = (amount: number, price: number) => {
    const userName = user ? user.name : "a customer";
    redirectToWhatsApp(
      DEFAULT_WHATSAPP_NUMBER,
      `${amount} Valorant Points ($${price})`,
      userName
    );
  };

  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Valorant <span className="gradient-text">VP Store</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Purchase Valorant Points directly through our secure store. Instant delivery to your account.
            </p>
          </div>

          {/* VP Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {vpPackages.map((pkg) => (
              <Card key={pkg.id} className="glass-card border border-white/10 overflow-hidden bg-black/40 hover:border-optimize-purple/40 transition-all duration-300">
                <div className="relative h-48 overflow-hidden bg-black">
                  <img 
                    src={pkg.image} 
                    alt={`${pkg.amount} VP`} 
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" 
                  />
                  <div className="absolute top-2 left-2 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full">
                    <span className="text-optimize-purple font-bold">{pkg.amount} VP</span>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{pkg.amount} Valorant Points</CardTitle>
                  <CardDescription>Instant delivery to your account</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold text-optimize-purple mb-2">${pkg.price}</p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-optimize-purple mr-2"></div>
                      Instant delivery
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-optimize-purple mr-2"></div>
                      Secure payment
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-optimize-purple mr-2"></div>
                      24/7 support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full bg-optimize-purple hover:bg-optimize-purple/90"
                    onClick={() => handlePurchase(pkg.amount, pkg.price)}
                  >
                    <ShoppingCart className="mr-2 h-4 w-4" /> Purchase Now
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="glass-card p-6 border border-white/10 rounded-xl max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">How to Purchase Valorant Points</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Select the amount of VP you wish to purchase</li>
              <li>Click the "Purchase Now" button</li>
              <li>You'll be redirected to WhatsApp to complete your purchase securely</li>
              <li>Once payment is confirmed, you'll receive your VP code instantly</li>
              <li>Redeem your code in the Valorant store</li>
            </ol>
            
            {!user && (
              <div className="mt-6 p-4 bg-optimize-purple/20 rounded-lg">
                <p className="text-sm text-white">
                  <strong>Note:</strong> For a smoother experience and order tracking, we recommend 
                  <Link to="/login" className="text-optimize-purple font-bold hover:underline mx-1">logging in</Link>
                  before making a purchase.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ValorantStore;
