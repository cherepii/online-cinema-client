/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  optimizeFonts: false,
  env: {
    APP_URL: process.env.REACT_APP_URL,
    APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
    APP_NODE: process.env.REACT_APP_NODE
  },

  async rewrites(){
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*'
      },
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:5000/uploads/:path*'
      }
    ]
  }
}

module.exports = nextConfig
