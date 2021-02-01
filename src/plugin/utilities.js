const fnc = require('./functions');

module.exports = (config, e) => {
    var new_utilities = {};

    new_utilities['.ta-foodtrucks'] = {
        '--ta-foodtrucks-object-fit': 'cover',
        '--ta-foodtrucks-anim-duration': '1000',
        position: 'relative',
        width: '100%',
        minHeight: 'var(--ta-foodtrucks-min-height)',
        textAlign: 'left',
        perspective: '1000px',
        perspectiveOrigin: 'center center',
    };

    new_utilities['.ta-foodtrucks-loading'] = {
        ...fnc.getInset(),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        animationTimingFunction: 'ease-in-out',
        animationFillMode: 'both',
        animationDuration: 'calc(var(--ta-foodtrucks-anim-duration) * 1ms)',
        transformOrigin: 'center center',
        backfaceVisibility: 'hidden',
    };

    new_utilities['.ta-foodtrucks-loading-out'] = {
        animationName: 'ta-foodtrucks-loading-out',
        animationDelay: '0s',
    };

    new_utilities['.ta-foodtrucks-error'] = {
        ...fnc.getInset(),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '1',
    };

    new_utilities['.ta-foodtrucks-logo'] = {
        position: 'relative',
        overflow: 'hidden',
        flexShrink: 0,
    };

    new_utilities['.ta-foodtrucks-logo-image'] = {
        ...fnc.getInset(),
        objectFit: 'var(--ta-foodtrucks-object-fit)',
    };

    new_utilities['.ta-foodtrucks-details'] = {
        flexGrow: 1,
        flexShrink: 1,
    };

    return new_utilities;
};
