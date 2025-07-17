import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              What is Izocrete?
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Izocrete is a revolutionary thermal insulating building material that represents a breakthrough in construction technology. Unlike traditional building materials, Izocrete combines exceptional thermal insulation properties with structural integrity, making it the ideal choice for modern construction projects.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Our innovative material is specifically designed to address the unique challenges of Iraq's climate, providing superior thermal performance while maintaining the strength and durability required for construction applications.
            </p>

            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Superior Insulation</h3>
                  <p className="text-gray-600 text-sm">Exceptional thermal performance for energy efficiency</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Structural Strength</h3>
                  <p className="text-gray-600 text-sm">Maintains load-bearing capacity while insulating</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Climate Optimized</h3>
                  <p className="text-gray-600 text-sm">Specifically designed for Iraq's weather conditions</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Local Production</h3>
                  <p className="text-gray-600 text-sm">Manufactured in Sulaymaniyah, Iraq</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="text-6xl font-bold mb-4">2019</div>
                <h3 className="text-2xl font-semibold mb-4">First Introduced</h3>
                <p className="text-primary-100 mb-6">
                  Izocrete was first introduced to the Iraqi market in 2019, bringing innovative thermal insulation technology to the region's construction industry.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold">50%</div>
                    <div className="text-sm text-primary-200">Energy Savings</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold">3x</div>
                    <div className="text-sm text-primary-200">Better Insulation</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 