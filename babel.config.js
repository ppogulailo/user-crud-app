const babelJest = require('babel-jest');
const esModules = ['lodash-es', 'axios'].join('|')

module.exports = babelJest.createTransformer({
    presets: ['my-custom-preset'],
    transform: {
        [`^(${esModules}).+\\.js$`]: 'babel-jest',
    },
    transformIgnorePatterns: [`node_modules/(?!(${esModules}))`],
});
