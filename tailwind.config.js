module.exports = {
    purge: {
        enabled: false,
    },
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },
    theme: {
        taFoodtrucks: {
            export: true,
        },
        extend: {},
    },
    variants: {},
    plugins: [require('./src/plugin/index')],
}
