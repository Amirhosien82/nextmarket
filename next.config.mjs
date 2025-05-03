/** @type {import('next').NextConfig} */
const nextConfig = {
  //https://dkstatics-public.digikala.com/digikala-products/ece99f8a469b8f9a3ebfa1e93cfda0e220014ca9_1654694267.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "roti-preview.taymakz.ir",
        pathname: "/assets/images/**",
      },
      {
        protocol: "https",
        hostname: "dkstatics-public.digikala.com",
        pathname: "/digikala-products/**",
      },
    ],
  },
};

export default nextConfig;
