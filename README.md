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

## Options

```javascript
// endpoint url - based on Craftplaces Api service
init('https://api.craftplaces.com/api/v1/dip/location/twodays', {
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

    {
        // if plugin is initialized
        initialized: false,

        // if there are no dates available
        empty: false,
    }

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

## More TA StyledPlugins

-   [TA-Gallery](https://github.com/markusantonwolf/ta-gallery) - An image gallery with endless animation options.
-   [TA-Pagination](https://github.com/markusantonwolf/ta-pagination) - A content pagination solution.
-   [TA-Youtube](https://github.com/markusantonwolf/ta-youtube) - A YouTube video wrapper with auto playback and aspect ratio for the video player.
-   [TA-Analytics](https://github.com/markusantonwolf/ta-analytics) - A plugin for every website that needs to have an easy and customizable Google Analytics “blocker”.

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

© 2020 Markus A. Wolf
<https://www.markusantonwolf.com>

<img src="./public/img/logo-ta-styled-plugins.png" width="160px" style="display:block;padding-top:4rem;" />
