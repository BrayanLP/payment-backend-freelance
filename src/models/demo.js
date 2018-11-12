const mongoose = require('mongoose');

const { Schema }  = mongoose;

const DemoSchema = new Schema({
    title : {type: String},
    description: String
})

module.exports = mongoose.model('Demo', DemoSchema);