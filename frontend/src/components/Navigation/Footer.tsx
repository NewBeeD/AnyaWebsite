// components/Footer.tsx
import Link from 'next/link';

const socialLinks = [
  {
    name: 'Facebook',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    url: 'https://facebook.com'
  },
  {
    name: 'YouTube',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
      </svg>
    ),
    url: 'https://youtube.com'
  },
  {
    name: 'Instagram',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.273 14.857 3.783 13.706 3.783 12.41s.49-2.448 1.343-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.854.875 1.343 2.026 1.343 3.323s-.49 2.448-1.343 3.323c-.875.807-2.026 1.297-3.323 1.297z"/>
      </svg>
    ),
    url: 'https://instagram.com'
  }
];

const quickLinks = [
  { name: 'Find a Church', href: '/churches' },
  { name: 'Events Calendar', href: '/events' },
  { name: 'Our Beliefs', href: '/beliefs' },
  { name: 'Contact Us', href: '/contact' }
];

const resources = [
  { name: 'Sermons', href: '/sermons' },
  { name: 'For Leaders', href: '/leaders' },
  { name: 'Prayer Requests', href: '/prayer' },
  { name: 'Give', href: '/give' }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto! px-4! max-w-6xl">
        
        {/* Main Footer Content */}
        <div className="py-12!">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8!">
            
            {/* Organization Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold mb-4!">Adventist National Youth Association</h3>
              <p className="text-gray-400 mb-4! max-w-md">
                Uniting 30+ churches across the island in faith, fellowship, and mission. 
                Together we serve our communities and share the love of Christ.
              </p>
              <div className="flex items-center text-gray-400 mb-2!">
                <svg className="w-5 h-5 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@churchnetwork.org" className="hover:text-white transition-colors">
                  info@churchnetwork.org
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4!">Quick Links</h4>
              <ul className="space-y-2!">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4!">Resources</h4>
              <ul className="space-y-2!">
                {resources.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-400 hover:text-white transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-6!">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4! md:space-y-0!">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              <p>&copy; {new Date().getFullYear()} Island Church Network. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-x-4!">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}