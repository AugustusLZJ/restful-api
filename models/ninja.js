const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NinjaSchema = new Schema({
    name: {
        type: String,
        requred: [true, 'Name field is required']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false
    }
});

const NinjaModel = mongoose.model('ninja', NinjaSchema);

module.exports = NinjaModel;