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
      <section className="relative py-20 md:py-32 hero-pattern-overlay">
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="container mx-auto text-center relative">
          <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
            <Phone className="w-4 h-4 mr-2" />
            Get in Touch
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            We're here to help you on your athletic journey. Reach out with any questions or to schedule a session.
          </p>
        </div>
      </section>

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