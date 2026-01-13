const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: String,
        filename: String,
    },
    price: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },

    category: {
        type: String,
        enum: [
            "whole_place",
            "cozy_rooms",
            "urban_stays",
            "beach_vibes",
            "mountain_escapes",
            "nature_nooks",
            "poolside_stays",
            "eco_retreats",
            "family_favs",
            "other_stays"
        ],
        required: true,
        default: "other_stays"
    },

    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review",
        }
    ],

    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },

    co_ordinates: {
        ltd: Number,
        lng: Number
    },
}, { timestamps: true });

listingSchema.post("findOneAndDelete", async (listing) => {
    if (listing) {
        await Review.deleteMany({ _id: { $in: listing.reviews } });
    }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;