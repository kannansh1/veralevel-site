import type React from 'react';
import { useState } from 'react';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/xjkreodb', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        form.reset();
        setTimeout(() => {
          setIsContactModalOpen(false);
          setSubmitMessage('');
        }, 2000);
      } else {
        setSubmitMessage('Oops! There was a problem sending your message. Please try again.');
      }
    } catch (error) {
      setSubmitMessage('Oops! There was a problem sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-red-50">
      {/* Navbar */}
      <nav className="flex items-center justify-center px-6 py-8 bg-red-50">
        <div className="flex items-center space-x-6">
          <img src="/vera.png" alt="Vera Level Apps Logo" className="h-20 w-20" />
          <span className="text-4xl font-bold text-gray-900 tracking-tight" style={{ fontFamily: "'Inter', -apple-system, system-ui, sans-serif" }}>Vera Level Apps</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 pt-16 pb-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">
            We build powerful, polished apps.
          </h1>
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-md font-medium hover:bg-red-700 transition-colors text-lg"
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* MVP Section */}
      <section className="px-6 pt-8 pb-16 bg-red-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">We Build MVPs That Scale</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            From concept to launch, we help startups and businesses build minimum viable products
            that validate ideas quickly and scale seamlessly. Our expertise spans web apps, mobile
            solutions, and SaaS platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Launch in weeks, not months</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Stack</h3>
              <p className="text-gray-600">Battle-tested technologies</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scalable</h3>
              <p className="text-gray-600">Built to grow with your business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Apps Section */}
      <section className="px-6 py-16 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Apps</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Inimai */}
            <a href="https://inim.ai" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow block">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/inimai.png" alt="Inimai App Icon" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Inimai</h3>
              <p className="text-gray-600 text-sm">Personalized audio stories for children with name/age customization and engaging themes.</p>
            </a>

            {/* ScanSecure */}
            <a href="https://apps.apple.com/us/app/scansecure-tracker-finder/id6744668689" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow block">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/scansecure.png" alt="ScanSecure App Icon" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ScanSecure</h3>
              <p className="text-gray-600 text-sm">Hidden camera detector using IR, magnetic field, and wireless scans for privacy protection.</p>
            </a>

            {/* Sumaho Shindan */}
            <a href="https://apps.apple.com/us/app/%E3%82%B9%E3%83%9E%E3%83%9B%E8%A8%BA%E6%96%AD/id6745745663" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow block">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/sumaho.png" alt="スマホ診断 App Icon" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">スマホ診断</h3>
              <p className="text-gray-600 text-sm">Japanese iPhone diagnostic tool testing sensors, battery, storage, and network health.</p>
            </a>

            {/* Tabs */}
            <a href="https://www.closeyourtabs.com" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow block">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/tabs.png" alt="Tabs App Icon" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tabs</h3>
              <p className="text-gray-600 text-sm">Voice and photo-driven task organizer that helps clear mental "open tabs" with AI.</p>
            </a>

            {/* AppBestie */}
            <a href="https://www.appbestie.com" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow block">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/appbestie.png" alt="AppBestie App Icon" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">AppBestie</h3>
              <p className="text-gray-600 text-sm">AI SaaS platform that generates complete Flutter app projects from simple descriptions.</p>
            </a>

            {/* Shloka */}
            <a href="https://shloka.app" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow block">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <img src="/shloka.png" alt="Shloka App Icon" className="w-16 h-16 rounded-xl" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Shloka</h3>
              <p className="text-gray-600 text-sm">Learn and recite Sanskrit shlokas with audio playback and repetition practice features.</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">© Vera Level Apps | Made in Canada</p>
        </div>
      </footer>

      {/* Contact Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Get In Touch</h3>
                <button
                  onClick={() => setIsContactModalOpen(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  >
                    <option value="">Select project type</option>
                    <option value="mvp">MVP Development</option>
                    <option value="web-app">Web Application</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="saas">SaaS Platform</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Tell us about your project, timeline, and goals..."
                  />
                </div>

                {submitMessage && (
                  <div className={`text-center p-3 rounded-md ${submitMessage.includes('Thank you') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {submitMessage}
                  </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-red-600 text-white px-6 py-2 rounded-md font-medium hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsContactModalOpen(false)}
                    disabled={isSubmitting}
                    className="flex-1 bg-gray-100 text-gray-900 px-6 py-2 rounded-md font-medium hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
