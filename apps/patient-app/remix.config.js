/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    /@quin\//,
    'remix-i18next',
    'accept-language-parser',
    'openapi-fetch',
  ],
  watchPaths: ['../../packages/corpus'],
  serverModuleFormat: 'esm',
  serverPlatform: 'node',
  appDirectory: 'app',
  asetsBuildDirectory: 'public/build',
  publicPath: '/build/',
  serverBuildPath: 'build/index.js',
}
