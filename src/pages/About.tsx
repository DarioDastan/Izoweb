import React from 'react'

const About: React.FC = () => {
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
            About 
            <span className="text-gradient bg-gradient-to-r from-primary-200 to-blue-200 bg-clip-text text-transparent"> Izocrete</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-4xl mx-auto leading-relaxed font-light">
            Revolutionary thermal insulating building materials, made in Iraq for Iraq's climate
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-slide-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                What is 
                <span className="text-gradient"> Izocrete</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Izocrete is a revolutionary thermal insulating building material that represents a breakthrough in construction technology. Unlike traditional building materials, Izocrete combines exceptional thermal insulation properties with structural integrity, making it the ideal choice for modern construction projects.
              </p>
              <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                Our innovative material is specifically designed to address the unique challenges of Iraq's climate, providing superior thermal performance while maintaining the strength and durability required for construction applications.
              </p>

              {/* Key Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Superior Insulation</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Exceptional thermal performance for energy efficiency</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Structural Strength</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Maintains load-bearing capacity while insulating</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Climate Optimized</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Specifically designed for Iraq's weather conditions</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Local Production</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">Manufactured in Sulaymaniyah, Iraq</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Visual */}
            <div className="relative animate-slide-up">
              <div className="card bg-gradient-to-br from-primary-600 to-primary-800 p-10 text-white relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="text-center relative z-10">
                  <div className="text-7xl font-bold mb-6 text-primary-200">2019</div>
                  <h3 className="text-3xl font-semibold mb-6">First Introduced</h3>
                  <p className="text-primary-100 mb-8 leading-relaxed text-lg">
                    Izocrete was first introduced to the Iraqi market in 2019, bringing innovative thermal insulation technology to the region's construction industry.
                  </p>
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl font-bold text-primary-200">50%</div>
                      <div className="text-sm text-primary-200 font-medium">Energy Savings</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                      <div className="text-4xl font-bold text-primary-200">3x</div>
                      <div className="text-sm text-primary-200 font-medium">Better Insulation</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary-300 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="card p-8 text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To revolutionize construction in Iraq by providing innovative, sustainable building materials that improve energy efficiency and reduce environmental impact while maintaining the highest standards of quality and performance.
              </p>
            </div>

            <div className="card p-8 text-center group hover:shadow-2xl transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                To become the leading provider of sustainable building materials in the Middle East, setting new standards for thermal insulation and energy efficiency in construction while supporting local economic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Channel */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Watch Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover more about Izocrete through our YouTube channel. Watch demonstrations, 
              learn about our technology, and see our products in action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* YouTube Channel Info */}
            <div className="animate-slide-up">
              <div className="card p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Izocrete YouTube Channel</h3>
                    <p className="text-gray-600">Educational content and product demonstrations</p>
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Product demonstrations and installation guides</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Technical specifications and performance tests</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Project showcases and success stories</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">Expert insights and industry knowledge</p>
                  </div>
                </div>

                <a 
                  href="https://youtube.com/@izocrete742?si=rMNpHfh-QTmaY3-2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                  <span>Visit Our YouTube Channel</span>
                </a>
              </div>
            </div>

            {/* YouTube Preview */}
            <div className="animate-slide-up">
              <div className="card p-8 bg-gradient-to-br from-red-50 to-red-100 border border-red-200">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Subscribe to Our Channel</h3>
                  <p className="text-gray-600 mb-6">
                    Stay updated with the latest videos about Izocrete products, 
                    installation techniques, and industry insights.
                  </p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                    <span>• Product demos</span>
                    <span>• Installation guides</span>
                    <span>• Expert tips</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About 