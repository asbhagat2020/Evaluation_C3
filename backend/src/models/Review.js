<<<<<<< HEAD
const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: "Customer", required: true }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);
=======
const { default: mongoose } = require("mongoose");


const reviewSchema = new mongoose.Schema({
    rating:{type: Number, required:true},
    comment: {type: String, required:true},
    bookId: {type: mongoose.Schema.Types.ObjectId, ref:"Book", required: true}
}, {timestamps:true});

module.exports = mongoose.model('Review', reviewSchema);
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
