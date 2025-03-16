
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This will be replaced with actual auth logic

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-optimize-dark/90 backdrop-blur-md z-50 py-4 border-b border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold gradient-text">OptimizeVerse</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-white/80 hover:text-white transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-white/80 hover:text-white transition-colors">
              Products
            </Link>
            <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">
              Pricing
            </Link>
            <Link to="/valorant-store" className="text-white/80 hover:text-white transition-colors">
              VP Store
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="relative">
                <ShoppingCart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 bg-optimize-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                  0
                </span>
              </Button>
            </Link>
            
            {isLoggedIn ? (
              <Link to="/profile">
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            ) : (
              <div className="flex space-x-2">
                <Link to="/login">
                  <Button variant="outline" className="border-optimize-blue text-optimize-blue hover:bg-optimize-blue/10">
                    Login
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="bg-optimize-blue hover:bg-optimize-blue/90">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col space-y-4">
            <Link to="/" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/products" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>
              Products
            </Link>
            <Link to="/pricing" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>
              Pricing
            </Link>
            <Link to="/valorant-store" className="text-white/80 hover:text-white transition-colors" onClick={toggleMenu}>
              VP Store
            </Link>
            
            <div className="flex items-center space-x-4 pt-2">
              <Link to="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 bg-optimize-purple text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                    0
                  </span>
                </Button>
              </Link>
              
              {isLoggedIn ? (
                <Link to="/profile">
                  <Button variant="ghost" size="icon">
                    <User className="h-5 w-5" />
                  </Button>
                </Link>
              ) : (
                <div className="flex space-x-2">
                  <Link to="/login">
                    <Button variant="outline" className="border-optimize-blue text-optimize-blue hover:bg-optimize-blue/10">
                      Login
                    </Button>
                  </Link>
                  <Link to="/signup">
                    <Button className="bg-optimize-blue hover:bg-optimize-blue/90">
                      Sign Up
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
