/** @type {import('next').NextConfig} */
const withAntdLess = require('next-plugin-antd-less');
const path = require('path');
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
module.exports = withAntdLess({
  modifyVars: {
    '@primary-color': '#f74a49'
  },
  lessVarsFilePathAppendToEndOfContent: false,
  cssLoaderOptions: {},
  ...nextConfig,
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname),
      '@/components': path.resolve(__dirname, 'components'),
      '@/styles': path.resolve(__dirname, 'styles'),
      '@/static': path.resolve(__dirname, 'static'),
    }
    return config;
  },
  future: {
    // if you use webpack5
    webpack5: true,
  },
});
