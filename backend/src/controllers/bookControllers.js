<<<<<<< HEAD
const Book = require("../models/book");

exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
=======
const Book = require("../models/Book");


exports.getBookById = async(req, res) =>{
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    } 
    catch (error) {
       res.status(500).json({message:error.message});    
    }
}
>>>>>>> fa72693562cd341495212a4396c13594fa57af03
