window.taFoodtrucks = () => {
    return {
        initialized: false,
        loading: true,
        has_dates: false,
        error: false,
        dates: [],
        options: {
            endpoint: '',
            minHeight: '',
            duration: 1000,
            today: 'Today',
            tomorrow: 'Tomorrow',
            locale: 'de-DE',
            seperator: ' - ',
            suffix: '',
        },
        init(options) {
            if (typeof options !== 'undefined') {
                if (typeof options !== 'object' || options instanceof Array) {
                    console.warn(
                        'TA-Foodtrucks: Options are in wrong type - should be object - options options been used'
                    )
                }
                for (let [key, value] of Object.entries(options)) {
                    this.options[key] = value
                }
            }

            // checks if options are defined by data
            for (let [key, value] of Object.entries(this.$el.dataset)) {
                if (typeof this.options[key] !== 'undefined') {
                    this.options[key] = value
                }
            }
            if (this.options.endpoint === '') {
                console.error('TA-Foodtrucks: No endpoint has been defined')
                return false
            }

            if (this.options.minHeight !== '') {
                this.$el.style.setProperty('--ta-foodtrucks-min-height', this.options.minHeight)
            }

            this.$el.style.setProperty('--ta-foodtrucks-anim-duration', parseInt(this.options.duration))

            this.$watch('initialized', (value) => {
                if (value === true) {
                    setTimeout(() => {
                        this.loading = false
                    }, parseInt(this.options.duration))
                }
            })

            fetch(this.options.endpoint)
                .then((response) => response.json())
                .then((json) => {
                    // set foodtruck script to initialized
                    this.initialized = true

                    // if no results end script
                    if (json.result.length === 0) {
                        return
                    }
                    this.dates = json.result
                    this.has_dates = true
                })
                .catch((error) => {
                    this.error = true
                    console.warn(error)
                })
        },
        getStartTime(index) {
            const date = new Date(this.dates[index].date.start.date)
            return date.toLocaleTimeString(this.options.locale, {
                timeZone: this.dates[index].date.start.timezone,
                hour: '2-digit',
                minute: '2-digit',
            })
        },
        getEndTime(index) {
            const time = new Date(this.dates[index].date.end.date)
            return time.toLocaleTimeString(this.options.locale, {
                timeZone: this.dates[index].date.end.timezone,
                hour: '2-digit',
                minute: '2-digit',
            })
        },
        getTime(index, seperator = null, suffix = null) {
            const start = new Date(this.dates[index].date.start.date)
            const end = new Date(this.dates[index].date.end.date)
            const options = {
                timeZone: this.dates[index].date.start.timezone,
                hour: '2-digit',
                minute: '2-digit',
            }
            if (seperator === null) {
                seperator = this.options.seperator
            }
            if (suffix === null) {
                suffix = this.options.suffix
            }
            if (suffix !== '') {
                suffix = ' ' + suffix
            }
            const start_string = start.toLocaleTimeString(this.options.locale, options)
            if (this.hasDifferentTimezone(index)) {
                options.timeZoneName = 'short'
                suffix = ''
            }
            const end_string = end.toLocaleTimeString(this.options.locale, options)
            return start_string + seperator + end_string + suffix
        },
        hasDifferentTimezone(index) {
            const remote_date = new Date(this.dates[index].date.start.date)
            const remote_string = remote_date.toLocaleString(this.options.locale, {
                timeZone: this.dates[index].date.start.timezone,
                timeZoneName: 'short',
            })
            const local_date = new Date(this.dates[index].date.start.date)
            const locale_string = local_date.toLocaleString(this.options.locale, {
                timeZoneName: 'short',
            })
            return remote_string !== locale_string
        },
        getTimezone(index) {
            if (!this.hasDifferentTimezone(index)) {
                return ''
            }
            const remote_date = new Date(this.dates[index].date.start.date)
            const remote_string = remote_date.toLocaleString(this.options.locale, {
                timeZone: this.dates[index].date.start.timezone,
                year: '2-digit',
                timeZoneName: 'short',
            })
            return remote_string.substring(4)
        },
        getWeekday(index, relative = false) {
            const today = new Date()
            const tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            const time = new Date(this.dates[index].date.start.date)
            const options = {
                timeZone: this.dates[index].date.timezone,
                weekday: 'long',
            }
            if (relative !== true) {
                return time.toLocaleString(this.options.locale, options)
            }
            if (time.getDate() === today.getDate()) {
                return this.options.today
            }
            if (time.getDate() === tomorrow.getDate()) {
                return this.options.tomorrow
            }
            return time.toLocaleString(this.options.locale, options)
        },
        getDay(index) {
            const time = new Date(this.dates[index].date.start.date)
            return time.toLocaleString(this.options.locale, {
                timeZone: this.dates[index].date.start.timezone,
                day: '2-digit',
                month: '2-digit',
                year: '2-digit',
            })
        },
        getAddress(index) {
            return (
                this.dates[index].location.address.street +
                ' ' +
                this.dates[index].location.address.number +
                ', ' +
                this.dates[index].location.address.city
            )
        },
        getWhat3WordsLink(index) {
            return 'https://w3w.co/' + this.dates[index].location.position.what3words
        },
        getGoogleMapsLink(index) {
            return (
                'https://www.google.com/maps/search/?api=1&query=' +
                this.dates[index].location.position.latitude +
                ',' +
                this.dates[index].location.position.longitude
            )
        },
    }
}
