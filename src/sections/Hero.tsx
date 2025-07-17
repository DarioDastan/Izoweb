import React from 'react'

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.querySelector('#products')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Placeholder for background image */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-green-900/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Building Smart.
            <br />
            <span className="text-primary-200">Living Cool.</span>
          </h1>

          {/* Subtext */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
            Next-generation thermal insulating building materials, made in Iraq.
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToProducts}
            className="btn-primary text-lg px-8 py-4 bg-white text-primary-700 hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Discover Our Blocks
          </button>

          {/* Additional Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-primary-200 mb-2">50%</div>
              <div className="text-gray-200">Energy Savings</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-primary-200 mb-2">Made in</div>
              <div className="text-gray-200">Iraq</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-primary-200 mb-2">100%</div>
              <div className="text-gray-200">Sustainable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  )
}

export default Hero 