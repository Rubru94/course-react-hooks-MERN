// Node.js will expect Common.js-style modules for files that have a .cjs extension.

// eslint-disable-next-line no-undef
module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
};
