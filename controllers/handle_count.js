var lib = require('./../lib/lib')

module.exports = {
    resetCount: function (req, res) {
        lib.reset();
        res.json({ status: 'Successful', result: 'Reset' });
    },
    getCount: function (req, res) {
        var re = lib.count();
        res.json({ status: 'Successful', result: re });
    }
}