import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Calendar } from '@/components/ui/calendar.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Separator } from '@/components/ui/separator.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import {
  CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  CreditCard,
  CheckCircle,
  Target,
  Dumbbell,
  Trophy,
  Zap,
  Star,
  MapPin,
  Users,
  Timer,
  DollarSign,
  Award,
  Building,
  Sparkles,
  Calendar as CalendarLucide,
  ShoppingCart,
  Gift,
  Ticket,
  Crown,
  Flame,
  Shield,
  Heart
} from 'lucide-react'
import { format } from 'date-fns'

export default function BookNow() {
  const [activeTab, setActiveTab] = useState('lessons')
  const [selectedService, setSelectedService] = useState(null)
  const [selectedPackage, setSelectedPackage] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [bookingStep, setBookingStep] = useState(1)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    specialRequests: ''
  })

  const trainingServices = [
    {
      id: 'baseball',
      icon: <Target className="w-12 h-12" />,
      title: "Baseball Training",
      description: "Professional baseball instruction with advanced techniques",
      price: 75,
      duration: 60,
      gradient: "from-blue-500 via-blue-600 to-blue-700",
      features: ["Batting Analysis", "Pitching Mechanics", "Fielding Drills", "Game Strategy"],
      popularity: "Most Popular",
      rating: 4.9
    },
    {
      id: 'softball',
      icon: <Dumbbell className="w-12 h-12" />,
      title: "Softball Training",
      description: "Comprehensive softball programs for all skill levels",
      price: 70,
      duration: 60,
      gradient: "from-purple-500 via-purple-600 to-purple-700",
      features: ["Swing Mechanics", "Defensive Positioning", "Speed Training", "Mental Game"],
      popularity: "Trending",
      rating: 4.8
    },
    {
      id: 'golf',
      icon: <Trophy className="w-12 h-12" />,
      title: "Indoor Golf League",
      description: "Year-round golf training and competitive league play",
      price: 80,
      duration: 90,
      gradient: "from-green-500 via-green-600 to-green-700",
      features: ["Swing Analysis", "Course Strategy", "Putting Clinic", "Tournament Prep"],
      popularity: "Premium",
      rating: 4.9
    },
    {
      id: 'performance',
      icon: <Zap className="w-12 h-12" />,
      title: "Performance Training",
      description: "Elite athletic performance and conditioning",
      price: 85,
      duration: 75,
      gradient: "from-orange-500 via-orange-600 to-orange-700",
      features: ["Strength Training", "Speed Development", "Agility Work", "Recovery"],
      popularity: "Elite",
      rating: 4.7
    }
  ]

  const rentalOptions = [
    {
      id: 'cage-rental',
      icon: <Building className="w-12 h-12" />,
      title: "Batting Cage Rental",
      description: "Private batting cage with pitching machine",
      price: 40,
      duration: 60,
      gradient: "from-red-500 via-red-600 to-red-700",
      features: ["Pitching Machine", "Video Analysis", "Equipment Included", "Private Space"],
      capacity: "Up to 4 people"
    },
    {
      id: 'bullpen',
      icon: <Target className="w-12 h-12" />,
      title: "Bullpen Sessions",
      description: "Professional bullpen for pitching practice",
      price: 35,
      duration: 45,
      gradient: "from-indigo-500 via-indigo-600 to-indigo-700",
      features: ["Mound Setup", "Catcher Available", "Video Recording", "Analysis Tools"],
      capacity: "Up to 2 people"
    },
    {
      id: 'weight-room',
      icon: <Dumbbell className="w-12 h-12" />,
      title: "Weight Room Access",
      description: "Full access to our strength training facility",
      price: 25,
      duration: 90,
      gradient: "from-gray-500 via-gray-600 to-gray-700",
      features: ["Full Equipment", "Trainer Available", "Workout Plans", "Progress Tracking"],
      capacity: "Up to 6 people"
    },
    {
      id: 'infield',
      icon: <Users className="w-12 h-12" />,
      title: "Infield Practice",
      description: "Synthetic infield for defensive drills",
      price: 50,
      duration: 60,
      gradient: "from-yellow-500 via-yellow-600 to-yellow-700",
      features: ["Full Infield", "Equipment Provided", "Coaching Tips", "Team Friendly"],
      capacity: "Up to 8 people"
    }
  ]

  const packages = [
    {
      id: 'starter',
      name: "Starter Package",
      icon: <Gift className="w-8 h-8" />,
      sessions: 4,
      price: 280,
      originalPrice: 320,
      savings: 40,
      duration: "1 Month",
      features: ["4 Training Sessions", "Basic Analysis", "Progress Tracking", "Equipment Included"],
      badge: "Best Value",
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 'premium',
      name: "Premium Package",
      icon: <Crown className="w-8 h-8" />,
      sessions: 8,
      price: 520,
      originalPrice: 640,
      savings: 120,
      duration: "2 Months",
      features: ["8 Training Sessions", "Advanced Analysis", "Personalized Plan", "Priority Booking", "Nutrition Guide"],
      badge: "Most Popular",
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 'elite',
      name: "Elite Package",
      icon: <Flame className="w-8 h-8" />,
      sessions: 12,
      price: 720,
      originalPrice: 960,
      savings: 240,
      duration: "3 Months",
      features: ["12 Training Sessions", "Elite Coaching", "Video Analysis", "Performance Metrics", "Recovery Sessions", "Mental Training"],
      badge: "Elite Choice",
      color: "from-orange-500 to-orange-600"
    }
  ]

  const instructors = [
    {
      id: 'mike',
      name: "Coach Mike Johnson",
      specialty: "Baseball",
      experience: "15+ years",
      rating: 4.9,
      reviews: 127,
      price: 75,
      services: ['baseball'],
      achievements: ["Former MLB Player", "Certified Instructor", "Youth Coach of the Year"],
      availability: "Mon-Thu 5-8 PM"
    },
    {
      id: 'sarah',
      name: "Coach Sarah Williams",
      specialty: "Softball",
      experience: "12+ years",
      rating: 4.8,
      reviews: 94,
      price: 70,
      services: ['softball'],
      achievements: ["College All-Star", "Certified Trainer", "Championship Coach"],
      availability: "Tue-Fri 4-7 PM"
    },
    {
      id: 'david',
      name: "Coach David Chen",
      specialty: "Golf",
      experience: "10+ years",
      rating: 4.9,
      reviews: 156,
      price: 80,
      services: ['golf'],
      achievements: ["PGA Professional", "Tournament Winner", "Swing Specialist"],
      availability: "Mon-Wed 6-9 PM"
    },
    {
      id: 'alex',
      name: "Coach Alex Rodriguez",
      specialty: "Performance",
      experience: "8+ years",
      rating: 4.7,
      reviews: 83,
      price: 85,
      services: ['performance'],
      achievements: ["Sports Science Degree", "Strength Specialist", "Recovery Expert"],
      availability: "Wed-Fri 5-8 PM"
    }
  ]

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM'
  ]

  const handleServiceSelect = (service) => {
    setSelectedService(service)
    setBookingStep(2)
  }

  const handlePackageSelect = (pkg) => {
    setSelectedPackage(pkg)
    setBookingStep(2)
  }

  const progressPercentage = (bookingStep / 4) * 100

  const renderHeroSection = () => (
    <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
      <div className="absolute inset-0 bg-[url('/src/assets/hero-pattern.jpg')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <Sparkles className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-yellow-400 bg-clip-text text-transparent">
            Book Your Training
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Choose from lessons, rentals, or packages - Your path to excellence starts here
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex items-center space-x-2 text-yellow-400">
            <Star className="w-5 h-5 fill-current" />
            <span className="font-semibold">4.8/5 Rating</span>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Users className="w-5 h-5" />
            <span className="font-semibold">500+ Happy Athletes</span>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <Award className="w-5 h-5" />
            <span className="font-semibold">Expert Coaches</span>
          </div>
        </div>
      </div>
    </div>
  )

  const renderServiceCard = (service, isRental = false) => (
    <Card 
      key={service.id}
      className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 hover:border-accent/50 relative overflow-hidden"
      onClick={() => handleServiceSelect(service)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <CardHeader className="text-center relative z-10">
        <div className="relative mb-4">
          <div className={`mx-auto p-6 bg-gradient-to-br ${service.gradient} rounded-2xl text-white w-fit shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
            {service.icon}
          </div>
          {service.popularity && (
            <Badge className="absolute -top-2 -right-2 bg-yellow-400 text-black font-bold">
              {service.popularity}
            </Badge>
          )}
        </div>
        
        <CardTitle className="text-2xl mb-2 group-hover:text-accent transition-colors">
          {service.title}
        </CardTitle>
        <CardDescription className="text-base">{service.description}</CardDescription>
      </CardHeader>
      
      <CardContent className="text-center space-y-4">
        <div className="flex justify-center items-center space-x-4">
          <div className="text-3xl font-bold text-accent">${service.price}</div>
          <div className="text-sm text-muted-foreground">
            <Timer className="w-4 h-4 inline mr-1" />
            {service.duration} min
          </div>
        </div>
        
        {service.rating && (
          <div className="flex justify-center items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{service.rating}</span>
          </div>
        )}
        
        {service.capacity && (
          <div className="flex justify-center items-center space-x-1 text-sm text-muted-foreground">
            <Users className="w-4 h-4" />
            <span>{service.capacity}</span>
          </div>
        )}
        
        <div className="space-y-2">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center justify-center space-x-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full btn-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Book Now
        </Button>
      </CardContent>
    </Card>
  )

  const renderPackageCard = (pkg) => (
    <Card 
      key={pkg.id}
      className="group cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-2xl border-2 hover:border-accent/50 relative overflow-hidden"
      onClick={() => handlePackageSelect(pkg)}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${pkg.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
      
      <CardHeader className="text-center relative z-10">
        <div className="relative mb-4">
          <div className={`mx-auto p-4 bg-gradient-to-br ${pkg.color} rounded-2xl text-white w-fit shadow-lg`}>
            {pkg.icon}
          </div>
          <Badge className="absolute -top-2 -right-2 bg-green-500 text-white font-bold">
            {pkg.badge}
          </Badge>
        </div>
        
        <CardTitle className="text-2xl mb-2">{pkg.name}</CardTitle>
        <div className="space-y-2">
          <div className="text-4xl font-bold text-accent">${pkg.price}</div>
          <div className="text-sm text-muted-foreground line-through">${pkg.originalPrice}</div>
          <Badge variant="secondary" className="bg-green-100 text-green-800">
            Save ${pkg.savings}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <div className="flex justify-center items-center space-x-2">
            <Ticket className="w-4 h-4 text-accent" />
            <span className="font-medium">{pkg.sessions} Sessions</span>
          </div>
          <div className="flex justify-center items-center space-x-2 text-sm text-muted-foreground">
            <CalendarLucide className="w-4 h-4" />
            <span>{pkg.duration}</span>
          </div>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          {pkg.features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        <Button className="w-full btn-primary group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
          <Gift className="w-4 h-4 mr-2" />
          Choose Package
        </Button>
      </CardContent>
    </Card>
  )

  const renderInstructorCard = (instructor) => (
    <Card key={instructor.id} className="hover:shadow-lg transition-shadow">
      <CardHeader className="text-center">
        <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center">
          <User className="w-10 h-10 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl">{instructor.name}</CardTitle>
        <Badge variant="secondary">{instructor.specialty}</Badge>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="text-center space-y-2">
          <div className="flex justify-center items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="font-medium">{instructor.rating}</span>
            <span className="text-sm text-muted-foreground">({instructor.reviews} reviews)</span>
          </div>
          <div className="text-sm text-muted-foreground">{instructor.experience}</div>
          <div className="text-lg font-bold text-accent">${instructor.price}/session</div>
        </div>
        
        <Separator />
        
        <div className="space-y-2">
          <h4 className="font-medium text-sm">Achievements:</h4>
          {instructor.achievements.map((achievement, index) => (
            <div key={index} className="flex items-center space-x-2 text-sm">
              <Award className="w-3 h-3 text-yellow-500" />
              <span>{achievement}</span>
            </div>
          ))}
        </div>
        
        <div className="text-sm">
          <span className="font-medium">Available: </span>
          <span className="text-muted-foreground">{instructor.availability}</span>
        </div>
      </CardContent>
    </Card>
  )

  const renderBookingProgress = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Booking Progress</h3>
        <span className="text-sm text-muted-foreground">Step {bookingStep} of 4</span>
      </div>
      <Progress value={progressPercentage} className="h-2" />
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      {renderHeroSection()}
      
      <div className="max-w-7xl mx-auto px-4 py-16">
        {bookingStep > 1 && renderBookingProgress()}
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="lessons" className="text-lg">
              <Target className="w-5 h-5 mr-2" />
              Training Lessons
            </TabsTrigger>
            <TabsTrigger value="rentals" className="text-lg">
              <Building className="w-5 h-5 mr-2" />
              Facility Rentals
            </TabsTrigger>
            <TabsTrigger value="packages" className="text-lg">
              <Gift className="w-5 h-5 mr-2" />
              Training Packages
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="lessons" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Professional Training Lessons</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Work with our expert coaches to elevate your game with personalized training sessions
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {trainingServices.map(service => renderServiceCard(service))}
            </div>
            
            <div className="mt-16">
              <h3 className="text-3xl font-bold text-center mb-8">Meet Our Expert Coaches</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {instructors.map(instructor => renderInstructorCard(instructor))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="rentals" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Facility Rentals</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Book our premium facilities for private practice sessions and team training
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {rentalOptions.map(rental => renderServiceCard(rental, true))}
            </div>
          </TabsContent>
          
          <TabsContent value="packages" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Training Packages</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Save money with our comprehensive training packages designed for serious athletes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map(pkg => renderPackageCard(pkg))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Trust Indicators */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-8">Why Choose Player's Edge?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Shield className="w-12 h-12 mx-auto text-green-500" />
              <h4 className="text-xl font-semibold">100% Satisfaction Guarantee</h4>
              <p className="text-muted-foreground">Not satisfied? Get your money back, no questions asked.</p>
            </div>
            <div className="space-y-4">
              <Heart className="w-12 h-12 mx-auto text-red-500" />
              <h4 className="text-xl font-semibold">Trusted by 500+ Athletes</h4>
              <p className="text-muted-foreground">Join our community of successful athletes and champions.</p>
            </div>
            <div className="space-y-4">
              <Award className="w-12 h-12 mx-auto text-yellow-500" />
              <h4 className="text-xl font-semibold">Expert Certified Coaches</h4>
              <p className="text-muted-foreground">Learn from former professionals and certified trainers.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 