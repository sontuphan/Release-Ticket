var lib = require('./../lib/lib');
var hash = require('object-hash');

module.exports = {
    test: function(req, res) {
        console.time('1');
        for (var j = 0; j < 7; j++) {
            result = {};

            for (var i = 0; i < 1000000; i++) {
                value = lib.get();
                key = hash(value);

                // if (result[key]) {
                //     console.log('Fail');
                // }

                result[key] = value;
            }
            console.log(j, Object.keys(result).length);

        }
        console.timeEnd('1');
        res.json({ value: Object.keys(result).length });
    }
}