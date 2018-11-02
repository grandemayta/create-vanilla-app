# WebComponents Scaffolding
[![NPM version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=gh&type=6&v=1.0.0)](http://badge.fury.io/js/badge-list)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![made-with-javascript-doc](https://img.shields.io/badge/Made%20with-Javascript-1f425f.svg)](https://www.sphinx-doc.org/)

Start to work with WebComponents. Everything that you need is ready to use.

## Launch the application

```sh
$ npm install
$ npm start
```

## Release in Production

```sh
$ npm run prod
```

## Tech Stack

### Libraries

- [@webcomponents/webcomponentsjs](https://github.com/webcomponents/webcomponentsjs)
- [core-js](https://github.com/zloirock/core-js)
- [Lit-element](https://github.com/Polymer/lit-element)

### Tools

- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Eslint](https://eslint.org/)

## Browsers support

- [x] Chrome
- [x] Firefox
- [x] Safari
- [x] Edge
- [x] IE11

## Polyfills
If the broswer don't support webcomponents, custom elements or es6 features like fetch and includes the polyfill script will add at runtime. Below you can find the features supported:

- Generics
    - Symbol
    - fetch
    - customElements

- Arrays
    - entries
    - from
    - findIndex
    - includes
    - keys
    - values

- Objects
    - assign
    - entries
    - values

- Strings
    - endsWith
    - includes
    - startsWith

## Todo

- [ ] Setup Unit Testing
- [ ] Setup E2E Testing

Keep calm and code!
<br>
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
