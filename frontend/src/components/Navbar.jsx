import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Women', path: '/women' },
    { name: 'Men', path: '/men' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact Us', path: '/contact' },
    { name: 'Blog', path: '/blog' }
  ];

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <span className="text-xl font-semibold text-gray-900">Gboyega's Store</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.path}
                className="text-gray-700 hover:text-amber-900 transition-colors text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden sm:block text-gray-700 hover:text-amber-900 transition-colors"
            >
              <Search size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden sm:block text-gray-700 hover:text-amber-900 transition-colors"
            >
              <Heart size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden sm:block text-gray-700 hover:text-amber-900 transition-colors"
            >
              <ShoppingCart size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="hidden sm:block text-gray-700 hover:text-amber-900 transition-colors"
            >
              <User size={20} />
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-gray-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="block text-gray-700 hover:text-amber-900 transition-colors text-base font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              {/* Mobile Icons */}
              <div className="flex items-center gap-6 pt-4 border-t sm:hidden">
                <button className="text-gray-700 hover:text-amber-900 transition-colors">
                  <Search size={20} />
                </button>
                <button className="text-gray-700 hover:text-amber-900 transition-colors">
                  <Heart size={20} />
                </button>
                <button className="text-gray-700 hover:text-amber-900 transition-colors">
                  <ShoppingCart size={20} />
                </button>
                <button className="text-gray-700 hover:text-amber-900 transition-colors">
                  <User size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}