import React, { useState } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Menu, Sparkles, X, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo1.png';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Player's Edge Performance" className="h-12 w-auto" />
            <div className="ml-3 font-bold tracking-wider flex flex-col leading-none">
              <div className="text-xl">
                <span className="text-white italic">Player's</span> <span className="text-yellow-400 italic">Edge</span>
              </div>
              <div className="text-lg text-white">Performance</div>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Link to="/" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Home</Link>
            <Link to="/lessons" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Lessons</Link>
            <Link to="/rentals" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Rentals</Link>
            <Link to="/instructors" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Instructors</Link>
            <Link to="/facility" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Facility</Link>
            <Link to="/announcements" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Announcements</Link>
            <Link to="/contact" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Contact</Link>
            <div className="ml-4 flex items-center space-x-2">
              <Button variant="secondary" size="sm">
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
              <Link to="/book-now">
                <Button className="btn-primary neon-border" size="sm">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="bg-primary-darker inline-flex items-center justify-center p-2 rounded-md text-primary-foreground hover:text-white hover:bg-primary-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary-darker focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? <Menu className="block h-6 w-6" aria-hidden="true" /> : <X className="block h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/lessons" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Lessons</Link>
            <Link to="/rentals" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Rentals</Link>
            <Link to="/instructors" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Instructors</Link>
            <Link to="/facility" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Facility</Link>
            <Link to="/announcements" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Announcements</Link>
            <Link to="/contact" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
            <div className="mt-4 space-y-2">
              <Button variant="secondary" className="w-full" onClick={() => { setIsMenuOpen(false); }}>
                <LogIn className="mr-2 h-4 w-4" />
                Sign In
              </Button>
            </div>
            <Link to="/book-now">
              <Button className="w-full mt-4 btn-primary" onClick={() => setIsMenuOpen(false)}>
                <Sparkles className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 