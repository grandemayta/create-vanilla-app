if (
  // OTHERS
  'Symbol' in window &&
  'fetch' in window &&
  'customElements' in window &&
  // ARRAYS
  'entries' in Array.prototype &&
  'from' in Array &&
  'findIndex' in Array.prototype &&
  'includes' in Array.prototype &&
  'keys' in Array.prototype &&
  'values' in Array.prototype &&
  // OBJECTS
  'assign' in Object &&
  'entries' in Object &&
  'values' in Object &&
  // STRINGS
  'endsWith' in String.prototype &&
  'includes' in String.prototype &&
  'startsWith' in String.prototype
) {
  require('./component');
} else {
  import(/* webpackChunkName: "polyfills" */ './polyfills').then(() => {
    require('./component');
  });
}
