import { Phone, Clock, Shield, Car, Home as HomeIcon, Building } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex items-center space-x-2">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <Car className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900">USA LOCKSMITH GROUP</h1>
                  <p className="text-xs text-gray-600">Professional Lock Services</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm font-semibold text-gray-900">Call Us Anytime!</p>
                <a href="tel:401-780-5084" className="text-lg font-bold text-blue-600 hover:text-blue-800">
                  401-780-5084
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Lost Keys? <span className="text-yellow-300">Locked Out?</span>
              </h2>
              <p className="text-xl mb-8">
                Professional locksmith services available 24/7/365. We handle residential, commercial, and automotive lock services.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-red-600 text-white px-4 py-2 rounded-full flex items-center">
                  <Shield className="h-4 w-4 mr-2" />
                  FULLY LICENSED & BONDED
                </div>
                <div className="bg-green-600 text-white px-4 py-2 rounded-full flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  24/7/365 SERVICE
                </div>
              </div>
              <a 
                href="tel:401-780-5084" 
                className="inline-block bg-yellow-500 text-black px-8 py-4 rounded-lg text-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                <Phone className="inline h-5 w-5 mr-2" />
                Call Now: 401-780-5084
              </a>
            </div>
            <div className="text-center">
              <div className="bg-white p-8 rounded-lg shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Services</h3>
                <div className="space-y-4 text-gray-800">
                  <div className="flex items-center">
                    <HomeIcon className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Residential Lockouts</span>
                  </div>
                  <div className="flex items-center">
                    <Building className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Commercial Services</span>
                  </div>
                  <div className="flex items-center">
                    <Car className="h-5 w-5 text-blue-600 mr-3" />
                    <span>Automotive Locksmith</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600">Professional door-to-door locksmith services</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <HomeIcon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Residential</h3>
              <p className="text-gray-600">Home lockouts, key duplication, lock installation and repair</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Building className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Commercial</h3>
              <p className="text-gray-600">Office lockouts, master key systems, security upgrades</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Car className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Automotive</h3>
              <p className="text-gray-600">Car lockouts, key replacement, transponder programming</p>
            </div>
          </div>
        </div>
      </section>

      {/* Car Brands Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Certified for Premium Brands</h2>
            <p className="text-lg text-gray-600">Mercedes, BMW, VW, Audi Certified</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-6">
            {[
              "Mercedes", "BMW", "Audi", "Volkswagen", "Porsche", "Jeep", "GMC", "Infiniti",
              "Honda", "Toyota", "Chevrolet", "Ford", "Dodge", "Hyundai", "Kia", "Nissan",
              "Subaru", "Mazda", "Mitsubishi", "Suzuki", "Acura", "Lexus", "Volvo", "Fiat",
              "Ram", "Chrysler", "Jaguar", "Land Rover", "Mini", "Lincoln", "Cadillac", "Buick"
            ].map((brand) => (
              <div key={brand} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-gray-100 transition-colors">
                <p className="text-sm font-medium text-gray-700">{brand}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">Need Help? Call Us Now!</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="tel:401-780-5084" 
              className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-2xl font-bold hover:bg-yellow-400 transition-colors"
            >
              401-780-5084
            </a>
            <div className="text-center">
              <p className="text-xl font-semibold">Available 24/7/365</p>
              <p className="text-blue-200">Door to Door Service</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Car className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">USA LOCKSMITH GROUP</span>
          </div>
          <p className="text-gray-400 mb-4">Professional Locksmith Services - Licensed & Bonded</p>
          <p className="text-gray-400">© 2024 USA Locksmith Group. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
