export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md border-b border-purple-200 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DA</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Distinctive Academy</h1>
                <p className="text-xs text-gray-600">TDLR Approved & Certified</p>
              </div>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#programs" className="text-gray-700 hover:text-purple-600 font-medium">Programs</a>
              <a href="#about" className="text-gray-700 hover:text-purple-600 font-medium">About</a>
              <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium">Contact</a>
              <button className="border border-purple-200 hover:bg-purple-50 px-4 py-2 rounded-md">
                Student Portal
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                  Welcome to{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                    Distinctive Academy
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Turn your passion for beauty into a rewarding career! Located in Houston, Texas, 
                  we offer comprehensive beauty programs with hybrid learning, bilingual support, 
                  and hands-on training.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/60 backdrop-blur rounded-lg p-4 text-center border border-purple-100">
                  <div className="text-2xl font-bold text-purple-600">TDLR</div>
                  <div className="text-sm text-gray-600">Approved & Certified</div>
                </div>
                <div className="bg-white/60 backdrop-blur rounded-lg p-4 text-center border border-purple-100">
                  <div className="text-2xl font-bold text-pink-600">Bilingual</div>
                  <div className="text-sm text-gray-600">English & Spanish</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-lg text-lg font-semibold">
                  View Programs
                </button>
                <button className="border border-purple-200 hover:bg-purple-50 px-8 py-3 rounded-lg text-lg font-semibold">
                  Call (646) 996-9166
                </button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&h=400&q=80"
                alt="Professional beauty training at Distinctive Academy in Houston"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive beauty programs designed to prepare you for success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Esthetician Program */}
            <div className="bg-white/80 backdrop-blur border border-purple-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-purple-600 mb-2">Esthetician Program</h3>
                <p className="text-gray-600">750 Hours | $7,000</p>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive training in skin care, makeup application, and beauty treatments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• 2-year Milady online access</li>
                <li>• Skin care kit included</li>
                <li>• State board exam prep</li>
                <li>• Job placement assistance</li>
              </ul>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>

            {/* Advanced Esthetician */}
            <div className="bg-white/80 backdrop-blur border border-purple-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-pink-600 mb-2">Advanced Esthetician</h3>
                <p className="text-gray-600">750 Hours | $8,770</p>
              </div>
              <p className="text-gray-600 mb-4">
                Advanced techniques, technologies, and specialized treatments.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Advanced facial techniques</li>
                <li>• Medical esthetics preparation</li>
                <li>• Lash extension kit included</li>
                <li>• Business skills training</li>
              </ul>
              <button className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>

            {/* Manicurist Program */}
            <div className="bg-white/80 backdrop-blur border border-purple-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Manicurist Program</h3>
                <p className="text-gray-600">600 Hours | $6,150</p>
              </div>
              <p className="text-gray-600 mb-4">
                Complete nail technology training including manicuring and enhancements.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Full nail kit included</li>
                <li>• Electric filing techniques</li>
                <li>• Gel and resin systems</li>
                <li>• Nail art training</li>
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>

            {/* Eyelash Program */}
            <div className="bg-white/80 backdrop-blur border border-purple-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-green-600 mb-2">Eyelash Program</h3>
                <p className="text-gray-600">320 Hours | $3,900</p>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized training in eyelash extension application.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Advanced lash extension kit</li>
                <li>• Eye anatomy & safety</li>
                <li>• Business building skills</li>
                <li>• Chemical services training</li>
              </ul>
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>

            {/* Combined Program */}
            <div className="bg-white/80 backdrop-blur border border-purple-200 rounded-lg p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-indigo-600 mb-2">Esthetician + Manicurist</h3>
                <p className="text-gray-600">Combined | $9,550</p>
              </div>
              <p className="text-gray-600 mb-4">
                Complete dual certification in both esthetics and nail technology.
              </p>
              <ul className="text-sm text-gray-600 space-y-1 mb-6">
                <li>• Both skin care & nail kits</li>
                <li>• Dual state licensing prep</li>
                <li>• Advanced lash extension training</li>
                <li>• Maximum career flexibility</li>
              </ul>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get Started Today</h2>
              <p className="text-xl text-gray-600 mb-8">
                Ready to begin your beauty career? Contact us to learn more.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <span className="text-purple-600">📍</span>
                  <div>
                    <p className="font-semibold">Houston Campus</p>
                    <p className="text-gray-600">4201 Cypress Creek Pkwy, Ste 210<br />Houston, Texas 77068</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-purple-600">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:646-996-9166" className="text-purple-600 hover:text-purple-700">(646) 996-9166</a>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <span className="text-purple-600">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:distinctiveacademy@outlook.com" className="text-purple-600 hover:text-purple-700">distinctiveacademy@outlook.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-purple-200">
              <h3 className="text-2xl font-bold mb-6">Request Information</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input placeholder="First Name" className="border border-purple-200 rounded-md px-3 py-2" />
                  <input placeholder="Last Name" className="border border-purple-200 rounded-md px-3 py-2" />
                </div>
                <input placeholder="Email" type="email" className="w-full border border-purple-200 rounded-md px-3 py-2" />
                <input placeholder="Phone" className="w-full border border-purple-200 rounded-md px-3 py-2" />
                <select className="w-full border border-purple-200 rounded-md px-3 py-2">
                  <option value="">Select a program</option>
                  <option value="esthetician">Esthetician</option>
                  <option value="advanced-esthetician">Advanced Esthetician</option>
                  <option value="manicurist">Manicurist</option>
                  <option value="eyelash">Eyelash Technician</option>
                  <option value="combined">Esthetician + Manicurist</option>
                </select>
                <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-4 rounded-lg">
                  Request Information
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DA</span>
                </div>
                <span className="text-xl font-bold">Distinctive Academy</span>
              </div>
              <p className="text-gray-400">
                TDLR Approved & Certified beauty school in Houston, Texas. 
                Bilingual instruction and hybrid learning options available.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Esthetician (750 hours)</li>
                <li>Advanced Esthetician (750 hours)</li>
                <li>Manicurist (600 hours)</li>
                <li>Eyelash Technician (320 hours)</li>
                <li>Combined Programs</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>4201 Cypress Creek Pkwy, Ste 210<br />Houston, TX 77068</p>
                <p>Phone: (646) 996-9166</p>
                <p>Email: distinctiveacademy@outlook.com</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Distinctive Academy. All rights reserved. TDLR Approved & Certified.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}