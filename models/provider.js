const mongoose = require('mongoose');

const objectSchema = {
    name: String,
    cif: String,
    direction: String,
}

const providerSchema = mongoose.Schema(objectSchema);

const Provider = mongoose.model('Provider', providerSchema);

module.exports = Provider;