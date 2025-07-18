import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Activity, Target, Dumbbell, Users, CheckCircle, Sparkles, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const rentalOptions = [
  {
    icon: <Activity className="w-10 h-10" />,
    title: 'Cage Rentals',
    description: 'Rent our professional-grade batting cages for individual or team practice. Each cage is equipped with an automated pitching machine that can be adjusted for speed and pitch type.',
    features: ['30 & 60 Minute Slots', 'Automated Pitching Machines', 'Individual or Team Use', 'Helmets & Bats Provided'],
    imgSrc: '/src/assets/facility1.jpg',
  },
  {
    icon: <Target className="w-10 h-10" />,
    title: 'Bullpen',
    description: 'Hone your pitching skills in our dedicated bullpen areas. Our professional-grade mounds and radar gun access provide the perfect environment for serious pitchers.',
    features: ['30 & 60 Minute Slots', 'Professional Mounds', 'Radar Gun Access', 'Catcher\'s Gear Available'],
    imgSrc: '/src/assets/facility2.jpg',
  },
  {
    icon: <Dumbbell className="w-10 h-10" />,
    title: 'Weight Room',
    description: 'Access our state-of-the-art weight room to build strength and conditioning. The facility is equipped with a wide range of free weights, racks, and cardio machines.',
    features: ['60 Minute Slots', 'Free Weights & Racks', 'Cardio Equipment', 'Sanitized & Clean Environment'],
    imgSrc: '/src/assets/hero-bg.jpg',
  },
  {
    icon: <Users className="w-10 h-10" />,
    title: 'Infield',
    description: 'Book our full-size indoor infield for team practices, drills, and defensive work. The all-weather turf is perfect for year-round training, regardless of conditions.',
    features: ['60 Minute Slots', 'All-Weather Turf', 'Full Team Capacity', 'Bases & Training Aids Included'],
    imgSrc: '/src/assets/baseball.png',
  },
];

export default function Rentals() {
  return (
    <div className="bg-background text-foreground">
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Activity className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Book Our Premier Facilities
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Rent our professional-grade facilities for individual training, team practice, or special events.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Target className="w-5 h-5" />
              <span className="font-semibold">Batting Cages</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Dumbbell className="w-5 h-5" />
              <span className="font-semibold">Weight Room</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Team Spaces</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {rentalOptions.map((rental, index) => (
              <Card key={index} className="card-hover border-0 shadow-xl overflow-hidden flex flex-col">
                <img src={rental.imgSrc} alt={rental.title} className="w-full h-56 object-cover" />
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">{rental.icon}</div>
                    <CardTitle className="text-2xl font-bold">{rental.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-grow p-6">
                  <p className="text-muted-foreground mb-6 flex-grow">{rental.description}</p>
                  <ul className="space-y-3 mb-6">
                    {rental.features.map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button size="lg" className="w-full mt-auto btn-primary">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Need a Custom Booking?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            For special events, long-term rentals, or full-facility bookings, please contact us directly to discuss your needs. We're happy to create a custom package for you.
          </p>
          <Button size="lg" className="btn-primary text-lg">
            <Calendar className="w-5 h-5 mr-2" />
            Contact Us for Custom Packages
          </Button>
        </div>
      </section>
    </div>
  );
} 