// // app/contact/page.tsx
// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     subject: '',
//     message: '',
//     church: '',
//     interest: ''
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       setIsSubmitting(false);
//       setIsSubmitted(true);
//       setFormData({
//         name: '',
//         email: '',
//         phone: '',
//         subject: '',
//         message: '',
//         church: '',
//         interest: ''
//       });
//     }, 2000);
//   };

//   const contactMethods = [
//     {
//       icon: "📧",
//       title: "Email Us",
//       details: "info@anyadominica.org",
//       description: "Send us a message and we'll respond within 24 hours",
//       link: "mailto:info@anyadominica.org"
//     },
//     {
//       icon: "📞",
//       title: "Call Us",
//       details: "+1 (767) 440-1000",
//       description: "Monday-Friday, 8:00 AM - 4:00 PM",
//       link: "tel:+17674401000"
//     },
//     {
//       icon: "🏢",
//       title: "Visit Us",
//       details: "ANYA Headquarters",
//       description: "Roseau, Dominica",
//       link: "https://maps.google.com"
//     },
//     {
//       icon: "💬",
//       title: "Social Media",
//       details: "@ANYADominica",
//       description: "Follow us for updates and messages",
//       link: "https://facebook.com/ANYADominica"
//     }
//   ];

//   const regionalOffices = [
//     {
//       region: "Northern Region",
//       coordinator: "Sister Angela Frederick",
//       phone: "+1 (767) 440-1010",
//       email: "a.frederick@anyadominica.org",
//       coverage: "Portsmouth, Calibishie, Wesley"
//     },
//     {
//       region: "Southern Region",
//       coordinator: "Brother James Pascal",
//       phone: "+1 (767) 440-1011",
//       email: "j.pascal@anyadominica.org",
//       coverage: "Scott's Head, Grand Bay, Soufriere"
//     },
//     {
//       region: "Eastern Region",
//       coordinator: "Sister Lisa Williams",
//       phone: "+1 (767) 440-1012",
//       email: "l.williams@anyadominica.org",
//       coverage: "Marigot, Rosalie, La Plaine"
//     },
//     {
//       region: "Western Region",
//       coordinator: "Brother Mark Green",
//       phone: "+1 (767) 440-1013",
//       email: "m.green@anyadominica.org",
//       coverage: "Roseau Valley, Canefield, Mahaut"
//     }
//   ];

//   const contactReasons = [
//     "General Inquiry",
//     "Youth Program Information",
//     "Volunteer Opportunity",
//     "Event Registration",
//     "Prayer Request",
//     "Partnership Opportunity",
//     "Technical Support",
//     "Other"
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
//       {/* Hero Section */}
//       <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
//         <div className="container mx-auto! px-4! max-w-6xl">
//           <div className="text-center">
//             <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
//               ANYA Dominica • We're Here to Help
//             </div>
//             <h1 className="text-5xl font-bold mb-6!">Contact Us</h1>
//             <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
//               Get in touch with ANYA Dominica. Whether you have questions, want to get involved, 
//               or need support, we're here to connect with you.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Contact Methods */}
//       <section className="py-16! bg-white">
//         <div className="container mx-auto! px-4! max-w-6xl">
//           <div className="text-center mb-12!">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4!">Get in Touch</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
//               Multiple ways to reach our team across Dominica
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6!">
//             {contactMethods.map((method, index) => (
//               <a
//                 key={index}
//                 href={method.link}
//                 className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group"
//               >
//                 <div className="text-3xl mb-4!">{method.icon}</div>
//                 <h3 className="font-bold text-gray-900 mb-2!">{method.title}</h3>
//                 <p className="text-blue-600 font-semibold mb-2!">{method.details}</p>
//                 <p className="text-gray-600 text-sm">{method.description}</p>
//               </a>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Form */}
//       <section className="py-16! bg-gray-50">
//         <div className="container mx-auto! px-4! max-w-4xl">
//           <div className="text-center mb-12!">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4!">Send Us a Message</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
//               Fill out the form below and we'll get back to you as soon as possible
//             </p>
//           </div>

