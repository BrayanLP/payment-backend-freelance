const mongoose = require('mongoose');

const { Schema } = mongoose;

const ProjectSchema = new Schema ({
    name: { type: String, required: true},
    description: { type: String},
    totalPrice: { type: Number, required: true},
    prePayment: { type: Number, required: true},
    claim: {type: Number },
    // userId: {type: Schema.Types.ObjectId, ref: 'User'},
    type: {type: String, required: true},
    prePaymentDate: {type: Date, required: true},
    quotationDate:{type: Date, required: true},
    startDate: {type: Date, required: true},
    endDate:{type: Date, required: true},
    claimDate: {type: Date, required: true},
    create: {type: Date, default: Date.now},
}, {timestamps: true}) 
module.exports = mongoose.model('Project', ProjectSchema)