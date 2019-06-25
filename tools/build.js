/* eslint-disable no-console */
// More info on Webpack's Node API here: https://webpack.github.io/docs/node.js-api.html
const webpack = require('webpack');
const colors = require('colors');
const webpackConfig = require('../webpack.config.prod');

process.env.NODE_ENV = 'production';

console.log(colors.blue('Generating minified bundle for production via Webpack. This will take a moment...'));

webpack(webpackConfig()).run((err, stats) => {
  if (err || stats.hasErrors()) {
    console.log(err ? err.bold.red : stats.toString({ colors: true }));
    process.exit(err ? 1 : 2);
  }

  if (stats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    console.log(stats.toString({ colors: true }));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we got this far, the build succeeded.
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);

  return 0;
});
