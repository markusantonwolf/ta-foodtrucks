const plugin = require('tailwindcss/plugin')
const fs = require('fs')
const _ = require('lodash')
const fnc = require('./functions')
const utilities = require('./utilities')
const keyframes = require('./keyframes')

const ta_config_defaults = {
    debug: false,
    export: false,
}

const ta_plugin_defaults = {
    variants: ['responsive'],
    respectPrefix: false,
    respectImportant: true,
}

if (process.env.NODE_ENV === 'test') {
    console.info('utilities', utilities(ta_config_defaults))
    console.info('keyframes', keyframes())
}

module.exports = plugin.withOptions((options = {}) => {
    return function ({ addComponents, theme, variants }) {
        const ta_config = _.defaultsDeep({}, theme('taFoodtrucks'), ta_config_defaults)
        const ta_plugin = _.defaultsDeep(options, { variants: variants('taFoodtrucks') }, ta_plugin_defaults)

        const new_utilities = {}
        const new_keyframes = {}

        _.merge(new_utilities, utilities(ta_config))
        _.merge(new_keyframes, keyframes())

        if (ta_config.debug === true) {
            console.info(new_utilities)
            console.info(new_keyframes)
        }
        if (ta_config.export === true) {
            fs.mkdirSync('./dist/styles', { recursive: true })
            fs.writeFile(
                './dist/styles/ta-foodtrucks-utilities.css',
                fnc.flattenObject(new_utilities),
                {
                    encoding: 'utf8',
                    flag: 'w+',
                    mode: 0o666,
                },
                function (err) {
                    if (err) {
                        return console.log(err)
                    }
                }
            )
            fs.writeFile(
                './dist/styles/ta-foodtrucks-keyframes.css',
                fnc.flattenObject(new_keyframes),
                {
                    encoding: 'utf8',
                    flag: 'w+',
                    mode: 0o666,
                },
                function (err) {
                    if (err) {
                        return console.log(err)
                    }
                }
            )
        }

        addComponents(new_utilities, ta_plugin)
        addComponents(new_keyframes, {
            variants: [],
            respectPrefix: ta_plugin.respectPrefix,
            respectImportant: ta_plugin.respectImportant,
        })
    }
})
