import React, { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Menu, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Star, 
  Users, 
  Target, 
  Trophy,
  ChevronRight,
  Calendar,
  Dumbbell,
  Zap,
  Award,
  TrendingUp,
  Shield,
  Play,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Activity,
  X,
  LogIn,
  UserPlus,
} from 'lucide-react'
import logo from './assets/logo1.png'
import facility1 from './assets/facility1.jpg'
import facility2 from './assets/facility2.jpg'
import baseball from './assets/baseball.png'
import hero from './assets/hero-bg.jpg'
import './App.css'
import BookingFlow from './components/ui/BookingFlow.jsx'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [hero, baseball]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [heroImages.length])

  const services = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Baseball Training",
      description: "Professional baseball instruction and skill development for all ages and skill levels.",
      features: ["Batting Cages", "Pitching Instruction", "Fielding Drills"],
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Softball Training",
      description: "Comprehensive softball training programs designed to enhance performance.",
      features: ["Technique Training", "Game Strategy", "Conditioning"],
      color: "from-purple-500 to-purple-700"
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Indoor Golf League",
      description: "Year-round golf training and league play in a controlled environment.",
      features: ["Swing Analysis", "League Play", "Professional Instruction"],
      color: "from-green-500 to-green-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Training",
      description: "Elite athletic performance training to give you the competitive edge.",
      features: ["Strength Training", "Speed & Agility", "Mental Conditioning"],
      color: "from-orange-500 to-orange-700"
    }
  ]

  const rentals = [
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Cage Rentals',
      description: 'Rent our professional-grade batting cages for individual or team practice.',
      features: ['30 & 60 Minute Slots', 'Automated Pitching Machines', 'Individual or Team Use'],
      color: 'from-red-500 to-red-700',
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Bullpen',
      description: 'Hone your pitching skills in our dedicated bullpen areas with professional mounds.',
      features: ['30 & 60 Minute Slots', 'Professional Mounds', 'Radar Gun Access'],
      color: 'from-cyan-500 to-cyan-700',
    },
    {
      icon: <Dumbbell className="w-8 h-8" />,
      title: 'Weight Room',
      description: 'Access our state-of-the-art weight room to build strength and conditioning.',
      features: ['60 Minute Slots', 'Free Weights & Racks', 'Cardio Equipment'],
      color: 'from-amber-500 to-amber-700',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Infield',
      description: 'Book our full-size indoor infield for team practices, drills, and defensive work.',
      features: ['60 Minute Slots', 'All-Weather Turf', 'Full Team Capacity'],
      color: 'from-lime-500 to-lime-700',
    },
  ];

  const instructors = [
    {
      name: "Coach Mike Johnson",
      specialty: "Baseball",
      experience: "15+ years",
      achievements: "Former MLB Scout",
      rating: 4.9,
      students: 200
    },
    {
      name: "Coach Sarah Williams",
      specialty: "Softball",
      experience: "12+ years",
      achievements: "College All-American",
      rating: 4.8,
      students: 150
    },
    {
      name: "Coach David Chen",
      specialty: "Golf",
      experience: "10+ years",
      achievements: "PGA Professional",
      rating: 4.9,
      students: 180
    }
  ]

  const stats = [
    { number: "500+", label: "Athletes Trained", icon: <Users className="w-8 h-8" /> },
    { number: "15+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "95%", label: "Success Rate", icon: <TrendingUp className="w-8 h-8" /> },
    { number: "24/7", label: "Support", icon: <Shield className="w-8 h-8" /> }
  ]

  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "High School Baseball Player",
      content: "The training at Player's Edge transformed my game completely. I went from bench player to team captain!",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "College Softball Player",
      content: "Coach Sarah's techniques helped me earn a scholarship. The facility is world-class!",
      rating: 5
    },
    {
      name: "John Mitchell",
      role: "Amateur Golfer",
      content: "My handicap improved by 8 strokes in just 3 months. Incredible results!",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-primary text-primary-foreground shadow-lg sticky top-0 z-50 backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src={logo} alt="Player's Edge Performance" className="h-12 w-auto" />
              <div className="ml-3 font-bold tracking-wider flex flex-col leading-none">
                <div className="text-xl">
                  <span className="text-white">Player's</span> <span className="text-yellow-400">Edge</span>
                </div>
                <div className="text-lg text-white">Performance</div>
              </div>
            </div>
            <div className="hidden md:flex items-center">
              <a href="#home" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Home</a>
              <a href="#lessons" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Lessons</a>
              <a href="#rentals" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Rentals</a>
              <a href="#instructors" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Instructors</a>
              <a href="#facility" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Facility</a>
              <a href="#contact" className="hover:bg-primary/80 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">Contact</a>
              <div className="ml-4 flex items-center space-x-2">
                <Button variant="secondary" size="sm">
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
                <Button className="btn-primary neon-border" size="sm" onClick={() => setIsBookingOpen(true)}>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Book Now
                </Button>
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
              <a href="#home" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Home</a>
              <a href="#lessons" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Lessons</a>
              <a href="#rentals" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Rentals</a>
              <a href="#instructors" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Instructors</a>
              <a href="#facility" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Facility</a>
              <a href="#contact" className="hover:bg-primary/80 block px-3 py-2 rounded-md text-base font-medium">Contact</a>
              <div className="mt-4 space-y-2">
                <Button variant="secondary" className="w-full" onClick={() => { setIsMenuOpen(false); }}>
                  <LogIn className="mr-2 h-4 w-4" />
                  Sign In
                </Button>
              </div>
              <Button className="w-full mt-4 btn-primary" onClick={() => { setIsBookingOpen(true); setIsMenuOpen(false); }}>
                <Sparkles className="w-4 h-4 mr-2" />
                Book Now
              </Button>
            </div>
          </div>
        )}
      </nav>
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Hero background"
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div
          className={`absolute top-0 left-0 w-full h-full hero-pattern-overlay z-10 transition-opacity duration-1000 ease-in-out ${
            currentImageIndex === 0 ? 'opacity-20' : 'opacity-0'
          }`}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white z-30">
          <div className="fade-in-up">
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Elevate Your <span className="text-gradient">Performance</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Professional sports training and instruction designed to give you the competitive edge. From baseball and
              softball to golf and performance training, we help athletes reach their full potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="btn-primary text-lg px-8 py-4 text-xl" onClick={() => setIsBookingOpen(true)}>
                <Play className="mr-2 h-6 w-6" />
                Book Your Session
                <ChevronRight className="ml-2 h-6 w-6" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-4 text-xl border-2 border-white text-white hover:bg-white hover:text-primary glass-effect"
              >
                <Activity className="mr-2 h-6 w-6" />
                Watch Demo
              </Button>
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 fade-in-up">
            {stats.map((stat, index) => (
              <div key={index} className="text-center glass-effect p-6 rounded-lg">
                <div className="text-accent mb-2 flex justify-center ">
                  {stat.icon}
                </div>
                <div className="stats-counter">{stat.number}</div>
                <div className="text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 floating-element opacity-20">
          <Target className="w-16 h-16 text-accent" />
        </div>
        <div className="absolute bottom-20 right-10 floating-element opacity-20" style={{animationDelay: '2s'}}>
          <Trophy className="w-20 h-20 text-accent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="lessons" className="section-padding bg-background geometric-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Comprehensive Training <span className="text-gradient">Programs</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Designed to enhance your athletic performance with cutting-edge techniques and personalized coaching
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`card-hover border-0 shadow-xl relative overflow-hidden ${index % 2 === 0 ? 'slide-in-left' : 'slide-in-right'}`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color}`}></div>
                <CardHeader className="text-center relative">
                  <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${service.color} rounded-full text-white w-fit shadow-lg`}>
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center mb-6 text-base">
                    {service.description}
                  </CardDescription>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 btn-primary">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Rentals Section */}
      <section id="rentals" className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Activity className="w-4 h-4 mr-2" />
              Facility Rentals
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Rent Our <span className="text-gradient">State-of-the-Art</span> Facilities
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Whether you're a team, individual, or organization, we offer flexible and affordable rental options for our cutting-edge training facilities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {rentals.map((rental, index) => (
              <Card key={index} className="card-hover glass-effect border-0 shadow-xl fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader className={`p-6 ${rental.color}`}>
                  <div className="flex items-center gap-4">
                    {rental.icon}
                    <CardTitle className="text-2xl font-bold ">{rental.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-lg  mb-4">{rental.description}</p>
                  <ul className="space-y-3 ">
                    {rental.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 mr-2 text-green-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6 btn-primary text-lg py-3">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Star className="w-4 h-4 mr-2" />
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our <span className="text-gradient">Athletes</span> Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover glass-effect border-0 shadow-xl fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <CardHeader>
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <CardDescription className="text-lg italic">
                    "{testimonial.content}"
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="section-padding bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              Expert Team
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              World-Class <span className="text-gradient">Instructors</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Learn from experienced professionals who are passionate about helping you succeed
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructors.map((instructor, index) => (
              <Card key={index} className="card-hover text-center border-0 shadow-xl relative overflow-hidden fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-accent to-yellow-500"></div>
                <CardHeader className="relative">
                  <div className="mx-auto mb-6 w-24 h-24 bg-gradient-to-r from-primary to-blue-600 rounded-full flex items-center justify-center shadow-xl">
                    <Users className="w-12 h-12 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{instructor.name}</CardTitle>
                  <Badge variant="secondary" className="w-fit mx-auto text-lg px-3 py-1">
                    {instructor.specialty}
                  </Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-center items-center space-x-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{instructor.rating}</div>
                      <div className="text-sm text-muted-foreground">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-accent">{instructor.students}</div>
                      <div className="text-sm text-muted-foreground">Students</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{instructor.experience} Experience</p>
                  <p className="font-medium text-accent-foreground">{instructor.achievements}</p>
                  <Button className="w-full btn-primary">
                    Book Session
                    <Calendar className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section id="facility" className="section-padding bg-muted/30 parallax-bg" style={{backgroundImage: `url(${facility2})`}}>
        <div className="bg-black/70 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="slide-in-left">
                <Badge variant="secondary" className="mb-4 text-lg px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  Our Facility
                </Badge>
                <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                  State-of-the-Art <span className="text-gradient">Training Center</span>
                </h2>
                <p className="text-lg text-gray-200 mb-8">
                  Our modern training facility is equipped with the latest technology and equipment 
                  to provide the best possible training environment for athletes of all levels.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center text-white">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                      <Target className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Professional-grade batting cages</h4>
                      <p className="text-gray-300">Latest technology for precision training</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                      <Dumbbell className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Fully equipped training areas</h4>
                      <p className="text-gray-300">Complete strength and conditioning setup</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                      <Trophy className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Indoor golf simulators</h4>
                      <p className="text-gray-300">Year-round golf training capabilities</p>
                    </div>
                  </div>
                  <div className="flex items-center text-white">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-4">
                      <Zap className="w-6 h-6 text-accent-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Performance analysis technology</h4>
                      <p className="text-gray-300">Advanced metrics and video analysis</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="slide-in-right">
                <Card className="glass-effect border-0 shadow-2xl p-8 text-center">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold text-white mb-6">
                      <Clock className="w-8 h-8 mx-auto mb-4 text-accent" />
                      Facility Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6 text-lg text-white">
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="font-medium">Monday - Thursday:</span>
                      <span className="font-bold text-accent">5PM - 8PM</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-white/10 rounded-lg">
                      <span className="font-medium">Friday - Sunday:</span>
                      <span className="font-bold text-red-400">CLOSED</span>
                    </div>
                    <Button className="w-full btn-primary text-lg py-3 mt-6">
                      <Calendar className="w-5 h-5 mr-2" />
                      Schedule Tour
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16 fade-in-up">
            <Badge variant="secondary" className="mb-4 text-lg px-4 py-2 bg-white/20 text-white">
              <Phone className="w-4 h-4 mr-2" />
              Get Started
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Elevate Your <span className="text-gradient">Game?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Take the first step towards athletic excellence. Contact us today to schedule your training session.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <Card className="glass-effect border-0 shadow-2xl card-hover fade-in-up">
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-accent rounded-full text-accent-foreground w-fit">
                  <Phone className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-semibold text-white">Call Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-xl text-white font-medium">(636) 757-3004</p>
                <p className="text-white/70 mt-2">Available during facility hours</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-0 shadow-2xl card-hover fade-in-up" style={{animationDelay: '0.2s'}}>
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-accent rounded-full text-accent-foreground w-fit">
                  <MapPin className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-semibold text-white">Visit Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white font-medium">3020 MO-94 N</p>
                <p className="text-white font-medium">Saint Charles, MO 63301</p>
                <p className="text-white/70 mt-2">Easy parking available</p>
              </CardContent>
            </Card>
            
            <Card className="glass-effect border-0 shadow-2xl card-hover fade-in-up" style={{animationDelay: '0.4s'}}>
              <CardHeader>
                <div className="mx-auto mb-4 p-4 bg-accent rounded-full text-accent-foreground w-fit">
                  <Calendar className="w-8 h-8" />
                </div>
                <CardTitle className="text-2xl font-semibold text-white">Book Online</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="btn-primary text-lg px-6 py-3 w-full" onClick={() => setIsBookingOpen(true)}>
                  <Sparkles className="w-5 h-5 mr-2" />
                  Schedule Now
                </Button>
                <p className="text-white/70 mt-2">Instant confirmation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
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

      {isBookingOpen && <BookingFlow onClose={() => setIsBookingOpen(false)} />}
    </div>
  )
}

export default App

