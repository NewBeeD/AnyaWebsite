// // components/RandomBibleVerseEnhanced.js
// 'use client';

// import { useState } from 'react';
// import { useBibleAPI } from '@/hooks/BibleTextComponent/BibleTextApi'

// const RandomBibleVerseEnhanced = () => {
//   const { verse, loading, error, refetch } = useBibleAPI();
//   const [isCopied, setIsCopied] = useState(false);

//   const copyToClipboard = async () => {
//     if (!verse) return;
    
//     const verseText = `"${verse.text}" - ${verse.book} (${verse.version})`;
    
//     try {
//       await navigator.clipboard.writeText(verseText);
//       setIsCopied(true);
//       setTimeout(() => setIsCopied(false), 2000);
//     } catch (err) {
//       console.error('Failed to copy text: ', err);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="max-w-full mx-auto p-8 bg-white rounded-xl shadow-lg border border-gray-200">
//         <div className="animate-pulse space-y-4">
//           <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto mb-6"></div>
//           <div className="space-y-3">
//             <div className="h-6 bg-gray-200 rounded w-4/5 mx-auto"></div>
//             <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
//             <div className="h-6 bg-gray-200 rounded w-5/6 mx-auto"></div>
//           </div>
//           <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto mt-6"></div>
//           <div className="h-12 bg-gray-200 rounded w-48 mx-auto mt-6"></div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-full mx-auto pt-8! pb-4! px-4! bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300">
//       {/* Error Warning */}
//       {error && (
//         <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
//           <div className="flex items-center">
//             <div className="text-yellow-600 mr-2">⚠️</div>
//             <p className="text-yellow-800 text-sm">{error}</p>
//           </div>
//         </div>
//       )}

//       {/* Verse Text */}
//       <div className="mb-6!">
//         <p className="text-lg text-gray-800 leading-relaxed italic text-center font-serif">
//           {verse?.text}
//         </p>
//       </div>

//       {/* Verse Reference */}
//       <div className="text-center mb-8! mt-4!">
//         <p className="text-[14px] font-semibold text-gray-700 font-serif">
//           {verse?.book}
//         </p>
//         <p className="text-sm text-gray-500 mt-2">{verse?.version}</p>
//       </div>

//       {/* Action Buttons */}
//       <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//         <button
//           onClick={refetch}
//           disabled={loading}
//           className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-w-[200px]"
//         >
//           {loading ? (
//             <>
//               <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                 <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                 <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
//               </svg>
//               Loading...
//             </>
//           ) : (
//             'Get Another Verse'
//           )}
//         </button>

//         <button
//           onClick={copyToClipboard}
//           disabled={!verse}
//           className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 min-w-[200px]"
//         >
//           {isCopied ? (
//             <>
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
//               </svg>
//               Copied!
//             </>
//           ) : (
//             <>
//               <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
//               </svg>
//               Copy
//             </>
//           )}
//         </button>
//       </div>

//       {/* API Status */}
//       <div className="mt-6 pt-6! border-t border-gray-100">
//         <div className="flex items-center justify-center text-sm text-gray-500">
//           <div className={`w-2 h-2 rounded-full mr-2 ${error ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
//           <span>{error ? 'Using fallback verse' : 'Live from Bible API'}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RandomBibleVerseEnhanced;


// components/BibleVerseShowcase.tsx
'use client';

import { useState } from 'react';
import { useBibleAPI } from '@/hooks/BibleTextComponent/BibleTextApi';

export default function BibleVerseShowcase() {
  const { verse, loading, error, refetch } = useBibleAPI();
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = async () => {
    if (!verse) return;
    
    const verseText = `"${verse.text}" - ${verse.book} (${verse.version})`;
    
    try {
      await navigator.clipboard.writeText(verseText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <section className="py-16! bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto! px-4! max-w-4xl">
        
        {/* Section Header */}
        <div className="text-center mb-12!">
          <h2 className="text-3xl font-bold text-gray-900 mb-4!">
            Daily Inspiration
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto!">
            Refresh your spirit with God's Word. A new verse awaits you each day.
          </p>
        </div>

        {/* Verse Card */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8! hover:shadow-xl transition-all duration-300">
          
          {/* Loading State */}
          {loading && (
            <div className="animate-pulse space-y-4!">
              <div className="h-4 bg-gray-200 rounded w-1/4 mx-auto! mb-6!"></div>
              <div className="space-y-3!">
                <div className="h-6 bg-gray-200 rounded w-4/5 mx-auto"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto"></div>
                <div className="h-6 bg-gray-200 rounded w-5/6 mx-auto"></div>
              </div>
              <div className="h-4 bg-gray-200 rounded w-1/3 mx-auto! mt-6!"></div>
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="mb-6! p-4! bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center justify-center">
                <div className="text-yellow-600 mr-2!">⚠️</div>
                <p className="text-yellow-800 text-sm">{error}</p>
              </div>
            </div>
          )}

          {/* Verse Content */}
          {!loading && verse && (
            <>
              {/* Verse Text */}
              <div className="text-center mb-6!">
                <div className="text-4xl mb-4">📖</div>
                <p className="text-xl text-gray-800 leading-relaxed italic font-serif mb-4!">
                  "{verse.text}"
                </p>
                <div className="text-gray-700 font-semibold">
                  {verse.book}
                </div>
                <div className="text-gray-500 text-sm mt-1!">
                  {verse.version}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4! justify-center items-center">
                <button
                  onClick={refetch}
                  disabled={loading}
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3! px-8! rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 min-w-[200px]"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1! mr-3! h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading...
                    </>
                  ) : (
                    <>
                      Get Another Verse
                      <svg className="w-5 h-5 ml-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </>
                  )}
                </button>

                <button
                  onClick={copyToClipboard}
                  disabled={!verse}
                  className="inline-flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3! px-8! rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 min-w-[200px]"
                >
                  {isCopied ? (
                    <>
                      <svg className="w-5 h-5 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      Copied!
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 mr-2!" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
                      </svg>
                      Copy Verse
                    </>
                  )}
                </button>
              </div>
            </>
          )}

          {/* API Status */}
          <div className="mt-6! pt-6! border-t border-gray-100">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <div className={`w-2 h-2 rounded-full mr-2! ${error ? 'bg-yellow-500' : 'bg-green-500'}`}></div>
              <span>{error ? 'Using fallback verse' : 'Live from Bible API'}</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8!">
          <button className="text-blue-600 hover:text-blue-700 font-semibold transition-colors">
            Explore More Bible Resources →
          </button>
        </div>

      </div>
    </section>
  );
}