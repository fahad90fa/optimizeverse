
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Twitch, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-optimize-dark border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">OptimizeVerse</h3>
            <p className="text-gray-400 max-w-xs">
              Professional PC optimization services for gamers and professionals.
              Boost your performance today.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-optimize-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-optimize-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-optimize-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitch.tv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-optimize-blue transition-colors">
                <Twitch size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Gaming Optimization
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Working Optimization
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Regular Optimization
                </Link>
              </li>
              <li>
                <Link to="/valorant-store" className="text-gray-400 hover:text-white transition-colors">
                  Valorant VP
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/help" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/tickets" className="text-gray-400 hover:text-white transition-colors">
                  Support Tickets
                </Link>
              </li>
              <li>
                <a href="mailto:support@optimizeverse.com" className="text-gray-400 hover:text-white transition-colors">
                  Email Support
                </a>
              </li>
              <li>
                <a href="https://discord.gg/optimizeverse" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Discord Community
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} OptimizeVerse. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> for gamers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
