# WebComponents CLI
[![NPM version](https://d25lcipzij17d.cloudfront.net/badge.svg?id=gh&type=6&v=0.0.5)](http://badge.fury.io/js/badge-list)
[![Open Source Love](https://badges.frapsoft.com/os/mit/mit.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
[![made-with-javascript-doc](https://img.shields.io/badge/Made%20with-Javascript-1f425f.svg)](https://www.sphinx-doc.org/)

WebComponents CLI allow you to develop WebComponents from scratch with LitElement and Typescript.

## Install

```sh
npm install -g @grandemayta/webcomponents-cli
```

## Create a Project

```sh
wc-cli <name-of-your-project>
```

## Getting Started
Launch the following commands to start the application:

```sh
npm start
```

## Scripts:

| Command | Description |
| ------ | ------ |
| npm start | Lift the application in local mode |
| npm run dev | Generate a build in dev mode |
| npm run prod | Generate a build in prod mode |
| npm run dev:legacy | Generate a build in dev mode to support legacy browsers |
| npm run prod:legacy | Generate a build in prod mode to support legacy browsers |

## Integration
Build tasks will create the following output:

#### Build for modern browsers:

    ├── dist/
        ├── vendor.min.js
        ├── bundle.min.js

#### Build with support for legacy browsers:

    ├── dist/
        ├── polyfills.min.js
        ├── webcomponents-loader.js
        ├── vendor.min.js
        ├── bundle.min.js
        ├── bundles/                               # These scripts will load at runtime
            ├── webcomponents-ce.js
            ├── webcomponents-sd-ce-pf.js
            ├── webcomponents-sd-ce.js
            ├── webcomponents-sd.js

#### Html example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Components Example Integration</title>
</head>
<body>

    <app-greetings fullname="Charlotte"></app-greetings>

    <!-- If you want support legacy browser just remove this comment
    <script src="polyfills.min.js" nomodule></script>
    <script src="webcomponents-loader.js"></script>
    -->
    <script src="vendor.min.js"></script>
    <script src="bundle.min.js"></script>
</body>
</html>
```

## Polyfills
We support the following features:

- Generics
    - Symbol
    - fetch
    - Promise

- Arrays
    - entries
    - from
    - find
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

## Browsers support

:white_check_mark: Chrome
<br/>
:white_check_mark: Firefox
<br/>
:white_check_mark: Safari
<br/>
:white_check_mark: Edge
<br/>
:white_check_mark: IE11

**NB: In order to support legacy browsers like IE11 and Safari 9 you have to launch the following script:**

```sh
npm run prod:legacy
```

## Todo

- [ ] Improve the documentation
- [ ] Setup Unit Testing
- [ ] Setup E2E Testing

Keep calm and code!
<br>
[![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg?v=102)](https://github.com/ellerbrock/open-source-badge/)
