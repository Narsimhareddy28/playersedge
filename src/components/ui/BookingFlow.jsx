import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Calendar } from '@/components/ui/calendar.jsx'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover.jsx'
import {
  CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  CreditCard,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Target,
  Dumbbell,
  Trophy,
  Zap,
  Star,
  MapPin
} from 'lucide-react'
import { format } from 'date-fns'

const BookingFlow = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedService, setSelectedService] = useState(null)
  const [selectedInstructor, setSelectedInstructor] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    experience: '',
    goals: '',
    specialRequests: ''
  })

  const services = [
    {
      id: 'baseball',
      icon: <Target className="w-8 h-8" />,
      title: "Baseball Training",
      description: "Professional baseball instruction and skill development",
      price: 75,
      duration: 60,
      color: "from-blue-500 to-blue-700"
    },
    {
      id: 'softball',
      icon: <Dumbbell className="w-8 h-8" />,
      title: "Softball Training",
      description: "Comprehensive softball training programs",
      price: 70,
      duration: 60,
      color: "from-purple-500 to-purple-700"
    },
    {
      id: 'golf',
      icon: <Trophy className="w-8 h-8" />,
      title: "Indoor Golf League",
      description: "Year-round golf training and league play",
      price: 80,
      duration: 90,
      color: "from-green-500 to-green-700"
    },
    {
      id: 'performance',
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Training",
      description: "Elite athletic performance training",
      price: 85,
      duration: 75,
      color: "from-orange-500 to-orange-700"
    }
  ]

  const instructors = [
    {
      id: 'mike',
      name: "Coach Mike Johnson",
      specialty: "Baseball",
      experience: "15+ years",
      rating: 4.9,
      price: 75,
      services: ['baseball']
    },
    {
      id: 'sarah',
      name: "Coach Sarah Williams",
      specialty: "Softball",
      experience: "12+ years",
      rating: 4.8,
      price: 70,
      services: ['softball']
    },
    {
      id: 'david',
      name: "Coach David Chen",
      specialty: "Golf",
      experience: "10+ years",
      rating: 4.9,
      price: 80,
      services: ['golf']
    },
    {
      id: 'alex',
      name: "Coach Alex Rodriguez",
      specialty: "Performance",
      experience: "8+ years",
      rating: 4.7,
      price: 85,
      services: ['performance']
    }
  ]

  const timeSlots = [
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM'
  ]

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const getFilteredInstructors = () => {
    if (!selectedService) return instructors
    return instructors.filter(instructor => 
      instructor.services.includes(selectedService.id)
    )
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3, 4, 5].map((step) => (
        <div key={step} className="flex items-center">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
            step <= currentStep 
              ? 'bg-accent text-accent-foreground' 
              : 'bg-muted text-muted-foreground'
          }`}>
            {step < currentStep ? <CheckCircle className="w-5 h-5" /> : step}
          </div>
          {step < 5 && (
            <div className={`w-12 h-1 mx-2 ${
              step < currentStep ? 'bg-accent' : 'bg-muted'
            }`} />
          )}
        </div>
      ))}
    </div>
  )

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Choose Your Service</h2>
        <p className="text-muted-foreground">Select the training program that best fits your goals</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card 
            key={service.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedService?.id === service.id 
                ? 'ring-2 ring-accent shadow-lg' 
                : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedService(service)}
          >
            <CardHeader className="text-center">
              <div className={`mx-auto mb-4 p-4 bg-gradient-to-r ${service.color} rounded-full text-white w-fit`}>
                {service.icon}
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription>{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-accent">${service.price}</div>
                <div className="text-sm text-muted-foreground">{service.duration} minutes</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Select Your Instructor</h2>
        <p className="text-muted-foreground">Choose from our expert coaching staff</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getFilteredInstructors().map((instructor) => (
          <Card 
            key={instructor.id}
            className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedInstructor?.id === instructor.id 
                ? 'ring-2 ring-accent shadow-lg' 
                : 'hover:shadow-md'
            }`}
            onClick={() => setSelectedInstructor(instructor)}
          >
            <CardHeader className="text-center">
              <div className="mx-auto mb-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-primary-foreground" />
              </div>
              <CardTitle className="text-xl">{instructor.name}</CardTitle>
              <Badge variant="secondary">{instructor.specialty}</Badge>
            </CardHeader>
            <CardContent className="text-center space-y-3">
              <div className="flex justify-center items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-medium">{instructor.rating}</span>
              </div>
              <div className="text-sm text-muted-foreground">{instructor.experience}</div>
              <div className="text-lg font-bold text-accent">${instructor.price}/session</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Choose Date & Time</h2>
        <p className="text-muted-foreground">Select your preferred training schedule</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Select Date
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
              disabled={(date) => date < new Date() || date.getDay() === 0 || date.getDay() === 5 || date.getDay() === 6}
              className="rounded-md border"
            />
            <p className="text-sm text-muted-foreground mt-4">
              Available: Monday - Thursday, 5PM - 8PM
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Select Time
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {timeSlots.map((time) => (
                <Button
                  key={time}
                  variant={selectedTime === time ? "default" : "outline"}
                  className={`${selectedTime === time ? 'bg-accent' : ''}`}
                  onClick={() => setSelectedTime(time)}
                >
                  {time}
                </Button>
              ))}
            </div>
            {selectedDate && selectedTime && (
              <div className="mt-6 p-4 bg-muted rounded-lg">
                <h4 className="font-medium mb-2">Selected Schedule:</h4>
                <p className="text-sm">
                  {format(selectedDate, 'EEEE, MMMM do, yyyy')} at {selectedTime}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderStep4 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Your Information</h2>
        <p className="text-muted-foreground">Tell us about yourself and your training goals</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="John"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Doe"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                placeholder="john.doe@example.com"
              />
            </div>
            
            <div>
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="(555) 123-4567"
              />
            </div>
            
            <div>
              <Label htmlFor="experience">Experience Level</Label>
              <Select onValueChange={(value) => handleInputChange('experience', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your experience level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                  <SelectItem value="professional">Professional</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Training Goals</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="goals">What are your training goals?</Label>
              <Textarea
                id="goals"
                value={formData.goals}
                onChange={(e) => handleInputChange('goals', e.target.value)}
                placeholder="Describe what you hope to achieve through training..."
                rows={4}
              />
            </div>
            
            <div>
              <Label htmlFor="specialRequests">Special Requests or Notes</Label>
              <Textarea
                id="specialRequests"
                value={formData.specialRequests}
                onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                placeholder="Any injuries, preferences, or special requirements..."
                rows={3}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const renderStep5 = () => (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">Booking Summary</h2>
        <p className="text-muted-foreground">Review your booking details and complete payment</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">Service:</span>
              <span>{selectedService?.title}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">Instructor:</span>
              <span>{selectedInstructor?.name}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">Date:</span>
              <span>{selectedDate ? format(selectedDate, 'MMM do, yyyy') : 'Not selected'}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">Time:</span>
              <span>{selectedTime || 'Not selected'}</span>
            </div>
            <div className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">Duration:</span>
              <span>{selectedService?.duration} minutes</span>
            </div>
            <div className="flex justify-between items-center py-2 text-lg font-bold">
              <span>Total:</span>
              <span className="text-accent">${selectedInstructor?.price || selectedService?.price}</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  placeholder="MM/YY"
                />
              </div>
              <div>
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="cardName">Name on Card</Label>
              <Input
                id="cardName"
                placeholder="John Doe"
              />
            </div>
            
            <Button className="w-full btn-primary text-lg py-3 mt-6">
              <CreditCard className="w-5 h-5 mr-2" />
              Complete Booking - ${selectedInstructor?.price || selectedService?.price}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )

  const canProceed = () => {
    switch (currentStep) {
      case 1: return selectedService !== null
      case 2: return selectedInstructor !== null
      case 3: return selectedDate !== null && selectedTime !== null
      case 4: return formData.firstName && formData.lastName && formData.email && formData.phone
      case 5: return true
      default: return false
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-background rounded-lg shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b flex justify-between items-center">
          <h1 className="text-2xl font-bold">Book Your Training Session</h1>
          <Button variant="ghost" onClick={onClose}>×</Button>
        </div>
        
        <div className="p-6">
          {renderStepIndicator()}
          
          {currentStep === 1 && renderStep1()}
          {currentStep === 2 && renderStep2()}
          {currentStep === 3 && renderStep3()}
          {currentStep === 4 && renderStep4()}
          {currentStep === 5 && renderStep5()}
          
          <div className="flex justify-between mt-8 pt-6 border-t">
            <Button 
              variant="outline" 
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Previous
            </Button>
            
            {currentStep < 5 ? (
              <Button 
                onClick={handleNext}
                disabled={!canProceed()}
                className="btn-primary"
              >
                Next
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <div className="text-sm text-muted-foreground">
                Complete payment to finish booking
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingFlow

