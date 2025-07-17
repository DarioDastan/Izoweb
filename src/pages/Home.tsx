import React from 'react'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with animated gradient */}
        <div className="absolute inset-0 gradient-bg">
          <div className="absolute inset-0 bg-black/30"></div>
          {/* Animated background elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <div className="max-w-5xl mx-auto">
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in">
              Building
              <br />
              <span className="text-gradient bg-gradient-to-r from-primary-200 to-blue-200 bg-clip-text text-transparent">
                Smart.
              </span>
              <br />
              <span className="text-gradient bg-gradient-to-r from-green-200 to-blue-200 bg-clip-text text-transparent">
                Living Cool.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl lg:text-3xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              Next-generation thermal insulating building materials, 
              <span className="font-semibold text-primary-200"> made in Iraq</span> for Iraq's climate.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <a
                href="/products"
                className="btn-primary text-lg px-10 py-5 bg-white text-primary-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
              >
                <span className="flex items-center justify-center space-x-2">
                  <span>Discover Our Products</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
              <a
                href="/about"
                className="btn-secondary text-lg px-10 py-5 border-white text-white hover:bg-white hover:text-primary-700 shadow-2xl"
              >
                Learn More About Us
              </a>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="card bg-white/10 backdrop-blur-md border border-white/20 p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-primary-200 mb-3">50%</div>
                <div className="text-gray-200 font-medium">Energy Savings</div>
                <div className="text-primary-200 text-sm mt-2">vs Traditional Materials</div>
              </div>
              <div className="card bg-white/10 backdrop-blur-md border border-white/20 p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-primary-200 mb-3">Made in</div>
                <div className="text-gray-200 font-medium text-2xl">Iraq</div>
                <div className="text-primary-200 text-sm mt-2">Sulaymaniyah Factory</div>
              </div>
              <div className="card bg-white/10 backdrop-blur-md border border-white/20 p-8 transform hover:scale-105 transition-all duration-300">
                <div className="text-4xl font-bold text-primary-200 mb-3">100%</div>
                <div className="text-gray-200 font-medium">Sustainable</div>
                <div className="text-primary-200 text-sm mt-2">Eco-Friendly Materials</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-white relative">
        {/* Background pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-white"></div>
        
        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose 
              <span className="text-gradient"> Izocrete</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Revolutionary thermal insulating building materials designed specifically for Iraq's unique climate challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Superior Insulation</h3>
              <p className="text-gray-600 leading-relaxed">3x better thermal performance than traditional concrete, keeping buildings cool in summer and warm in winter.</p>
            </div>

            <div className="card p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Climate Optimized</h3>
              <p className="text-gray-600 leading-relaxed">Perfectly engineered for Iraq's extreme temperature variations, from scorching summers to cold winters.</p>
            </div>

            <div className="card p-8 text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Production</h3>
              <p className="text-gray-600 leading-relaxed">Manufactured in Sulaymaniyah, Iraq, supporting local economy and reducing transportation costs.</p>
            </div>
          </div>

          <div className="text-center mt-16">
            <a href="/products" className="btn-primary text-lg px-10 py-5">
              <span className="flex items-center justify-center space-x-2">
                <span>Explore Our Products</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 