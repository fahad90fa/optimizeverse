
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Trash2, ShoppingCart, ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { redirectToWhatsApp, DEFAULT_WHATSAPP_NUMBER } from '@/utils/whatsapp';
import { getCurrentUser } from '@/utils/auth';
import { motion } from 'framer-motion';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'subscription' | 'vp' | 'other';
  image?: string;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const user = getCurrentUser();

  useEffect(() => {
    // Load cart items from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCartItems(JSON.parse(storedCart));
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    // Save cart items to localStorage whenever they change
    if (!isLoading) {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems, isLoading]);

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
    toast({
      title: "Item removed",
      description: "Item has been removed from your cart",
    });
  };

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    ));
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out",
        variant: "destructive",
      });
      return;
    }

    const userName = user ? user.name : "a customer";
    const itemsList = cartItems.map(item => `${item.quantity}x ${item.name} ($${item.price})`).join(', ');
    const totalPrice = getTotalPrice().toFixed(2);
    
    redirectToWhatsApp(
      DEFAULT_WHATSAPP_NUMBER,
      `Cart Checkout: ${itemsList}. Total: $${totalPrice}`,
      userName
    );
    
    // Clear cart after checkout
    setCartItems([]);
    toast({
      title: "Checkout initiated",
      description: "You'll be redirected to WhatsApp to complete your purchase",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-optimize-dark">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              Your <span className="gradient-text">Cart</span>
            </h1>
          </motion.div>
          
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-optimize-blue"></div>
            </div>
          ) : cartItems.length === 0 ? (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <ShoppingCart className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-gray-400 mb-6">Add items to your cart to see them here</p>
              <Button asChild className="bg-optimize-blue hover:bg-optimize-blue/90">
                <a href="/products">Browse Products</a>
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
              <motion.div 
                className="lg:col-span-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <div className="glass-card rounded-xl p-6">
                  <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
                  <div className="space-y-4">
                    {cartItems.map((item) => (
                      <motion.div 
                        key={item.id}
                        variants={itemVariants}
                        className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                      >
                        <div className="flex items-center">
                          {item.image ? (
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-16 h-16 object-cover rounded-md mr-4"
                            />
                          ) : (
                            <div className="w-16 h-16 bg-gradient-to-r from-optimize-blue to-optimize-purple rounded-md flex items-center justify-center mr-4">
                              {item.type === 'subscription' && <ShoppingCart className="h-8 w-8" />}
                              {item.type === 'vp' && <span className="font-bold text-lg">VP</span>}
                            </div>
                          )}
                          <div>
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="text-gray-400">${item.price.toFixed(2)}</p>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="flex items-center mr-4">
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-l-md bg-white/10 hover:bg-white/20"
                            >
                              -
                            </button>
                            <span className="w-10 text-center">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center rounded-r-md bg-white/10 hover:bg-white/20"
                            >
                              +
                            </button>
                          </div>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-500 hover:text-red-400"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="lg:col-span-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="glass-card rounded-xl p-6 sticky top-24">
                  <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Subtotal</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="border-t border-white/10 pt-4 flex justify-between font-semibold">
                      <span>Total</span>
                      <span className="text-xl text-optimize-blue">${getTotalPrice().toFixed(2)}</span>
                    </div>
                  </div>
                  <Button 
                    onClick={handleCheckout}
                    className="w-full mt-6 bg-optimize-blue hover:bg-optimize-blue/90 flex items-center justify-center"
                  >
                    Checkout <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-xs text-gray-400 text-center mt-4">
                    Secure checkout via WhatsApp payment
                  </p>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
