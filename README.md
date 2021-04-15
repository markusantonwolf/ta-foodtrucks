<p align="center">
  <img src="./public/img/logo-ta-foodtrucks.png" width="400px" />
</p>

# **TA-Foodtrucks** - food truck and street food dates

**TA-Foodtrucks is a Alpine JS based plugin for adding the latest food truck and street food dates to your website. This plugin is designed for every [Craftplaces API](https://api.craftplaces.com/) endpoint.**

## Demos, Documentation and Examples

[Documentation](https://ta-styled-plugins.com/ta-foodtrucks/)

[Getting started](https://ta-styled-plugins.com/ta-foodtrucks/getting-started/)

[Examples](https://ta-styled-plugins.com/ta-foodtrucks/examples/)

[Configuration](https://ta-styled-plugins.com/ta-foodtrucks/configuration/)

[Tailwind CSS plugin](https://ta-styled-plugins.com/ta-foodtrucks/tailwind-css-plugin/)

## Features

-   Reliable data - Food trucks keeping their schedule up to date in Craftplaces Business
-   All Endpoints supported - You can use all Endpoint types of the Craftplaces API
-   Easy to use - Enjoy the deliciousness of street food in your area
-   Based on Alpine JS - Small footprint and Vue JS inspired, like Tailwind for JavaScript
-   100% Tailwind CSS - Rapidly build modern websites without leaving your HTML

## Install

**From npm:** Install the package.

```bash

# Install using npm

npm install --save-dev @markusantonwolf/ta-foodtrucks

# Install using yarn

yarn add -D @markusantonwolf/ta-foodtrucks
```

**Inside tailwind.config.js:** Add the plugin to your tailwind css config file.

```js
// tailwind.config.js
module.exports = {
    // ...
    theme: {
        // ...
        taFoodtrucks: {
            debug: false, // shows the new component classes in the console while building
            export: false, // writes the new component classes into files ./public/utilities.css & /public/keyframes.css
        },
        // ...
    },
    variants: {
        // ...
        taFoodtrucks: ['responsive'], // empty the array if you don't need a responsive variant
        // ...
    },
    // ...
    plugins: [require('@markusantonwolf/ta-foodtrucks')],
    // ...
}
```

## More TA-Styled-Plugins

-   [TA-Styled-Plugins](https://ta-styled-plugins.com/) - Explore all Tailwind CSS and Alpine JS styled plugins and learn how to enhance your website fast and easy.

## Local development

```
// To install dev dependencies run:

npm install

// To start the development server run and go to http://localhost:9999/:

npm run serve

// To make a development build run:

npm run develop

// To make a production build run:

npm run build
```

## Licence

TA Foodtrucks is released under the [MIT license](https://github.com/markusantonwolf/ta-foodtrucks/blob/master/licence.md) & supports modern environments.

## Copyright

© 2021 Markus A. Wolf
<https://www.markusantonwolf.com>

<p>
<img src="./public/img/logo-ta-styled-plugins.png" width="160px" style="display:block;padding-top:4rem;" />
</p>
