const mongoose = require('mongoose');

const PurchaseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    cost: {
        type: Number,
        required: true
    },
    method: {
        type: String,
        required: true
    }
});

const Purchase = mongoose.model('Purchase', PurchaseSchema);

module.exports = Purchase;