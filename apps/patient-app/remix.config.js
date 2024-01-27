/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  serverDependenciesToBundle: [
    /^@quin\/corpus/,
    'remix-i18next',
    'accept-language-parser',
  ],
  watchPaths: ['../../packages/corpus'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
}
