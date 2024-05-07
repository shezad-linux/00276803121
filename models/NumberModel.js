import mongoose from 'mongoose';

const numberSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

const NumberModel = mongoose.model('Number', numberSchema);

export default NumberModel;
