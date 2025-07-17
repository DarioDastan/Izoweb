import React from 'react';

const Applications: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="gradient-bg text-white py-20">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold mb-6">
              Applications
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Discover the versatile applications of Izocrete's next-generation thermal insulating building materials across various construction projects.
            </p>
          </div>
        </div>
      </section>

      {/* Applications Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Where Izocrete Excels
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative materials are designed for diverse construction applications, providing superior thermal insulation and structural integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Residential Construction */}
            <div className="card p-8 animate-slide-up">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Partitioning</h3>
              <p className="text-gray-600 mb-4">
                Energy-efficient homes with superior thermal insulation, reducing heating and cooling costs while maintaining comfort.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Single-family homes</li>
                <li>• Multi-family buildings</li>
                <li>• Residential complexes</li>
                <li>• Eco-friendly housing</li>
              </ul>
            </div>

            {/* Commercial Buildings */}
            <div className="card p-8 animate-slide-up">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">EIFS with Izocrete</h3>
              <p className="text-gray-600 mb-4">
                Large-scale commercial projects benefit from our materials' durability, energy efficiency, and cost-effectiveness.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Office buildings</li>
                <li>• Shopping centers</li>
                <li>• Hotels and resorts</li>
                <li>• Industrial facilities</li>
              </ul>
            </div>

            {/* Infrastructure Projects */}
            <div className="card p-8 animate-slide-up">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ribbed Slab</h3>
              <p className="text-gray-600 mb-4">
                Critical infrastructure projects requiring high-performance materials for long-term durability and safety.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Bridges and tunnels</li>
                <li>• Transportation hubs</li>
                <li>• Power plants</li>
                <li>• Water treatment facilities</li>
              </ul>
            </div>

            {/* Educational Facilities */}
            <div className="card p-8 animate-slide-up">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Light Weight Concrete</h3>
              <p className="text-gray-600 mb-4">
                Schools and universities benefit from our materials' acoustic properties and energy efficiency for optimal learning environments.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Schools and universities</li>
                <li>• Research laboratories</li>
                <li>• Libraries and study centers</li>
                <li>• Sports facilities</li>
              </ul>
            </div>

            {/* Healthcare Facilities */}
            <div className="card p-8 animate-slide-up">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sun Reflection</h3>
              <p className="text-gray-600 mb-4">
                Hospitals and medical centers require materials that meet strict hygiene and safety standards while maintaining energy efficiency.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Hospitals and clinics</li>
                <li>• Medical laboratories</li>
                <li>• Rehabilitation centers</li>
                <li>• Pharmaceutical facilities</li>
              </ul>
            </div>

            {/* Green Building Projects */}
            <div className="card p-8 animate-slide-up">
              <div className="text-primary-600 mb-4">
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Green Building Projects</h3>
              <p className="text-gray-600 mb-4">
                Sustainable construction projects that prioritize environmental responsibility and energy conservation.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• LEED certified buildings</li>
                <li>• Passive house projects</li>
                <li>• Renewable energy facilities</li>
                <li>• Eco-friendly developments</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real-world applications demonstrating the effectiveness of Izocrete materials in diverse construction projects.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-lg p-8 text-white mb-6">
                <h3 className="text-2xl font-bold mb-4">Commercial Complex - Baghdad</h3>
                <p className="mb-4">
                  A 50,000 sqm commercial complex featuring retail spaces, offices, and parking facilities. Izocrete materials reduced energy costs by 40% while maintaining structural integrity.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span>• 40% energy savings</span>
                  <span>• LEED Gold certification</span>
                  <span>• 2-year completion</span>
                </div>
              </div>
            </div>

            <div className="animate-slide-up">
              <div className="bg-gradient-to-r from-secondary-600 to-secondary-800 rounded-lg p-8 text-white mb-6">
                <h3 className="text-2xl font-bold mb-4">Residential Development - Erbil</h3>
                <p className="mb-4">
                  A sustainable residential community with 200 energy-efficient homes. Our materials provided superior thermal insulation in extreme weather conditions.
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <span>• 200 homes completed</span>
                  <span>• 35% cost reduction</span>
                  <span>• 5-star energy rating</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technical Specifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed specifications for different applications and project requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Thermal Performance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• R-value: 3.5-4.2 per inch</li>
                <li>• Thermal conductivity: 0.024 W/mK</li>
                <li>• Temperature range: -40°C to +80°C</li>
                <li>• Moisture resistance: 95%</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Structural Properties</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Compressive strength: 2.5-4.0 MPa</li>
                <li>• Flexural strength: 0.8-1.2 MPa</li>
                <li>• Density: 180-220 kg/m³</li>
                <li>• Fire resistance: Class A</li>
              </ul>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• VOC emissions: &lt; 0.5 mg/m³</li>
                <li>• Recycled content: 30-40%</li>
                <li>• Carbon footprint: -50% vs traditional</li>
                <li>• LEED compliant</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding gradient-bg">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Project?
          </h2>
          <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
            Contact our technical team to discuss your specific application requirements and get customized solutions for your construction project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Request Consultation
            </button>
            <button className="btn-secondary">
              Download Specifications
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Applications; 