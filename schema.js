const Joi = require("joi");

const listingSchema = Joi.object({
    listing: Joi.object({
        title: Joi.string().required(),
        description: Joi.string().required(),
        location: Joi.string().required(),
        country: Joi.string().required(),
        price: Joi.number().required().min(0),
        image: Joi.string().allow("", null),
        category: Joi.string().valid(
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
        ).required() // I made this required to match your form
    }).required()
});

const reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required()
    }).required()
});

module.exports = { listingSchema, reviewSchema };