const mongoose = require('mongoose');

const franAuthSchema = mongoose.Schema({
    FranchiseCode: {
        type: String
    },

    Password: {
        type: String
    }
});

module.exports = mongoose.model('FranchiseAuth',franAuthSchema);