import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Trophy, Target, Users, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const announcements = [
  {
    id: 1,
    title: 'New Indoor Golf League Starting February 2025',
    date: '2025-01-15',
    category: 'League',
    excerpt: 'Join our exciting new indoor golf league! Perfect for all skill levels with weekly matches and prizes.',
    content: 'We\'re thrilled to announce the launch of our new indoor golf league starting February 1st, 2025. This league is open to golfers of all skill levels and will feature weekly matches, skill-building sessions, and exciting prizes for top performers.',
    featured: true,
    icon: <Trophy className="w-6 h-6" />
  },
  {
    id: 2,
    title: 'Extended Winter Hours - Now Open Until 9PM',
    date: '2025-01-10',
    category: 'Hours',
    excerpt: 'Great news! We\'ve extended our winter hours to better serve our athletes.',
    content: 'Due to popular demand, we\'re extending our facility hours during the winter months. Starting January 15th, we\'ll be open Monday through Thursday from 5PM to 9PM. This gives you an extra hour to perfect your skills!',
    featured: false,
    icon: <Clock className="w-6 h-6" />
  },
  {
    id: 3,
    title: 'Coach Sarah Williams Joins Our Softball Program',
    date: '2025-01-05',
    category: 'Staff',
    excerpt: 'We\'re excited to welcome Coach Sarah Williams, former college All-American, to our coaching staff.',
    content: 'Please join us in welcoming Coach Sarah Williams to the Player\'s Edge family! Sarah brings over 12 years of coaching experience and was a college All-American. She\'ll be leading our softball training programs and is already accepting new students.',
    featured: false,
    icon: <Users className="w-6 h-6" />
  },
  {
    id: 4,
    title: 'New Equipment Arrival - Latest Pitching Machines',
    date: '2025-01-01',
    category: 'Equipment',
    excerpt: 'State-of-the-art pitching machines have arrived to enhance your training experience.',
    content: 'We\'ve invested in the latest pitching machine technology to provide our athletes with the best possible training experience. These new machines offer improved accuracy, variable speeds, and multiple pitch types to challenge players at every level.',
    featured: false,
    icon: <Target className="w-6 h-6" />
  }
];

const categories = ['All', 'League', 'Hours', 'Staff', 'Equipment'];

export default function Announcements() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAnnouncements = selectedCategory === 'All' 
    ? announcements 
    : announcements.filter(announcement => announcement.category === selectedCategory);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-background text-foreground">
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
        <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.jpg')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
              Announcements
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Stay up to date with the latest news, events, and updates from Player's Edge Performance.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-2 text-yellow-400">
              <Trophy className="w-5 h-5" />
              <span className="font-semibold">New Programs</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Calendar className="w-5 h-5" />
              <span className="font-semibold">Events & Updates</span>
            </div>
            <div className="flex items-center space-x-2 text-yellow-400">
              <Users className="w-5 h-5" />
              <span className="font-semibold">Community News</span>
            </div>
          </div>
        </div>
      </div>

      <section className="py-20 md:py-28">
        <div className="container mx-auto">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "btn-primary" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Featured Announcement */}
          {filteredAnnouncements.some(announcement => announcement.featured) && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-8 text-center">Featured Announcement</h2>
              {filteredAnnouncements
                .filter(announcement => announcement.featured)
                .map((announcement) => (
                  <Card key={announcement.id} className="card-hover border-0 shadow-xl overflow-hidden">
                    <CardHeader className="bg-gradient-to-r from-primary to-blue-600 text-primary-foreground p-8">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-white/20 rounded-lg">
                          {announcement.icon}
                        </div>
                        <div>
                          <Badge variant="secondary" className="mb-2">
                            {announcement.category}
                          </Badge>
                          <CardTitle className="text-3xl font-bold">{announcement.title}</CardTitle>
                          <p className="text-primary-foreground/80 mt-2">
                            {formatDate(announcement.date)}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-8">
                      <p className="text-lg text-muted-foreground">{announcement.content}</p>
                    </CardContent>
                  </Card>
                ))}
            </div>
          )}

          {/* Regular Announcements */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAnnouncements
              .filter(announcement => !announcement.featured)
              .map((announcement) => (
                <Card key={announcement.id} className="card-hover border-0 shadow-xl overflow-hidden flex flex-col">
                  <CardHeader className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary">{announcement.category}</Badge>
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {announcement.icon}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-bold">{announcement.title}</CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4 mr-2" />
                      {formatDate(announcement.date)}
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow">
                    <p className="text-muted-foreground mb-4">{announcement.excerpt}</p>
                    <Button variant="outline" className="w-full">
                      Read More
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
            Stay Connected
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Don't miss out on important updates, new programs, and special events. Follow us for the latest news.
          </p>
          <Button size="lg" className="btn-primary text-lg">
            <Users className="w-5 h-5 mr-2" />
            Join Our Newsletter
          </Button>
        </div>
      </section>
    </div>
  );
} 