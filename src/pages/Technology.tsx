import React from 'react'

const Technology: React.FC = () => {
  const technicalSpecs = [
    {
      property: 'Thermal Conductivity',
      value: '0.12 W/m·K',
      description: 'Superior insulation compared to traditional concrete'
    },
    {
      property: 'Compressive Strength',
      value: '3.5 MPa',
      description: 'Adequate load-bearing capacity for construction'
    },
    {
      property: 'Density',
      value: '400-600 kg/m³',
      description: 'Lightweight while maintaining structural integrity'
    },
    {
      property: 'Water Absorption',
      value: '< 15%',
      description: 'Low water absorption for durability'
    },
    {
      property: 'Fire Resistance',
      value: 'Class A1',
      description: 'Non-combustible material'
    },
    {
      property: 'Sound Insulation',
      value: '45 dB',
      description: 'Excellent acoustic performance'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Technology</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover the science behind Izocrete's innovative material composition 
            and how it delivers superior performance in construction applications.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                What is Izocrete made of?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Izocrete is a proprietary blend of advanced materials that combines the strength of traditional concrete with the insulating properties of specialized thermal materials.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Advanced Cement Matrix</h4>
                    <p className="text-gray-600 text-sm">Specially formulated cement that provides structural integrity</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Thermal Insulating Aggregates</h4>
                    <p className="text-gray-600 text-sm">Lightweight aggregates that create air pockets for insulation</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Proprietary Additives</h4>
                    <p className="text-gray-600 text-sm">Chemical additives that enhance durability and resistance</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Technical Specifications
              </h3>
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="grid grid-cols-1 gap-4">
                  {technicalSpecs.map((spec, index) => (
                    <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">{spec.property}</h4>
                        <span className="text-primary-600 font-bold text-lg">{spec.value}</span>
                      </div>
                      <p className="text-gray-600 text-sm">{spec.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            How Does It Work?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Thermal Insulation</h3>
              <p className="text-gray-600">The unique material composition creates air pockets that trap heat, providing superior thermal insulation.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Structural Integrity</h3>
              <p className="text-gray-600">Despite its insulating properties, Izocrete maintains the compressive strength required for construction.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Climate Optimized</h3>
              <p className="text-gray-600">Specially formulated for Iraq's climate, providing optimal performance in both hot summers and cold winters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Key Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">3x</div>
              <div className="text-gray-600 font-semibold">Better Insulation</div>
              <div className="text-sm text-gray-500 mt-1">vs Traditional Concrete</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">50%</div>
              <div className="text-gray-600 font-semibold">Lighter Weight</div>
              <div className="text-sm text-gray-500 mt-1">vs Standard Blocks</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">2x</div>
              <div className="text-gray-600 font-semibold">Faster Installation</div>
              <div className="text-sm text-gray-500 mt-1">vs Traditional Methods</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-600 font-semibold">Made in Iraq</div>
              <div className="text-sm text-gray-500 mt-1">Local Production</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology 