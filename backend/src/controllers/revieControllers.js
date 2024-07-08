const Review = require("../models/Review.js")


exports.getReviewsByBook = async (req, res) =>{
    try {
        const reviews = await Review.find({bookId: req.params.bookId}).populate('cutomerId');
        res.status(200).json(reviews);
    } 
    catch (error) {
        res.status(500).json({message:error.message});
    }
}