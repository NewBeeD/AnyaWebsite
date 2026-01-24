// components/NewsletterSignup.tsx
'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setIsSubscribed(true);
    setEmail('');
  };

  if (isSubscribed) {
    return (
      <section className="py-12! bg-gradient-to-r from-green-500 to-emerald-600 text-white">
        <div className="container mx-auto! px-4! max-w-2xl text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8!">
            <div className="text-4xl mb-4!">✅</div>
            <h2 className="text-2xl font-bold mb-2!">Welcome to Our Community!</h2>
            <p className="text-green-100 text-lg mb-4!">
              Thank you for subscribing. You'll receive our next update in your inbox.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12! bg-gradient-to-r from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto! px-4! max-w-4xl">
        
        {/* Signup Content */}
        <div className="flex flex-col lg:flex-row items-center justify-between space-y-6! lg:space-y-0">
          
          {/* Text Content */}
          <div className="text-center lg:text-left lg:flex-1">
            <h2 className="text-2xl lg:text-3xl font-bold mb-2!">
              Stay Connected Across the Island
            </h2>
            <p className="text-blue-100 text-lg">
              Get monthly updates on events, resources, and stories of what God is doing.
            </p>
          </div>

          {/* Signup Form */}
          <div className="lg:flex-1 lg:pl-8!">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3!">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4! py-3! rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-white text-blue-600 font-bold px-6! py-3! rounded-lg hover:bg-gray-100 transition-colors duration-300 whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
            <p className="text-blue-200 text-sm text-center sm:text-left mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}