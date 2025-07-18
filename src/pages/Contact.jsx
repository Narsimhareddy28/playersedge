import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function Contact() {
  return (
    <div className="bg-background text-foreground">
      
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Phone className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              We're here to help you on your athletic journey. Reach out with any questions or to schedule a session.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-yellow-400">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">Saint Charles, MO</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">(636) 757-3004</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Clock className="w-5 h-5" />
              <span className="font-semibold">Mon-Thu 5-8 PM</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-xl p-8 glass-effect">
                <CardHeader>
                  <CardTitle className="text-3xl font-bold">Send Us a Message</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="e.g., Baseball Training Inquiry" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="Your message here..." rows={6} />
                    </div>
                    <Button type="submit" size="lg" className="w-full btn-primary text-lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-8">
              <Card className="border-0 shadow-xl p-6 text-center glass-effect">
                <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                        <MapPin className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl font-semibold">Our Location</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">3020 MO-94 N</p>
                    <p className="text-muted-foreground">Saint Charles, MO 63301</p>
                </CardContent>
              </Card>
              <Card className="border-0 shadow-xl p-6 text-center glass-effect">
                <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                        <Clock className="w-8 h-8 text-primary" />
                    </div>
                  <CardTitle className="text-2xl font-semibold">Business Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Mon-Thu: 5PM - 8PM</p>
                  <p className="text-muted-foreground">Fri-Sun: CLOSED</p>
                </CardContent>
              </Card>
               <Card className="border-0 shadow-xl p-6 text-center glass-effect">
                <CardHeader>
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                        <Phone className="w-8 h-8 text-primary" />
                    </div>
                  <CardTitle className="text-2xl font-semibold">Call Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">(636) 757-3004</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

       <section className="h-[400px]">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3107.399659392286!2d-90.54203688465136!3d38.82390897958217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87df2f5b5f2adceb%3A0x8e8b0b5f2b3b6a9a!2s3020%20N%20Hwy%2094%2C%20St%20Charles%2C%20MO%2063301!5e0!3m2!1sen!2sus!4v1628109436113!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
} 