//           {isSubmitted ? (
//             <div className="bg-green-50 border border-green-200 rounded-2xl p-8! text-center">
//               <div className="text-4xl mb-4!">✅</div>
//               <h3 className="text-2xl font-bold text-green-900 mb-2!">Message Sent Successfully!</h3>
//               <p className="text-green-700 mb-4!">
//                 Thank you for contacting ANYA Dominica. We've received your message and will get back to you within 24 hours.
//               </p>
//               <button
//                 onClick={() => setIsSubmitted(false)}
//                 className="bg-green-600 text-white px-6! py-3! rounded-lg hover:bg-green-700 transition-colors"
//               >
//                 Send Another Message
//               </button>
//             </div>
//           ) : (
//             <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8!">
//               <form onSubmit={handleSubmit} className="space-y-6!">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2!">
//                       Full Name *
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       placeholder="Your full name"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2!">
//                       Email Address *
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2!">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       placeholder="+1 (767) 000-0000"
//                     />
//                   </div>

//                   <div>
//                     <label htmlFor="church" className="block text-sm font-medium text-gray-700 mb-2!">
//                       Your Church (Optional)
//                     </label>
//                     <input
//                       type="text"
//                       id="church"
//                       name="church"
//                       value={formData.church}
//                       onChange={handleChange}
//                       className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       placeholder="SDA Church name"
//                     />
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
//                   <div>
//                     <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2!">
//                       I'm interested in *
//                     </label>
//                     <select
//                       id="interest"
//                       name="interest"
//                       value={formData.interest}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     >
//                       <option value="">Select an option</option>
//                       {contactReasons.map((reason, index) => (
//                         <option key={index} value={reason}>{reason}</option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2!">
//                       Subject *
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                       placeholder="Brief subject of your message"
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2!">
//                     Message *
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows={6}
//                     className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
//                     placeholder="Please share your message, question, or prayer request..."
//                   />
//                 </div>

//                 <div className="text-center">
//                   <button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="bg-blue-600 text-white font-bold px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center justify-center">
//                         <svg className="animate-spin -ml-1! mr-3! h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
//                           <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                           <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//                         </svg>
//                         Sending Message...
//                       </div>
//                     ) : (
//                       'Send Message'
//                     )}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </section>

