var capacitorDateRangePicker = (function (exports, core, jQuery_, moment_) {
    'use strict';

    function _interopNamespaceDefault(e) {
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n.default = e;
        return Object.freeze(n);
    }

    var jQuery___namespace = /*#__PURE__*/_interopNamespaceDefault(jQuery_);
    var moment___namespace = /*#__PURE__*/_interopNamespaceDefault(moment_);

    const DateRangePicker = core.registerPlugin('DateRangePicker', {
        web: () => Promise.resolve().then(function () { return web; }).then((m) => new m.DateRangePickerWeb()),
    });

    const $ = jQuery___namespace.default || jQuery___namespace;
    const moment = moment___namespace.default || moment___namespace;
    class DateRangePickerWeb extends core.WebPlugin {
        constructor() {
            super();
            this.loadRemoteStyles();
        }
        loadRemoteStyles() {
            if (!document.getElementById('daterangepicker-style')) {
                const link = document.createElement('link');
                link.id = 'daterangepicker-style';
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'https://cdn.jsdelivr.net/npm/daterangepicker/daterangepicker.css';
                document.head.appendChild(link);
            }
        }
        async open(options = {}) {
            return new Promise((resolve, reject) => {
                // Create hidden input
                const $input = $('<input type="text" style="display:none" />').appendTo('body');
                // Initialize daterangepicker
                $input.daterangepicker({
                    startDate: options.startDate || moment(),
                    endDate: options.endDate || moment(),
                    opens: options.opens || 'center',
                    drops: options.drops || 'down',
                    ranges: {
                        'Today': [moment(), moment()],
                        'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                        'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                        'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                        'This Month': [moment().startOf('month'), moment().endOf('month')],
                        'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                    }
                }, (start, end, label) => {
                    const result = {
                        startDate: start.format(options.format || 'YYYY-MM-DD'),
                        endDate: end.format(options.format || 'YYYY-MM-DD'),
                        label: label
                    };
                    resolve(result);
                    $input.remove();
                });
                // Show the picker
                const drp = $input.data('daterangepicker');
                if (drp) {
                    drp.show();
                }
                else {
                    reject("Could not initialize daterangepicker instance");
                }
                // Handle cancel
                $input.on('cancel.daterangepicker', () => {
                    $input.remove();
                    reject('User cancelled selection');
                });
            });
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        DateRangePickerWeb: DateRangePickerWeb
    });

    exports.DateRangePicker = DateRangePicker;

    return exports;

})({}, capacitorExports, jQuery_, moment_);
//# sourceMappingURL=plugin.js.map
