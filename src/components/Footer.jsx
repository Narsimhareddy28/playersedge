import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import { Star, Users, Trophy, Phone, MapPin, Clock } from 'lucide-react';
import logo from '../assets/logo1.png';

export default function Footer() {
  return (
    <footer className="bg-background border-t py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <img src={logo} alt="Player's Edge Performance" className="h-10 w-auto mr-3" />
              <span className="text-xl font-bold">Player's Edge Performance</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Elevating athletic performance through professional training, expert instruction, and state-of-the-art facilities.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="rounded-full">
                <Star className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Users className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                <Trophy className="w-4 h-4" />
              </Button>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#lessons" className="hover:text-foreground transition-colors">Lessons</a></li>
              <li><a href="#rentals" className="hover:text-foreground transition-colors">Rentals</a></li>
              <li><a href="#instructors" className="hover:text-foreground transition-colors">Instructors</a></li>
              <li><a href="#facility" className="hover:text-foreground transition-colors">Facility</a></li>
              <li><a href="#contact" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                (636) 757-3004
              </li>
              <li className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Saint Charles, MO
              </li>
              <li className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Mon-Thu: 5PM-8PM
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-sm text-muted-foreground">
              © 2025 Player's Edge Performance. All rights reserved.
            </span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 