import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Star, Users, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

const instructors = [
  {
    name: "Coach Mike Johnson",
    specialty: "Baseball",
    experience: "15+ years",
    bio: "A former MLB scout, Coach Mike brings a wealth of professional experience. He specializes in hitting mechanics and defensive strategy, helping players unlock their full potential on the field.",
    rating: 4.9,
    students: 200,
  },
  {
    name: "Coach Sarah Williams",
    specialty: "Softball",
    experience: "12+ years",
    bio: "As a former college All-American, Coach Sarah knows what it takes to succeed at the highest levels. Her expertise lies in pitching techniques and building mental toughness in her athletes.",
    rating: 4.8,
    students: 150,
  },
  {
    name: "Coach David Chen",
    specialty: "Golf",
    experience: "10+ years",
    bio: "A certified PGA Professional, Coach David is passionate about the art and science of golf. He uses advanced swing analysis to help golfers of all levels improve their game and lower their scores.",
    rating: 4.9,
    students: 180,
  },
  {
    name: "Coach Emily White",
    specialty: "Performance Training",
    experience: "8+ years",
    bio: "With a masters in sports science, Coach Emily designs elite performance training programs. She focuses on building explosive power, speed, and agility to give athletes a competitive edge.",
    rating: 5.0,
    students: 120,
  },
];

export default function Instructors() {
  return (
    <div className="bg-background text-foreground">
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Award className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Meet Our Expert Coaches
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Learn from experienced professionals who are passionate about helping you achieve your athletic goals.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="font-semibold">4.9/5 Rating</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Users className="w-5 h-5" />
              <span className="font-semibold">650+ Students</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Award className="w-5 h-5" />
              <span className="font-semibold">Professional Certified</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12">
            {instructors.map((instructor, index) => (
              <Card key={index} className="card-hover border-0 shadow-xl overflow-hidden flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3 h-64 md:h-full flex items-center justify-center bg-muted/40 p-4">
                  <User className="w-32 h-32 text-muted-foreground" />
                </div>
                <div className="w-full md:w-2/3">
                  <CardHeader>
                    <div className="flex flex-col items-start">
                        <Badge className="mb-2">{instructor.specialty}</Badge>
                        <CardTitle className="text-2xl font-bold">{instructor.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{instructor.experience} Experience</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{instructor.bio}</p>
                    <div className="flex justify-between items-center mb-6">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-yellow-400 mr-1" />
                        <span className="font-bold">{instructor.rating}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-5 h-5 text-primary mr-2" />
                        <span className="font-bold">{instructor.students}+ Students</span>
                      </div>
                    </div>
                    <Button size="lg" className="w-full btn-primary">
                      Book a Session with {instructor.name.split(' ')[1]}
                    </Button>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 