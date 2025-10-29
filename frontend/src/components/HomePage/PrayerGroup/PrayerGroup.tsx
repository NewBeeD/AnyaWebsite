'use client'
import { useState } from 'react';

const PrayerGroupInvitation = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Here you would typically send the data to your backend
    console.log('Submitted email:', email);
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden ">
        
        <div className="md:flex">
          {/* Left Section - Image */}
          <div className="md:w-2/5 bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex flex-col justify-center items-center text-center">
            <div className="mb-6">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg 
                  className="w-10 h-10 text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" 
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Join Our Prayer Circle</h2>
              <p className="text-blue-100 text-sm">
                Come together in faith and fellowship
              </p>
            </div>
          </div>

          {/* Right Section - Content */}
          <div className="md:w-3/5 p-2!">
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4!">
                  <svg 
                    className="w-8 h-8 text-green-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M5 13l4 4L19 7" 
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 mb-6">
                  We've sent a confirmation email with details about our prayer group.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                >
                  Join Another Person
                </button>
              </div>
            ) : (
              <>
                <h1 className="text-3xl font-bold text-gray-800 mb-4!">
                  Strengthen Your Spiritual Journey
                </h1>
                <p className="text-gray-600 mb-2!">
                  Join our community of believers who come together to pray, support, 
                  and grow in faith. Our prayer group meets regularly to:
                </p>
                
                <ul className="space-y-2! mb-8! mt-6!">
                  {[
                    'Share prayer requests and testimonies',
                    'Study scripture together',
                    'Support each other in times of need',
                    'Grow in spiritual discipline',
                    'Build meaningful Christian relationships'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg 
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7" 
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2!">
                      Enter your email to join
                    </label>

                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                      className="w-full px-4! py-2! border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-2! px-6! mt-2! rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Joining...
                      </span>
                    ) : (
                      'Join Prayer Group'
                    )}
                  </button>
                </form>

                <p className="text-xs text-gray-500 text-center mt-2!">
                  By joining, you agree to receive occasional updates about prayer meetings and events.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrayerGroupInvitation;