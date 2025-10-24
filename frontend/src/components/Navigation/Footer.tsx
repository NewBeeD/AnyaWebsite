// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Adventist National Youth Association. All rights reserved.</p>
      </div>
    </footer>
  );
}



// // components/Footer.tsx
// import Link from 'next/link'

// export default function Footer() {
//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Main Footer Content */}
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
//           {/* Brand Column */}
//           <div className="lg:col-span-1">
//             <div className="flex items-center mb-4">
//               <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center mr-3">
//                 <span className="font-bold text-white">ANYA</span>
//               </div>
//               <span className="text-xl font-bold">Adventist National Youth Association</span>
//             </div>
//             <p className="text-gray-400 mb-4">
//               Empowering the youth through faith, community, and service. Join us in our mission to spread love and hope.
//             </p>
//             <div className="flex space-x-4">
//               <SocialIcon href="#" icon="F" platform="Facebook" />
//               <SocialIcon href="#" icon="T" platform="Twitter" />
//               <SocialIcon href="#" icon="I" platform="Instagram" />
//               <SocialIcon href="#" icon="Y" platform="YouTube" />
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <FooterLink href="/about" text="About Us" />
//               <FooterLink href="/events" text="Events" />
//               <FooterLink href="/ministries" text="Ministries" />
//               <FooterLink href="/sermons" text="Sermons" />
//               <FooterLink href="/blog" text="Blog" />
//               <FooterLink href="/gallery" text="Gallery" />
//             </ul>
//           </div>

//           {/* Ministries */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Ministries</h3>
//             <ul className="space-y-2">
//               <FooterLink href="/youth" text="Youth Ministry" />
//               <FooterLink href="/children" text="Children's Ministry" />
//               <FooterLink href="/worship" text="Worship Team" />
//               <FooterLink href="/outreach" text="Community Outreach" />
//               <FooterLink href="/missions" text="Missions" />
//               <FooterLink href="/prayer" text="Prayer Group" />
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
//             <div className="space-y-3">
//               <ContactItem 
//                 icon="📍" 
//                 text="123 Church Street, City, State 12345" 
//               />
//               <ContactItem 
//                 icon="📞" 
//                 text="+1 (555) 123-4567" 
//               />
//               <ContactItem 
//                 icon="✉️" 
//                 text="info@anya.org" 
//               />
//               <ContactItem 
//                 icon="🕒" 
//                 text="Service Times: Sat 9:30 AM & 11:00 AM" 
//               />
//             </div>
            
//             {/* Newsletter Signup */}
//             <div className="mt-6">
//               <h4 className="font-semibold mb-2">Stay Updated</h4>
//               <div className="flex">
//                 <input 
//                   type="email" 
//                   placeholder="Enter your email" 
//                   className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:border-blue-500 text-sm"
//                 />
//                 <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r-lg text-sm font-medium transition-colors">
//                   Join
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-800">
//         <div className="container mx-auto px-4 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="text-gray-400 text-sm">
//               © {new Date().getFullYear()} Adventist National Youth Association. All rights reserved.
//             </div>
//             <div className="flex space-x-6 mt-4 md:mt-0">
//               <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Privacy Policy
//               </Link>
//               <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Terms of Service
//               </Link>
//               <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// // Social Icon Component
// function SocialIcon({ href, icon, platform }: { href: string; icon: string; platform: string }) {
//   return (
//     <a 
//       href={href} 
//       className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors duration-200"
//       aria-label={platform}
//     >
//       <span className="font-semibold">{icon}</span>
//     </a>
//   )
// }

// // Footer Link Component
// function FooterLink({ href, text }: { href: string; text: string }) {
//   return (
//     <li>
//       <Link 
//         href={href} 
//         className="text-gray-400 hover:text-white transition-colors duration-200 block py-1"
//       >
//         {text}
//       </Link>
//     </li>
//   )
// }

// // Contact Item Component
// function ContactItem({ icon, text }: { icon: string; text: string }) {
//   return (
//     <div className="flex items-start space-x-3">
//       <span className="text-gray-400 mt-0.5">{icon}</span>
//       <span className="text-gray-400 text-sm">{text}</span>
//     </div>
//   )
// }