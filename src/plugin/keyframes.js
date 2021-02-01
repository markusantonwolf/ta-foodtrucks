module.exports = () => {
    var new_keyframes = {};

    new_keyframes['@keyframes ta-foodtrucks-loading-out'] = {
        from: {
            opacity: '1',
            transform: 'scale(1)',
        },
        to: {
            opacity: '0',
            transform: 'scale(0.9)',
        },
    };

    return new_keyframes;
};
