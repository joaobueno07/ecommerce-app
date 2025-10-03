/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    // definindo o placehold como um dominio seguro na aplicação
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
