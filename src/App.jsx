import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Mail, Phone, MapPin, Globe, Users, TrendingUp, Target, Briefcase, CheckCircle, ArrowRight, Building, Handshake } from 'lucide-react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="meridian-navy-bg text-white py-4 px-6 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/assets/brand_darker_icon_name_white.png" alt="Meridian Advisory Partners" className="h-10 filter brightness-0 invert" />
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="hover:text-blue-200 transition-colors">About</a>
            <a href="#services" className="hover:text-blue-200 transition-colors">Services</a>
            <a href="#approach" className="hover:text-blue-200 transition-colors">Our Approach</a>
            <a href="#locations" className="hover:text-blue-200 transition-colors">Locations</a>
            <a href="#contact" className="hover:text-blue-200 transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Cross-Border Strategic Growth Excellence
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
                We advise CEOs and private equity funds seeking strategic growth through cross-border acquisitions and international expansion.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg">
                  Discover Our Approach
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 text-lg">
                  Schedule Consultation
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm opacity-80">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Boutique Excellence</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Cross-Border Expertise</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Senior Partner Access</span>
                </div>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <img src="/assets/brand_darker_icon_name_white.png" alt="Meridian Advisory Partners" className="h-32 mx-auto lg:ml-auto filter brightness-0 invert opacity-80" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold meridian-navy mb-2">15+</div>
              <div className="text-gray-600">Years Combined Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold meridian-navy mb-2">$2B+</div>
              <div className="text-gray-600">Transaction Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold meridian-navy mb-2">50+</div>
              <div className="text-gray-600">Successful Integrations</div>
            </div>
            <div>
              <div className="text-3xl font-bold meridian-navy mb-2">2</div>
              <div className="text-gray-600">Strategic Locations</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold meridian-navy mb-6">
                A Boutique Alliance Born from Excellence
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Meridian Advisory Partners represents the strategic union of two distinguished boutique firms: Kelley Management Consulting from Chicago and Carisma RCT from San Marino. This unique joint venture combines American business acumen with European sophistication.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Our boutique model ensures direct access to senior partners, customized solutions, and agile decision-making. With dual-location expertise, we provide clients with deep local knowledge, cultural understanding, and strategic insights essential for successful cross-border growth initiatives.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="meridian-navy-bg text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="font-semibold meridian-navy">Chicago</p>
                  <p className="text-sm text-gray-600">USA Hub</p>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="meridian-navy-bg text-white rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <p className="font-semibold meridian-navy">San Marino</p>
                  <p className="text-sm text-gray-600">Europe Hub</p>
                </div>
              </div>
            </div>
            <div>
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8 bg-gradient-to-br from-blue-900 to-blue-700 text-white rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Our Philosophy</h3>
                  <blockquote className="text-lg opacity-90 mb-6 italic">
                    "Precision in navigation, excellence in execution, partnership in every engagement."
                  </blockquote>
                  <p className="text-white leading-relaxed">
                    We believe that successful cross-border growth requires more than strategic frameworks—it demands cultural intelligence, personalized attention, and the agility that only a boutique approach can deliver.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold meridian-navy mb-6">
              Strategic Advisory Services
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Two core pillars of expertise designed to guide your organization through every phase of international growth and strategic transformation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="meridian-navy-bg text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Building className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold meridian-navy mb-4">Global M&A</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Comprehensive strategic consulting for cross-border mergers and acquisitions, from target identification and due diligence support to seamless post-merger integration and value realization.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Target Identification & Strategic Fit Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Post-M&A Integration Strategy & Execution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Cultural Alignment & Synergy Realization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Interim Management & Executive Search</span>
                  </li>
                </ul>
                <Button className="meridian-navy-bg hover:bg-blue-800 text-white">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="meridian-navy-bg text-white rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Globe className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold meridian-navy mb-4">International Growth</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Strategic market entry consulting and execution support for companies seeking organic international expansion, strategic partnerships, and sustainable growth in new markets.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Market Entry Strategy & Competitive Intelligence</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Regulatory Navigation & Compliance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Strategic Partnerships & Joint Ventures</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Local Market Intelligence & Cultural Adaptation</span>
                  </li>
                </ul>
                <Button className="meridian-navy-bg hover:bg-blue-800 text-white">
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section id="approach" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold meridian-navy mb-6">
              Our Approach
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              A proven methodology that accelerates value creation while de-risking execution through three integrated pillars of excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="meridian-navy-bg text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold meridian-navy mb-4">Strategy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Comprehensive strategic analysis and planning that identifies optimal pathways for growth, evaluates market opportunities, and defines clear success metrics for sustainable value creation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="meridian-navy-bg text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold meridian-navy mb-4">Planning</h3>
                <p className="text-gray-700 leading-relaxed">
                </p>
                  Detailed integration and implementation planning that addresses cultural alignment, operational harmonization, and risk mitigation to ensure seamless execution and synergy realization.
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardContent className="p-8 text-center">
                <div className="meridian-navy-bg text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Handshake className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold meridian-navy mb-4">Execution</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hands-on execution support with interim management, change leadership, and continuous monitoring to deliver measurable results and accelerate time-to-value for all stakeholders.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section id="locations" className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold meridian-navy mb-6">
              Strategic Locations
            </h2>
            <p className="text-xl text-gray-700">
              Positioned at the heart of two dynamic business ecosystems
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="meridian-navy-bg text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold meridian-navy">Chicago Office</h3>
                    <p className="text-gray-600">United States Hub</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Located in America's business heartland, our Chicago office provides direct access to the US market, connecting clients with opportunities across North America's dynamic economy.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>chicago@meridianadvisory.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+1 (312) 555-0100</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="meridian-navy-bg text-white rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold meridian-navy">San Marino Office</h3>
                    <p className="text-gray-600">European Hub</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Strategically positioned in the heart of Europe, our San Marino office offers privileged access to European markets and deep understanding of continental business culture.
                </p>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3" />
                    <span>sanmarino@meridianadvisory.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3" />
                    <span>+378 0549 963759</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding meridian-navy-bg text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Begin Your Strategic Journey
              </h2>
              <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Every transformative partnership begins with a conversation. Connect with our team to explore how Meridian Advisory Partners can navigate your organization toward its next horizon of growth.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4" />
                  <span className="text-lg">info@meridianadvisory.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4" />
                  <span className="text-lg">+1 (312) 555-0100</span>
                </div>
                <div className="flex items-center">
                  <Globe className="w-6 h-6 mr-4" />
                  <span className="text-lg">Global Strategic Partnerships</span>
                </div>
              </div>
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-3 text-lg">
                Schedule a Consultation
              </Button>
            </div>

            <Card className="bg-white border-0 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold meridian-navy mb-6">Contact Us</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <Button type="submit" className="w-full meridian-navy-bg hover:bg-blue-800 text-white py-3">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <img src="/assets/brand_darker_icon_name_white.png" alt="Meridian Advisory Partners" className="h-8 mb-4 filter brightness-0 invert" />
              <p className="text-gray-400 leading-relaxed">
                Boutique strategic consulting firm specializing in cross-border M&A and international expansion.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Global M&A</li>
                <li>Internationalisation</li>
                <li>Post-M&A Integration</li>
                <li>Interim Management</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>info@meridianadvisory.com</p>
                <p>Chicago: +1 (312) 555-0100</p>
                <p>San Marino: +378 0549 963759</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Meridian Advisory Partners. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App