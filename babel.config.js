const browsers = {
  ie11: { ie : 11 },
  chrome: { browsers: ['last 2 Chrome versions'] }
};
const presets = (targets) => [
  [
    '@babel/preset-env',
    {
      targets
    }
  ]
];

module.exports = {
  presets: presets(browsers.chrome),
  env: {
    dev: {
      presets: presets(browsers.ie11)
    },
    prod: {
      presets: presets(browsers.ie11)
    }
  }
};
