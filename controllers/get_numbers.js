var lib = require('./../lib/lib');

module.exports = {
    random: function(req, res){
        F = lib.get();
        res.json({value: F});
    }
}