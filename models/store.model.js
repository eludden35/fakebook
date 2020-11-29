const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StoreSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: [true, "Requires Car Year"],
    },
    make: {
        type: String,
        required: [true, ""],
    },
    model: {
        type: String,
        required: [true]
    },
    trim: {
        type: String,
        required: [true]
    },
    price: {
        type: Number,
        required: [true]
    },
    mileage: {
        type: Number,
        required: [true]
    },
    topFeatures: {
        type: Object,
        required: [true],
        properties: {
            featureOne: {
                type: String
            },
            featureTwo: {
                type: String
            },
            featureThr: {
                type: String
            }
        }
    }


}, {timestamps: true})

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;