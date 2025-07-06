import { Clock, Shield, Car, Home as HomeIcon, Building, MapPin, Star, CheckCircle, Zap, Award, Phone as PhoneIcon } from "lucide-react";

export default function Home() {
  const carBrands = [
    "Acura", "Audi", "BMW", "Buick", "Cadillac", "Chevrolet", "Chrysler", "Dodge", "Fiat", "Ford", 
    "GMC", "Honda", "Hyundai", "Infiniti", "Jaguar", "Jeep", "Kia", "Land Rover", "Lexus", "Lincoln", 
    "Mazda", "Mercedes", "Mini", "Mitsubishi", "Nissan", "Porsche", "Ram", "Subaru", "Suzuki", "Toyota", "Volkswagen", "Volvo"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Providence, RI",
      rating: 5,
      text: "Locked out of my BMW at 2 AM. They arrived in 15 minutes and had me back in my car quickly. Professional and reasonably priced!"
    },
    {
      name: "Mike Rodriguez",
      location: "Warwick, RI",
      rating: 5,
      text: "Needed new locks for my office building. USA Locksmith Group did an amazing job. Highly recommend for commercial work!"
    },
    {
      name: "Jennifer Chen",
      location: "Cranston, RI",
      rating: 5,
      text: "Lost my Mercedes keys at the mall. They came out and made new keys on the spot. Saved my day!"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-3 rounded-xl shadow-lg">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 tracking-tight">USA LOCKSMITH GROUP</h1>
                  <p className="text-sm text-blue-600 font-medium">Licensed • Bonded • Insured</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-600">Emergency Service</p>
                <a href="tel:401-780-5084" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  401-780-5084
                </a>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-600">Main Line</p>
                <a href="tel:401-400-2518" className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition-colors">
                  401-400-2518
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block">Lost Keys?</span>
                  <span className="block text-yellow-300">We&apos;ve Got You!</span>
                </h2>
                                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                    Rhode Island&apos;s #1 locksmith service. Professional, fast, and available 24/7/365.
                  </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <div className="bg-red-600 text-white px-6 py-3 rounded-full flex items-center font-semibold shadow-lg">
                  <Shield className="h-5 w-5 mr-2" />
                  FULLY LICENSED & BONDED
                </div>
                <div className="bg-green-600 text-white px-6 py-3 rounded-full flex items-center font-semibold shadow-lg">
                  <Clock className="h-5 w-5 mr-2" />
                  24/7/365 SERVICE
                </div>
                <div className="bg-purple-600 text-white px-6 py-3 rounded-full flex items-center font-semibold shadow-lg">
                  <Zap className="h-5 w-5 mr-2" />
                  15 MIN RESPONSE
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:401-780-5084" 
                  className="inline-flex items-center justify-center bg-yellow-500 text-black px-8 py-5 rounded-xl text-xl font-bold hover:bg-yellow-400 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  Emergency: 401-780-5084
                </a>
                <a 
                  href="tel:401-400-2518" 
                  className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-5 rounded-xl text-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  <PhoneIcon className="h-6 w-6 mr-3" />
                  Main: 401-400-2518
                </a>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl">
                <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">Emergency Services</h3>
                <div className="space-y-4">
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <HomeIcon className="h-6 w-6 text-blue-600 mr-4" />
                    <div>
                      <span className="font-semibold text-gray-900">Residential Lockouts</span>
                      <p className="text-sm text-gray-600">Home, apartment, condo lockouts</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-green-50 rounded-lg">
                    <Building className="h-6 w-6 text-green-600 mr-4" />
                    <div>
                      <span className="font-semibold text-gray-900">Commercial Services</span>
                      <p className="text-sm text-gray-600">Office buildings, retail stores</p>
                    </div>
                  </div>
                  <div className="flex items-center p-4 bg-purple-50 rounded-lg">
                    <Car className="h-6 w-6 text-purple-600 mr-4" />
                    <div>
                      <span className="font-semibold text-gray-900">Automotive Locksmith</span>
                      <p className="text-sm text-gray-600">All makes and models</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-2xl shadow-xl text-center">
                <div className="text-black">
                  <h4 className="text-2xl font-bold mb-2">Average Response Time</h4>
                  <div className="text-4xl font-bold">15 Minutes</div>
                  <p className="text-lg font-semibold">or Less!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                             From emergency lockouts to complete security system installations, we&apos;re Rhode Island&apos;s trusted locksmith professionals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <HomeIcon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Residential</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Home lockouts</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Key duplication</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Lock installation</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Security upgrades</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Emergency repairs</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Building className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Commercial</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Office lockouts</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Master key systems</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Access control</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Security consulting</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Safe services</li>
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <Car className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Automotive</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Car lockouts</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Key replacement</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Transponder programming</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Ignition repair</li>
                <li className="flex items-center"><CheckCircle className="h-4 w-4 text-green-500 mr-2" />Remote programming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">We Service All Vehicle Makes</h2>
            <p className="text-xl text-gray-600 mb-8">Mercedes, BMW, VW, Audi Certified • All Makes & Models Welcome</p>
            <div className="flex justify-center space-x-4">
              <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">Mercedes Certified</div>
              <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">BMW Certified</div>
              <div className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">Audi Certified</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
            {carBrands.map((brand) => (
              <div key={brand} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl text-center hover:from-blue-50 hover:to-blue-100 transition-all duration-300 hover:shadow-lg hover:scale-105 border border-gray-200">
                <p className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors">{brand}</p>
              </div>
            ))}
          </div>
          
                     <div className="text-center mt-12">
             <p className="text-lg text-gray-600 mb-6">Don&apos;t see your vehicle? <strong>We service ALL makes and models!</strong></p>
             <div className="flex justify-center space-x-8">
               <a href="tel:401-780-5084" className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                 Call for Your Vehicle
               </a>
             </div>
           </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Over 1,000+ satisfied customers across Rhode Island</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                                 <p className="text-gray-700 mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Service Areas</h2>
            <p className="text-xl text-gray-600">Proudly serving Rhode Island and surrounding areas</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Providence", "Warwick", "Cranston", "Pawtucket", 
              "East Providence", "Woonsocket", "Newport", "Central Falls",
              "Westerly", "North Providence", "West Warwick", "Johnston"
            ].map((city) => (
              <div key={city} className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl text-center hover:from-blue-100 hover:to-blue-200 transition-all duration-300">
                <MapPin className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{city}</p>
              </div>
            ))}
          </div>
          
                     <div className="text-center mt-12">
             <p className="text-lg text-gray-600 mb-4">Don&apos;t see your area? Give us a call!</p>
             <p className="text-lg font-semibold text-blue-600">We may still be able to help you.</p>
           </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Back In?</h2>
                     <p className="text-xl mb-8 text-blue-100">Don&apos;t wait in the cold or heat. Our professional locksmiths are standing by.</p>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-12">
            <a 
              href="tel:401-780-5084" 
              className="bg-yellow-500 text-black px-10 py-6 rounded-xl text-2xl font-bold hover:bg-yellow-400 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <PhoneIcon className="inline h-6 w-6 mr-3" />
              Emergency: 401-780-5084
            </a>
            <a 
              href="tel:401-400-2518" 
              className="bg-white text-blue-600 px-10 py-6 rounded-xl text-2xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
            >
              <PhoneIcon className="inline h-6 w-6 mr-3" />
              Main: 401-400-2518
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Clock className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">24/7 Service</h3>
              <p className="text-blue-100">Never closed</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Zap className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Fast Response</h3>
              <p className="text-blue-100">15 min or less</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Shield className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Licensed</h3>
              <p className="text-blue-100">Fully bonded</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Award className="h-8 w-8 mx-auto mb-3 text-yellow-300" />
              <h3 className="font-bold text-lg mb-2">Certified</h3>
              <p className="text-blue-100">All major brands</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">USA LOCKSMITH GROUP</span>
              </div>
                             <p className="text-gray-400 mb-4">Rhode Island&apos;s premier locksmith service. Licensed, bonded, and available 24/7.</p>
              <div className="flex space-x-4">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Shield className="h-4 w-4 text-white" />
                </div>
                <div className="bg-green-600 p-2 rounded-lg">
                  <Clock className="h-4 w-4 text-white" />
                </div>
                <div className="bg-purple-600 p-2 rounded-lg">
                  <Award className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Emergency Lockouts</li>
                <li>Key Duplication</li>
                <li>Lock Installation</li>
                <li>Security Systems</li>
                <li>Automotive Services</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Emergency: 401-780-5084
                </p>
                <p className="flex items-center">
                  <PhoneIcon className="h-4 w-4 mr-2" />
                  Main: 401-400-2518
                </p>
                <p className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Serving All of Rhode Island
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 USA Locksmith Group. All rights reserved. | Licensed & Bonded</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
