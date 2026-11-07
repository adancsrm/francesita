/** @type {import('next').NextConfig} */
const nextConfig = {
  // Un solo dominio oficial para Google: todo lo que llegue a
  // calcetasfrances.com (sin www) se redirige con 308 a la versión con www,
  // que es la que declaran el canonical, el sitemap y los datos estructurados.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "calcetasfrances.com" }],
        destination: "https://www.calcetasfrances.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