//       {/* Regional Contacts
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4 max-w-6xl">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Contacts</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Connect with our regional coordinators across Dominica
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {regionalOffices.map((office, index) => (
//               <div key={index} className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
//                 <h3 className="text-xl font-bold text-gray-900 mb-3">{office.region}</h3>
//                 <div className="space-y-3">
//                   <div className="flex items-center text-gray-700">
//                     <svg className="w-5 h-5 mr-3 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                     </svg>
//                     {office.coordinator}
//                   </div>
//                   <a href={`tel:${office.phone}`} className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
//                     <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//                     </svg>
//                     {office.phone}
//                   </a>
//                   <a href={`mailto:${office.email}`} className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
//                     <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
//                     </svg>
//                     {office.email}
//                   </a>
//                   <div className="flex items-center text-gray-600">
//                     <svg className="w-5 h-5 mr-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//                     </svg>
//                     Covers: {office.coverage}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section> */}

//       {/* FAQ & Quick Help */}
//       <section className="py-16! bg-gray-50">
//         <div className="container mx-auto! px-4! max-w-4xl">
//           <div className="text-center mb-12!">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4!">Quick Help</h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
//               Common questions and quick resources
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8!">
//             <div className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200">
//               <h3 className="text-xl font-bold text-gray-900 mb-4!">Frequently Asked Questions</h3>
//               <div className="space-y-4!">
//                 <div>
//                   <h4 className="font-semibold text-gray-900">How can I join ANYA?</h4>
//                   <p className="text-gray-600 text-sm">Contact your local church youth leader or regional coordinator to get involved.</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">When are your events?</h4>
//                   <p className="text-gray-600 text-sm">Check our events calendar for upcoming activities across Dominica.</p>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold text-gray-900">How can my church partner with ANYA?</h4>
//                   <p className="text-gray-600 text-sm">Reach out to our executive team to discuss partnership opportunities.</p>
//                 </div>
//               </div>
//               <Link href="/faq" className="inline-block mt-4! text-blue-600 hover:text-blue-700 font-semibold">
//                 View All FAQs →
//               </Link>
//             </div>

//             <div className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200">
//               <h3 className="text-xl font-bold text-gray-900 mb-4!">Quick Links</h3>
//               <div className="space-y-3!">
//                 <Link href="/events" className="block text-blue-600 hover:text-blue-700 transition-colors">
//                   📅 Upcoming Events
//                 </Link>
//                 <Link href="/churches" className="block text-blue-600 hover:text-blue-700 transition-colors">
//                   ⛪ Find a Church
//                 </Link>
//                 <Link href="/volunteer" className="block text-blue-600 hover:text-blue-700 transition-colors">
//                   🤝 Volunteer Opportunities
//                 </Link>
//                 <Link href="/prayer" className="block text-blue-600 hover:text-blue-700 transition-colors">
//                   🙏 Prayer Requests
//                 </Link>
//                 <Link href="/resources" className="block text-blue-600 hover:text-blue-700 transition-colors">
//                   📚 Resources & Downloads
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Emergency Contact */}
//       <section className="py-12! bg-red-50 border-t border-red-200">
//         <div className="container mx-auto! px-4! max-w-4xl text-center">
//           <div className="bg-white rounded-2xl p-6! shadow-lg border border-red-200">
//             <div className="text-3xl mb-4!">🚨</div>
//             <h3 className="text-xl font-bold text-gray-900 mb-2">Emergency Contact</h3>
//             <p className="text-gray-600 mb-4!">
//               For urgent pastoral care or emergency situations outside of office hours
//             </p>
//             <a href="tel:+17674401000" className="bg-red-600 text-white px-6! py-3! rounded-lg hover:bg-red-700 transition-colors font-semibold">
//               Emergency Hotline: +1 (767) 440-1000
//             </a>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }









// app/contact/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [selectedCountry, setSelectedCountry] = useState<'dominica' | 'barbados'>('dominica');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    church: '',
    interest: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        church: '',
        interest: ''
      });
    }, 2000);
  };

  const contactMethods = {
    dominica: [
      {
        icon: "📧",
        title: "Email Us",
        details: "info@anyadominica.org",
        description: "Send us a message and we'll respond within 24 hours",
        link: "mailto:info@anyadominica.org"
      },
      {
        icon: "📞",
        title: "Call Us",
        details: "+1 (767) 440-1000",
        description: "Monday-Friday, 8:00 AM - 4:00 PM",
        link: "tel:+17674401000"
      },
      {
        icon: "🏢",
        title: "Visit Us",
        details: "ANYA Headquarters",
        description: "Roseau, Dominica",
        link: "https://maps.google.com"
      },
      {
        icon: "💬",
        title: "Social Media",
        details: "@ANYADominica",
        description: "Follow us for updates and messages",
        link: "https://facebook.com/ANYADominica"
      }
    ],
    barbados: [
      {
        icon: "📧",
        title: "Email Us",
        details: "info@anyabarbados.org",
        description: "Send us a message and we'll respond within 24 hours",
        link: "mailto:info@anyabarbados.org"
      },
      {
        icon: "📞",
        title: "Call Us",
        details: "+1 (246) 430-2000",
        description: "Monday-Friday, 8:00 AM - 4:00 PM",
        link: "tel:+12464302000"
      },
      {
        icon: "🏢",
        title: "Visit Us",
        details: "ANYA Headquarters",
        description: "Bridgetown, Barbados",
        link: "https://maps.google.com"
      },
      {
        icon: "💬",
        title: "Social Media",
        details: "@ANYABarbados",
        description: "Follow us for updates and messages",
        link: "https://facebook.com/ANYABarbados"
      }
    ]
  };

  const regionalOffices = {
    dominica: [
      {
        region: "Northern Region",
        coordinator: "Sister Angela Frederick",
        phone: "+1 (767) 440-1010",
        email: "a.frederick@anyadominica.org",
        coverage: "Portsmouth, Calibishie, Wesley"
      },
      {
        region: "Southern Region",
        coordinator: "Brother James Pascal",
        phone: "+1 (767) 440-1011",
        email: "j.pascal@anyadominica.org",
        coverage: "Scott's Head, Grand Bay, Soufriere"
      },
      {
        region: "Eastern Region",
        coordinator: "Sister Lisa Williams",
        phone: "+1 (767) 440-1012",
        email: "l.williams@anyadominica.org",
        coverage: "Marigot, Rosalie, La Plaine"
      },
      {
        region: "Western Region",
        coordinator: "Brother Mark Green",
        phone: "+1 (767) 440-1013",
        email: "m.green@anyadominica.org",
        coverage: "Roseau Valley, Canefield, Mahaut"
      }
    ],
    barbados: [
      {
        region: "St. Michael & Christ Church",
        coordinator: "Sister Jennifer Broomes",
        phone: "+1 (246) 430-2010",
        email: "j.broomes@anyabarbados.org",
        coverage: "Bridgetown, Oistins, Hastings"
      },
      {
        region: "St. James & St. Peter",
        coordinator: "Brother David Alleyne",
        phone: "+1 (246) 430-2011",
        email: "d.alleyne@anyabarbados.org",
        coverage: "Speightstown, Holetown, Six Cross Roads"
      },
      {
        region: "St. George & St. Thomas",
        coordinator: "Sister Michelle Hinds",
        phone: "+1 (246) 430-2012",
        email: "m.hinds@anyabarbados.org",
        coverage: "The Ivy, Welchman Hall, Belleplaine"
      },
      {
        region: "St. Philip & St. John",
        coordinator: "Brother Kevin Forde",
        phone: "+1 (246) 430-2013",
        email: "k.forde@anyabarbados.org",
        coverage: "Six Roads, Bathsheba, Four Roads"
      }
    ]
  };

  const contactReasons = [
    "General Inquiry",
    "Youth Program Information",
    "Volunteer Opportunity",
    "Event Registration",
    "Prayer Request",
    "Partnership Opportunity",
    "Technical Support",
    "Other"
  ];

  const countryInfo = {
    dominica: {
      name: "Dominica",
      title: "ANYA Dominica • We're Here to Help",
      heroDescription: "Get in touch with ANYA Dominica. Whether you have questions, want to get involved, or need support, we're here to connect with you.",
      contactMethodsTitle: "Multiple ways to reach our team across Dominica",
      regionalContactsTitle: "Regional Contacts",
      regionalContactsDescription: "Connect with our regional coordinators across Dominica",
      emergencyHotline: "+1 (767) 440-1000",
      formEmail: "info@anyadominica.org",
      faqChurchQuestion: "Contact your local church youth leader or regional coordinator to get involved.",
      faqEventsQuestion: "Check our events calendar for upcoming activities across Dominica.",
      faqPartnershipQuestion: "Reach out to our executive team to discuss partnership opportunities."
    },
    barbados: {
      name: "Barbados",
      title: "ANYA Barbados • We're Here to Help",
      heroDescription: "Get in touch with ANYA Barbados. Whether you have questions, want to get involved, or need support, we're here to connect with you.",
      contactMethodsTitle: "Multiple ways to reach our team across Barbados",
      regionalContactsTitle: "Parish Contacts",
      regionalContactsDescription: "Connect with our parish coordinators across Barbados",
      emergencyHotline: "+1 (246) 430-2000",
      formEmail: "info@anyabarbados.org",
      faqChurchQuestion: "Contact your local church youth leader or parish coordinator to get involved.",
      faqEventsQuestion: "Check our events calendar for upcoming activities across Barbados.",
      faqPartnershipQuestion: "Reach out to our executive team to discuss partnership opportunities."
    }
  };

  const currentCountry = countryInfo[selectedCountry];
  const currentContactMethods = contactMethods[selectedCountry];
  const currentRegionalOffices = regionalOffices[selectedCountry];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20! bg-gradient-to-r from-blue-700 to-purple-800 text-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center px-4! py-2! bg-white/20 rounded-full text-sm font-medium mb-4!">
              {currentCountry.title}
            </div>

            {/* Country Filter */}
            <div className="mb-8! flex justify-center">
              <div className="bg-white/20 rounded-lg p-1! inline-flex">
                <button
                  onClick={() => setSelectedCountry('dominica')}
                  className={`px-6! py-2! rounded-md font-semibold transition-all ${selectedCountry === 'dominica' 
                    ? 'bg-white text-blue-700' 
                    : 'text-white hover:bg-white/10'}`}
                >
                  Dominica
                </button>
                <button
                  onClick={() => setSelectedCountry('barbados')}
                  className={`px-6! py-2! rounded-md font-semibold transition-all ${selectedCountry === 'barbados' 
                    ? 'bg-white text-blue-700' 
                    : 'text-white hover:bg-white/10'}`}
                >
                  Barbados
                </button>
              </div>
            </div>

            <h1 className="text-5xl font-bold mb-6!">Contact Us - {currentCountry.name}</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto! leading-relaxed">
              {currentCountry.heroDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Get in Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              {currentCountry.contactMethodsTitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6!">
            {currentContactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="text-3xl mb-4!">{method.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2!">{method.title}</h3>
                <p className="text-blue-600 font-semibold mb-2!">{method.details}</p>
                <p className="text-gray-600 text-sm">{method.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Send Us a Message</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              Fill out the form below and we'll get back to you as soon as possible
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-2xl p-8! text-center">
              <div className="text-4xl mb-4!">✅</div>
              <h3 className="text-2xl font-bold text-green-900 mb-2!">Message Sent Successfully!</h3>
              <p className="text-green-700 mb-4!">
                Thank you for contacting ANYA {currentCountry.name}. We've received your message and will get back to you within 24 hours.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="bg-green-600 text-white px-6! py-3! rounded-lg hover:bg-green-700 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8!">
              <form onSubmit={handleSubmit} className="space-y-6!">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2!">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2!">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2!">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder={selectedCountry === 'dominica' ? "+1 (767) 000-0000" : "+1 (246) 000-0000"}
                    />
                  </div>

                  <div>
                    <label htmlFor="church" className="block text-sm font-medium text-gray-700 mb-2!">
                      Your Church (Optional)
                    </label>
                    <input
                      type="text"
                      id="church"
                      name="church"
                      value={formData.church}
                      onChange={handleChange}
                      className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="SDA Church name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6!">
                  <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-2!">
                      I'm interested in *
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      required
                      className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    >
                      <option value="">Select an option</option>
                      {contactReasons.map((reason, index) => (
                        <option key={index} value={reason}>{reason}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2!">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      placeholder="Brief subject of your message"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2!">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4! py-3! border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    placeholder="Please share your message, question, or prayer request..."
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white font-bold px-8! py-4! rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1! mr-3! h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending Message...
                      </div>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Regional Contacts */}
      <section className="py-16! bg-white">
        <div className="container mx-auto! px-4! max-w-6xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">{currentCountry.regionalContactsTitle}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              {currentCountry.regionalContactsDescription}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8!">
            {currentRegionalOffices.map((office, index) => (
              <div key={index} className="bg-blue-50 rounded-2xl p-6! border border-blue-200">
                <h3 className="text-xl font-bold text-gray-900 mb-3!">{office.region}</h3>
                <div className="space-y-3!">
                  <div className="flex items-center text-gray-700">
                    <svg className="w-5 h-5 mr-3! text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {office.coordinator}
                  </div>
                  <a href={`tel:${office.phone}`} className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5 mr-3!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {office.phone}
                  </a>
                  <a href={`mailto:${office.email}`} className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {office.email}
                  </a>
                  <div className="flex items-center text-gray-600">
                    <svg className="w-5 h-5 mr-3! text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Covers: {office.coverage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Quick Help */}
      <section className="py-16! bg-gray-50">
        <div className="container mx-auto! px-4! max-w-4xl">
          <div className="text-center mb-12!">
            <h2 className="text-3xl font-bold text-gray-900 mb-4!">Quick Help</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
              Common questions and quick resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8!">
            <div className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4!">Frequently Asked Questions</h3>
              <div className="space-y-4!">
                <div>
                  <h4 className="font-semibold text-gray-900">How can I join ANYA?</h4>
                  <p className="text-gray-600 text-sm">{currentCountry.faqChurchQuestion}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">When are your events?</h4>
                  <p className="text-gray-600 text-sm">{currentCountry.faqEventsQuestion}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">How can my church partner with ANYA?</h4>
                  <p className="text-gray-600 text-sm">{currentCountry.faqPartnershipQuestion}</p>
                </div>
              </div>
              <Link href="/faq" className="inline-block mt-4! text-blue-600 hover:text-blue-700 font-semibold">
                View All FAQs →
              </Link>
            </div>

            <div className="bg-white rounded-2xl p-6! shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4!">Quick Links</h3>
              <div className="space-y-3!">
                <Link href="/events" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  📅 Upcoming Events
                </Link>
                <Link href="/churches" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  ⛪ Find a Church
                </Link>
                <Link href="/volunteer" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  🤝 Volunteer Opportunities
                </Link>
                <Link href="/prayer" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  🙏 Prayer Requests
                </Link>
                <Link href="/resources" className="block text-blue-600 hover:text-blue-700 transition-colors">
                  📚 Resources & Downloads
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12! bg-red-50 border-t border-red-200">
        <div className="container mx-auto! px-4! max-w-4xl text-center">
          <div className="bg-white rounded-2xl p-6! shadow-lg border border-red-200">
            <div className="text-3xl mb-4!">🚨</div>
            <h3 className="text-xl font-bold text-gray-900 mb-2!">Emergency Contact</h3>
            <p className="text-gray-600 mb-4!">
              For urgent pastoral care or emergency situations outside of office hours
            </p>
            <a href={`tel:${currentCountry.emergencyHotline}`} className="bg-red-600 text-white px-6! py-3! rounded-lg hover:bg-red-700 transition-colors font-semibold">
              Emergency Hotline: {currentCountry.emergencyHotline}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}