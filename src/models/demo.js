const mongoose = require('mongoose');

const { Schema }  = mongoose;

const DemoSchema = new Schema({
    title : String ,
    description: String
})

module.exports = mongoose.model('Demo', DemoSchema);