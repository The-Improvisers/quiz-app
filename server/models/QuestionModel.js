const mongoose = require('mongoose');
const { Schema } = mongoose;

const questionSchema = new Schema({
    text: { type: String, required: true },  
    options: [{ type: String, required: true }],
    answerIndex: { type: Number, required: true },
    category: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Question', questionSchema);

