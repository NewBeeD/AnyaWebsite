// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */

//   images: {
//     domains: ["localhost"], 
//   },
// };

// export default nextConfig;




import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
