
import { toast } from "@/hooks/use-toast";
import { v4 as uuidv4 } from 'uuid';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  type: 'subscription' | 'vp' | 'other';
  image?: string;
}

export const getCartItems = (): CartItem[] => {
  const cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

export const addToCart = (item: Omit<CartItem, 'id' | 'quantity'>, quantity: number = 1): void => {
  const cart = getCartItems();
  
  // Check if item already exists in cart
  const existingItemIndex = cart.findIndex(
    (i) => i.name === item.name && i.price === item.price
  );
  
  if (existingItemIndex !== -1) {
    // Update quantity of existing item
    cart[existingItemIndex].quantity += quantity;
  } else {
    // Add new item
    cart.push({
      id: uuidv4(),
      ...item,
      quantity
    });
  }
  
  localStorage.setItem('cart', JSON.stringify(cart));
  
  toast({
    title: "Item added to cart",
    description: `${item.name} has been added to your cart`,
  });
};

export const removeFromCart = (id: string): void => {
  const cart = getCartItems();
  const updatedCart = cart.filter((item) => item.id !== id);
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

export const updateCartItemQuantity = (id: string, quantity: number): void => {
  if (quantity < 1) return;
  
  const cart = getCartItems();
  const updatedCart = cart.map((item) => 
    item.id === id ? { ...item, quantity } : item
  );
  
  localStorage.setItem('cart', JSON.stringify(updatedCart));
};

export const clearCart = (): void => {
  localStorage.setItem('cart', JSON.stringify([]));
};

export const getCartCount = (): number => {
  const cart = getCartItems();
  return cart.reduce((count, item) => count + item.quantity, 0);
};

export const getCartTotal = (): number => {
  const cart = getCartItems();
  return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
};
