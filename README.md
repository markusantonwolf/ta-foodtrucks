<p align="center">
  <img src="./public/img/logo-ta-foodtrucks.png" width="400px" />
</p>

# TA-Foodtruck

TA-Foodtrucks uses the Craftplaces Api demo data to show the next food truck and street food
dates in your area. You can customize the endpoints to get all dates for a specific vendor,
for a specific city or just for a location you are interested in.

TA-Foodtrucks is 100% customizable and has endless animation options. You can use
TA-Foodtrucks as a stand-alone version as well as a part of your Alpine JS and Tailwind CSS
project. TA-Foodtrucks is designed to fit in every project, in every grid and in every
flexbox so please try it out and if you have some feedback - leave me a message:
@markusantonwolf / Twitter.

## Demo

[REALWORLD](https://api.craftplaces.com/en/benefits)

You can see a real world example on this page: <https://api.craftplaces.com/en/benefits>

## Features

-   Supports loading animation
-   Locale support for time, date and numbers
-   Translations for relative dates
-   Timezone support
-   Weekday support - relative and absolute
-   Error messages as template customizable
-   All options are customizable!!!
-   Small file size JS + CSS: 7.8 kByte
-   Alpine JS + TA-Foodtrucks bundle size: 30.4 kByte
-   Use of Alpine JS and Tailwind CSS

## CDN

### TA-Foodtrucks

```html
<script src="https://cdn.jsdelivr.net/gh/markusantonwolf/ta-foodtrucks@latest/dist/scripts/ta-foodtrucks.min.js"></script>
```

### Alpine JS + TA-Foodtrucks

```html
<script
    src="https://cdn.jsdelivr.net/gh/markusantonwolf/ta-foodtrucks@latest/dist/scripts/alpine-ta-foodtrucks.min.js"
    defer
></script>
```

## Installation

### 1. Install the Tailwind CSS Custom Color Palette plugin:

```bash
# Install using npm
npm install --save-dev @markusantonwolf/ta-foodtrucks

# Install using yarn
yarn add -D @markusantonwolf/ta-foodtrucks
```

### 2. Add it to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
    // ...
    plugins: [require('@markusantonwolf/ta-foodtrucks')],
    // ...
}
```

### 3. Use it > 🌮

## Options

### All options you can define

You can define all options as data attributes - like this example.

```html
<div
    class="ta-foodtrucks"
    x-data="taFoodtrucks()"
    x-init="init()"
    x-cloak
    data-endpoint="https://api.craftplaces.com/api/v1/dip/location/twodays"
    data-locale="en-US"
    data-min-height="10rem"
    data-duration="1000"
    data-today="Today"
    data-tomorrow="Tomorrow"
    data-seperator=" - "
    data-suffix=""
>
</div>
```

Alternativly you can define all options as an object inside the init() function - like this example.

```javascript
init({
    
    // define your Craftplaces API endpoint
    endpoint: 'https://api.craftplaces.com/api/v1/dip/location/twodays',
    
    // define a translation for the relative date
    today: 'Today',

    // define a translation for the relative date
    tomorrow: 'Tomorrow',

    // define a locale for the visitor - shows the right dates and numbers
    locale: 'en-US',

    // seperator between start and end time
    seperator: ' - ',

    // suffix after end time
    suffix: '',
})
```

## Functions and data

```javascript

    // Gives you the information if the data is valid and can be used.
    initialized: false,

    // Gives you the information if the data is loading.
    loading: false,

    // Gives you the information if there are dates to show.
    has_dates: false,

    //  Gives you the information if there was an error while fetching the data from the Craftplaces API.
    error: false,

    //  Gives you all dates provided by the Craftplaces API.
    dates: [],

    // get the start time for the index - dates[index]
    getStartTime(index)

    // get the end time for the index - dates[index]
    getEndTime(index)

    // get the start and end time for the index - dates[index] - seperator and suffix
    // will be default if there is no definition in the function call
    getTime(index, seperator = null, suffix = null)

    // get the timezone for this index - dates[index]
    getTimezone(index)

    // get the weekday and define if relative or not
    getWeekday(index, relative = false)

    // get locale day for the index - dates[index]
    getDay(index)

    // get street, number and city for the index - dates[index]
    getAddress(index)

    // get what3words link for the index - dates[index]
    getWhat3WordsLink(index)

    // get google maps link for the index - dates[index]
    getGoogleMapsLink(index)

```

In the following example you can see all available options (default values) for the TA-Foodtrucks plugin for Tailwind CSS. **To add your own configuration add ```taFoodtrucks```to ```theme```and ```variants```.** Your new settings will be merged with the default settings. To change the plugin behaviour in terms of how it adds the new classes as utilities you can add these options as objects to the default function.

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
        taFoodtrucks: ["responsive"], // empty the array if you don't need a responsive variant
        // ...
    },
    // ...
    plugins: [require('@markusantonwolf/ta-foodtrucks')],
    // ...
}
```

## All TA StyledPlugins

-   [TA-Gallery](https://github.com/markusantonwolf/ta-gallery) - An image gallery with endless animation options.
-   [TA-Pagination](https://github.com/markusantonwolf/ta-pagination) - A content pagination solution.
-   [TA-Youtube](https://github.com/markusantonwolf/ta-youtube) - A YouTube video wrapper with auto playback and aspect ratio for the video player.
-   [TA-Analytics](https://github.com/markusantonwolf/ta-analytics) - A plugin for every website that needs to have an easy and customizable Google Analytics “blocker”.
-   [TA-Foodtrucks](https://github.com/markusantonwolf/ta-foodtrucks) - A plugin to show the next food truck and street food dates in your area.

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

<img src="./public/img/logo-ta-styled-plugins.png" width="160px" style="display:block;padding-top:4rem;" />
