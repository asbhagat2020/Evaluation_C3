<<<<<<< HEAD
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    isbn: { type: String, required: true },
    publishedDate: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
=======
const { default: mongoose } = require("mongoose");

const bookSchema = new mongoose.Schema({
    title:{type: String, required:true},
    author: {type: String, required:true},
    isbn:{type: String, required:true},
    publishedData:{type: Date, required: true},
},{timestamps:true})


module.exports = mongoose.model("Book", bookSchema);
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
