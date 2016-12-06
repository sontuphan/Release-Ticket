var lib = require('./../lib/lib');
var hash = require('object-hash');

module.exports = {
    test: function(req, res) {
        console.time('1');
        for (var j = 0; j < 70; j++) {
            result = {};

            for (var i = 0; i < 100000; i++) {
                value = lib.get();
                key = hash(value);
                result[key] = value;
            }
            console.log(j, Object.keys(result).length);

        }
        console.timeEnd('1');
        res.json({ value: Object.keys(result).length });
    }
}