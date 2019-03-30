const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        ie: 11
      }
    }
  ]
];

module.exports = {
  presets,
  plugins: ['@babel/plugin-syntax-dynamic-import']
};
