window.taFoodtrucks = function () {
    return {
        initialized: false,
        empty: false,
        dates: [],
        default: {
            today: 'Today',
            tomorrow: 'Tomorrow',
            locale: 'en-US',
            seperator: ' - ',
            suffix: '',
        },
        init(endpoint = '', options) {
            if (typeof options !== 'undefined') {
                if (typeof options !== 'object' || options instanceof Array) {
                    console.warn('Options are in wrong type - should be object - default options been used')
                }
                for (let [key, value] of Object.entries(options)) {
                    this.default[key] = value
                }
            }
            if (endpoint === '') {
                console.error('No endpoint has been defined')
                return false
            }

            fetch(endpoint)
                .then((response) => response.json())
                .then((json) => {
                    if (json.result === 0) {
                        this.empty = true
                        return false
                    }
                    this.dates = json.result

                    // set foodtruck script to initialized
                    this.initialized = true
                })
                .catch((error) => {
                    console.warn(error)
                })
        },
        getStartTime(index) {
            const date = new Date(this.dates[index].date.start.date)
            return date.toLocaleTimeString(this.default.locale, {
                timeZone: this.dates[index].date.start.timezone,
                hour: '2-digit',
                minute: '2-digit',
            })
        },
        getEndTime(index) {
            const time = new Date(this.dates[index].date.end.date)
            return time.toLocaleTimeString(this.default.locale, {
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
                seperator = this.default.seperator
            }
            if (suffix === null) {
                suffix = this.default.suffix
            }
            if (suffix !== '') {
                suffix = ' ' + suffix
            }
            const start_string = start.toLocaleTimeString(this.default.locale, options)
            if (this.hasDifferentTimezone(index)) {
                options.timeZoneName = 'short'
                suffix = ''
            }
            const end_string = end.toLocaleTimeString(this.default.locale, options)
            return start_string + seperator + end_string + suffix
        },
        hasDifferentTimezone(index) {
            const remote_date = new Date(this.dates[index].date.start.date)
            const remote_string = remote_date.toLocaleString(this.default.locale, {
                timeZone: this.dates[index].date.start.timezone,
                timeZoneName: 'short',
            })
            const local_date = new Date(this.dates[index].date.start.date)
            const locale_string = local_date.toLocaleString(this.default.locale, {
                timeZoneName: 'short',
            })
            return remote_string !== locale_string
        },
        getTimezone(index) {
            if (!this.hasDifferentTimezone(index)) {
                return ''
            }
            const remote_date = new Date(this.dates[index].date.start.date)
            const remote_string = remote_date.toLocaleString(this.default.locale, {
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
                return time.toLocaleString(this.default.locale, options)
            }
            if (time.getDate() === today.getDate()) {
                return this.default.today
            }
            if (time.getDate() === tomorrow.getDate()) {
                return this.default.tomorrow
            }
            return time.toLocaleString(this.default.locale, options)
        },
        getDay(index) {
            const time = new Date(this.dates[index].date.start.date)
            return time.toLocaleString(this.default.locale, {
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
