import React from 'react'

const Functionality: React.FC = () => {
  const features = [
    {
      title: 'Thermal Insulation',
      description: 'Advanced thermal insulation properties that reduce heat transfer by up to 70% compared to traditional concrete.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      specs: ['Thermal conductivity: 0.12 W/m·K', 'R-value: 8.3 m²·K/W', 'Energy savings: 50%']
    },
    {
      title: 'Structural Integrity',
      description: 'Maintains load-bearing capacity while providing superior insulation properties.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      specs: ['Compressive strength: 3.5 MPa', 'Density: 400-600 kg/m³', 'Load-bearing capacity maintained']
    },
    {
      title: 'Sound Insulation',
      description: 'Excellent acoustic performance for noise reduction in residential and commercial buildings.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      ),
      specs: ['Sound insulation: 45 dB', 'Acoustic performance: Class A', 'Noise reduction: 60%']
    },
    {
      title: 'Fire Resistance',
      description: 'Non-combustible material with excellent fire resistance properties.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
        </svg>
      ),
      specs: ['Fire resistance: Class A1', 'Non-combustible', 'Fire rating: 2 hours']
    },
    {
      title: 'Moisture Resistance',
      description: 'Low water absorption and excellent moisture resistance for long-term durability.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      specs: ['Water absorption: < 15%', 'Moisture resistance: High', 'Durability: 50+ years']
    },
    {
      title: 'Climate Adaptability',
      description: 'Specially formulated for Iraq\'s extreme temperature variations and climate conditions.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      specs: ['Temperature range: -20°C to +60°C', 'UV resistance: High', 'Weather resistance: Excellent']
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-24 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Product 
            <span className="text-gradient bg-gradient-to-r from-primary-200 to-blue-200 bg-clip-text text-transparent"> Functionality</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed font-light">
            Discover the advanced technical capabilities and performance characteristics of Izocrete materials
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Advanced 
              <span className="text-gradient"> Performance</span> Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Izocrete materials are engineered with cutting-edge technology to deliver superior performance across multiple dimensions
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="card p-8 group hover:shadow-2xl transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">
                    {feature.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.specs.map((spec, specIndex) => (
                    <div key={specIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-gray-600 font-medium">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Comparison */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Performance 
              <span className="text-gradient"> Comparison</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See how Izocrete outperforms traditional building materials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Thermal Insulation</h3>
              <div className="space-y-4">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3x Better</div>
                  <div className="text-gray-600">vs Traditional Concrete</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-600 mb-2">Standard</div>
                  <div className="text-gray-500">Traditional Concrete</div>
                </div>
              </div>
            </div>

            <div className="card p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Energy Efficiency</h3>
              <div className="space-y-4">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50% Savings</div>
                  <div className="text-gray-600">Energy Consumption</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-600 mb-2">High</div>
                  <div className="text-gray-500">Traditional Materials</div>
                </div>
              </div>
            </div>

            <div className="card p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Installation Speed</h3>
              <div className="space-y-4">
                <div className="bg-primary-50 rounded-lg p-4">
                  <div className="text-3xl font-bold text-primary-600 mb-2">2x Faster</div>
                  <div className="text-gray-600">Installation Time</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-gray-600 mb-2">Standard</div>
                  <div className="text-gray-500">Traditional Methods</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Technical 
              <span className="text-gradient"> Specifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technical data and performance metrics
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Physical Properties</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Density</span>
                  <span className="font-bold text-primary-600">400-600 kg/m³</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Compressive Strength</span>
                  <span className="font-bold text-primary-600">3.5 MPa</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Thermal Conductivity</span>
                  <span className="font-bold text-primary-600">0.12 W/m·K</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Water Absorption</span>
                  <span className="font-bold text-primary-600">&lt; 15%</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">Sound Insulation</span>
                  <span className="font-bold text-primary-600">45 dB</span>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Performance Ratings</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Fire Resistance</span>
                  <span className="font-bold text-primary-600">Class A1</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Thermal Resistance</span>
                  <span className="font-bold text-primary-600">8.3 m²·K/W</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Durability</span>
                  <span className="font-bold text-primary-600">50+ Years</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium text-gray-700">Environmental Impact</span>
                  <span className="font-bold text-primary-600">Low Carbon</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">Recyclability</span>
                  <span className="font-bold text-primary-600">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Functionality 