import React from 'react'

const Products: React.FC = () => {
  const products = [
    {
      name: 'Solid Blocks',
      description: 'High-performance insulating blocks designed for exterior walls and thermal barriers.',
      features: ['Superior thermal insulation', 'Load-bearing capacity', 'Easy installation'],
      sizes: ['20 x 30 x 6', '10 x 30 x 6', '5 x 60 x 60'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      name: 'Insulated Gypsum Panels',
      description: 'Lightweight interior partition blocks for efficient space division and sound insulation.',
      features: ['Lightweight construction', 'Sound insulation', 'Quick installation'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </svg>
      )
    },
    {
      name: 'Hollow Blocks',
      description: 'Traditional hollow blocks with enhanced thermal properties for versatile construction.',
      features: ['Enhanced thermal properties', 'Traditional compatibility', 'Cost-effective'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      name: 'Cladding Boards',
      description: 'Exterior cladding boards providing both thermal insulation and aesthetic appeal.',
      features: ['Exterior protection', 'Aesthetic finish', 'Weather resistance'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      name: 'Dry-Mix Bags (Bag Izopore)',
      description: 'Pre-mixed dry mortar bags for consistent quality and easy application.',
      features: ['Consistent quality', 'Easy application', 'Reduced waste'],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-primary-100 max-w-3xl mx-auto">
            Discover our comprehensive range of thermal insulating building materials, 
            each designed to meet specific construction needs while delivering superior performance.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Product Header */}
                <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-6 text-white">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="text-primary-200">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{product.name}</h3>
                  </div>
                  <p className="text-primary-100 text-sm leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Product Features */}
                <div className="p-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Sizes Section */}
                  {product.sizes && (
                    <div className="mt-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Available Sizes:</h4>
                      <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size, sizeIndex) => (
                          <span 
                            key={sizeIndex}
                            className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Product Footer */}
                <div className="px-6 pb-6">
                  <button className="w-full btn-primary text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 bg-gradient-to-r from-primary-50 to-blue-50 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">5+</div>
                <div className="text-gray-600">Product Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-gray-600">Made in Iraq</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">24/7</div>
                <div className="text-gray-600">Technical Support</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Revolutionary Technology
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              All our products are built using our proprietary Izocrete technology, 
              providing superior thermal insulation and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Thermal Insulation</h3>
              <p className="text-gray-600">3x better thermal performance than traditional concrete</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Structural Integrity</h3>
              <p className="text-gray-600">Maintains load-bearing capacity while insulating</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Climate Optimized</h3>
              <p className="text-gray-600">Perfect for Iraq's extreme temperature variations</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a href="/technology" className="btn-primary text-lg px-8 py-4">
              Learn About Our Technology
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products 