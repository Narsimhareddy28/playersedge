import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dumbbell, Target, Trophy, Zap, CheckCircle, ArrowRight, Sparkles, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

import baseballImg from '../assets/baseball.png';
import softballImg from '../assets/softballl.png';
import golfImg from '../assets/facility2.jpg';
import performanceImg from '../assets/training.png';

const lessons = [
  {
    icon: <Target className="w-10 h-10" />,
    title: 'Baseball Training',
    description: 'Our comprehensive baseball training program covers everything from fundamentals to advanced techniques. We focus on hitting, pitching, fielding, and strategy to help players excel in every aspect of the game.',
    features: ['One-on-One Coaching', 'Group Clinics', 'Video Analysis Feedback', 'Position-Specific Drills'],
    imgSrc: baseballImg,
  },
  {
    icon: <Dumbbell className="w-10 h-10" />,
    title: 'Softball Training',
    description: 'Designed for softball players of all ages, our training program enhances skills in hitting, pitching, and fielding. We emphasize mechanics and game intelligence to build confident and effective players.',
    features: ['Fastpitch & Slowpitch Training', 'Strength & Conditioning', 'Team Practice Sessions', 'Recruiting Guidance'],
    imgSrc: softballImg,
  },
  // {
  //   icon: <Trophy className="w-10 h-10" />,
  //   title: 'Indoor Golf League',
  //   description: 'Join our year-round indoor golf league to keep your skills sharp, no matter the weather. Our simulators provide a realistic and challenging environment for competitive play and practice.',
  //   features: ['Weekly League Matches', 'Advanced Swing Analytics', 'Pro-Level Courses', 'Handicap Tracking'],
  //   imgSrc: golfImg,
  // },
  // {
  //   icon: <Zap className="w-10 h-10" />,
  //   title: 'Performance Training',
  //   description: 'Elevate your athleticism with our performance training programs. We focus on developing speed, agility, strength, and endurance to give you a competitive edge in any sport.',
  //   features: ['Customized Workout Plans', 'Agility Ladder & Cone Drills', 'Explosive Power Training', 'Nutritional Guidance'],
  //   imgSrc: performanceImg,
  // },
];

export default function Lessons() {
  return (
    <div className="bg-background text-foreground">
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Professional Training Lessons
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Comprehensive training programs designed to develop your skills and take your game to the next level.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Target className="w-5 h-5" />
              <span className="font-semibold">All Sports</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Flexible Scheduling</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <CheckCircle className="w-5 h-5" />
              <span className="font-semibold">Proven Results</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="space-y-24">
            {lessons.map((lesson, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className={`order-2 md:order-${index % 2 === 0 ? '1' : '2'}`}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-primary/10 rounded-lg text-primary">{lesson.icon}</div>
                    <h3 className="text-3xl font-bold">{lesson.title}</h3>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{lesson.description}</p>
                  
                  <Accordion type="single" collapsible className="w-full mb-6">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>View Program Features</AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 pt-2">
                          {lesson.features.map((feature, i) => (
                            <li key={i} className="flex items-center text-base">
                              <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                  
                  <Button size="lg" className="btn-primary">
                    Book a Session
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </div>
                <div className={`order-1 md:order-${index % 2 === 0 ? '2' : '1'}`}>
                  <img src={lesson.imgSrc} alt={lesson.title} className="rounded-xl shadow-2xl w-full h-auto object-cover aspect-video" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Step Up Your Game?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Don't wait to start your journey towards excellence. Our expert instructors are ready to help you achieve your goals.
            </p>
            <Button size="lg" className="btn-primary text-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Your First Lesson
            </Button>
        </div>
      </section>
    </div>
  );
} 