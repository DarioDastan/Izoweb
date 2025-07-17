import React from 'react'

const Advantages: React.FC = () => {
  const advantages = [
    {
      title: 'Energy Cost Reduction',
      percentage: '50%',
      description: 'Izocrete can reduce your energy costs by up to 50% compared to traditional building materials.',
      details: [
        'Superior thermal insulation properties',
        'Reduced heating and cooling requirements',
        'Lower utility bills year-round',
        'Long-term cost savings'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      )
    },
    {
      title: 'Perfect for Iraq\'s Climate',
      description: 'Specially designed to handle Iraq\'s extreme temperature variations and weather conditions.',
      details: [
        'Optimized for hot summers (up to 50°C)',
        'Effective in cold winters',
        'Resistant to humidity and moisture',
        'Durable in harsh weather conditions'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      )
    },
    {
      title: 'Construction Efficiency',
      description: 'Faster construction times and easier installation compared to traditional materials.',
      details: [
        'Lightweight and easy to handle',
        'Faster installation times',
        'Reduced labor costs',
        'Simplified construction process'
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ]

  return (
    <section id="advantages" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Izocrete?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the compelling advantages that make Izocrete the smart choice 
            for modern construction projects in Iraq and beyond.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 border border-primary-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon and Title */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-lg flex items-center justify-center text-white">
                  {advantage.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{advantage.title}</h3>
                  {advantage.percentage && (
                    <div className="text-3xl font-bold text-primary-600">{advantage.percentage}</div>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {advantage.description}
              </p>

              {/* Details */}
              <ul className="space-y-3">
                {advantage.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Izocrete vs Traditional Materials
          </h3>
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

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Build Smarter?
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join the growing number of construction professionals who are choosing Izocrete for their projects.
          </p>
          <button className="btn-primary text-lg px-8 py-4">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  )
}

export default Advantages 