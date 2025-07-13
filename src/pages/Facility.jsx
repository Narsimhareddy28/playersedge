import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Target, Dumbbell, Trophy, Zap, Users, Armchair, Clock, MapPin, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

import facility1 from '../assets/facility1.jpg';
import facility2 from '../assets/facility2.jpg';
import heroBg from '../assets/hero-bg.jpg';
import sportsEq from '../assets/sports-equipment.jpg';

const galleryImages = [
  { src: facility1, alt: 'View of the training cages' },
  { src: facility2, alt: 'Indoor turf field' },
  { src: heroBg, alt: 'Weight room area' },
  { src: sportsEq, alt: 'Close-up of sports equipment' },
];

const amenities = [
  { icon: <Target className="w-8 h-8 text-primary" />, title: 'Batting Cages', description: 'Professional-grade cages with automated pitching machines.' },
  { icon: <Users className="w-8 h-8 text-primary" />, title: 'Full-Size Infield', description: 'All-weather turf for team practices and defensive drills.' },
  { icon: <Dumbbell className="w-8 h-8 text-primary" />, title: 'Weight Room', description: 'State-of-the-art strength and conditioning equipment.' },
  { icon: <Trophy className="w-8 h-8 text-primary" />, title: 'Indoor Golf Simulators', description: 'Year-round golf training with advanced swing analysis.' },
  { icon: <Zap className="w-8 h-8 text-primary" />, title: 'Performance Analysis', description: 'Advanced metrics and video feedback to track progress.' },
  { icon: <Armchair className="w-8 h-8 text-primary" />, title: 'Lounge & Viewing Area', description: 'Comfortable space for parents and athletes to relax.' },
];

export default function Facility() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative py-20 md:py-32 hero-pattern-overlay">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto text-center relative">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            <Shield className="w-4 h-4 mr-2" />
            Our Facility
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            State-of-the-Art Training Center
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Explore our modern, fully-equipped facility designed to help athletes of all levels excel.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Facility Gallery</h2>
            <p className="text-muted-foreground mt-2">A glimpse into where champions are made.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="overflow-hidden rounded-xl shadow-lg card-hover">
                <img src={image.src} alt={image.alt} className="w-full h-full object-cover aspect-video" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Amenities & Features</h2>
            <p className="text-muted-foreground mt-2">Everything you need to train at the highest level.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-md glass-effect">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Visit Us</h2>
                     <p className="text-lg text-muted-foreground mb-6">
                        We're conveniently located in Saint Charles. Come by and see the facility for yourself.
                    </p>
                    <Card className="border-0 shadow-lg p-6 inline-block text-left">
                        <div className="flex items-center mb-4">
                            <MapPin className="w-6 h-6 mr-4 text-primary" />
                            <div>
                                <h4 className="font-bold">3020 MO-94 N</h4>
                                <p className="text-muted-foreground">Saint Charles, MO 63301</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <Clock className="w-6 h-6 mr-4 text-primary" />
                            <div>
                                <h4 className="font-bold">Hours</h4>
                                <p className="text-muted-foreground">Mon-Thu: 5PM - 8PM | Fri-Sun: CLOSED</p>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="text-center">
                    <h3 className="text-2xl font-bold mb-4">Ready to See It in Person?</h3>
                    <p className="text-muted-foreground mb-6">Schedule a tour to get a firsthand look at everything Player's Edge has to offer.</p>
                    <Button size="lg" className="btn-primary text-lg">
                        <Calendar className="w-5 h-5 mr-2" />
                        Schedule a Tour
                    </Button>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
} 