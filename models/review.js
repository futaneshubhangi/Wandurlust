const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    comment: {
        type: String,
        required: true,
        trim: true        // ✅ removes leading & trailing spaces
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now // ✅ function reference, not call
    },
    author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    
  },
});

module.exports = mongoose.model("Review", reviewSchema);