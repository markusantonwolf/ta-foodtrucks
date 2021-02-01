"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

window.taFoodtrucks = function () {
  return {
    initialized: false,
    loading: true,
    has_dates: false,
    empty: false,
    dates: [],
    options: {
      endpoint: '',
      minHeight: '',
      duration: 1000,
      today: 'Today',
      tomorrow: 'Tomorrow',
      locale: 'de-DE',
      seperator: ' - ',
      suffix: ''
    },
    init: function init(options) {
      var _this = this;

      if (typeof options !== 'undefined') {
        if (_typeof(options) !== 'object' || options instanceof Array) {
          console.warn('TA-Foodtrucks: Options are in wrong type - should be object - options options been used');
        }

        for (var _i = 0, _Object$entries = Object.entries(options); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          this.options[key] = value;
        }
      } // checks if options are defined by data


      for (var _i2 = 0, _Object$entries2 = Object.entries(this.$el.dataset); _i2 < _Object$entries2.length; _i2++) {
        var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2),
            _key = _Object$entries2$_i[0],
            _value = _Object$entries2$_i[1];

        if (typeof this.options[_key] !== 'undefined') {
          this.options[_key] = _value;
        }
      }

      if (this.options.endpoint === '') {
        console.error('TA-Foodtrucks: No endpoint has been defined');
        return false;
      }

      if (this.options.minHeight !== '') {
        this.$el.style.setProperty('--ta-foodtrucks-min-height', this.options.minHeight);
      }

      this.$el.style.setProperty('--ta-foodtrucks-anim-duration', parseInt(this.options.duration));
      this.$watch('initialized', function (value) {
        if (value === true) {
          setTimeout(function () {
            _this.loading = false;
          }, parseInt(_this.options.duration));
        }
      });
      fetch(this.options.endpoint).then(function (response) {
        return response.json();
      }).then(function (json) {
        if (json.result.length === 0) {
          return;
        }

        _this.dates = json.result; // set foodtruck script to initialized

        _this.initialized = true;
        _this.has_dates = true;
      })["catch"](function (error) {
        console.warn(error);
      });
    },
    getStartTime: function getStartTime(index) {
      var date = new Date(this.dates[index].date.start.date);
      return date.toLocaleTimeString(this.options.locale, {
        timeZone: this.dates[index].date.start.timezone,
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    getEndTime: function getEndTime(index) {
      var time = new Date(this.dates[index].date.end.date);
      return time.toLocaleTimeString(this.options.locale, {
        timeZone: this.dates[index].date.end.timezone,
        hour: '2-digit',
        minute: '2-digit'
      });
    },
    getTime: function getTime(index) {
      var seperator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var suffix = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var start = new Date(this.dates[index].date.start.date);
      var end = new Date(this.dates[index].date.end.date);
      var options = {
        timeZone: this.dates[index].date.start.timezone,
        hour: '2-digit',
        minute: '2-digit'
      };

      if (seperator === null) {
        seperator = this.options.seperator;
      }

      if (suffix === null) {
        suffix = this.options.suffix;
      }

      if (suffix !== '') {
        suffix = ' ' + suffix;
      }

      var start_string = start.toLocaleTimeString(this.options.locale, options);

      if (this.hasDifferentTimezone(index)) {
        options.timeZoneName = 'short';
        suffix = '';
      }

      var end_string = end.toLocaleTimeString(this.options.locale, options);
      return start_string + seperator + end_string + suffix;
    },
    hasDifferentTimezone: function hasDifferentTimezone(index) {
      var remote_date = new Date(this.dates[index].date.start.date);
      var remote_string = remote_date.toLocaleString(this.options.locale, {
        timeZone: this.dates[index].date.start.timezone,
        timeZoneName: 'short'
      });
      var local_date = new Date(this.dates[index].date.start.date);
      var locale_string = local_date.toLocaleString(this.options.locale, {
        timeZoneName: 'short'
      });
      return remote_string !== locale_string;
    },
    getTimezone: function getTimezone(index) {
      if (!this.hasDifferentTimezone(index)) {
        return '';
      }

      var remote_date = new Date(this.dates[index].date.start.date);
      var remote_string = remote_date.toLocaleString(this.options.locale, {
        timeZone: this.dates[index].date.start.timezone,
        year: '2-digit',
        timeZoneName: 'short'
      });
      return remote_string.substring(4);
    },
    getWeekday: function getWeekday(index) {
      var relative = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var today = new Date();
      var tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      var time = new Date(this.dates[index].date.start.date);
      var options = {
        timeZone: this.dates[index].date.timezone,
        weekday: 'long'
      };

      if (relative !== true) {
        return time.toLocaleString(this.options.locale, options);
      }

      if (time.getDate() === today.getDate()) {
        return this.options.today;
      }

      if (time.getDate() === tomorrow.getDate()) {
        return this.options.tomorrow;
      }

      return time.toLocaleString(this.options.locale, options);
    },
    getDay: function getDay(index) {
      var time = new Date(this.dates[index].date.start.date);
      return time.toLocaleString(this.options.locale, {
        timeZone: this.dates[index].date.start.timezone,
        day: '2-digit',
        month: '2-digit',
        year: '2-digit'
      });
    },
    getAddress: function getAddress(index) {
      return this.dates[index].location.address.street + ' ' + this.dates[index].location.address.number + ', ' + this.dates[index].location.address.city;
    },
    getWhat3WordsLink: function getWhat3WordsLink(index) {
      return 'https://w3w.co/' + this.dates[index].location.position.what3words;
    },
    getGoogleMapsLink: function getGoogleMapsLink(index) {
      return 'https://www.google.com/maps/search/?api=1&query=' + this.dates[index].location.position.latitude + ',' + this.dates[index].location.position.longitude;
    }
  };
};