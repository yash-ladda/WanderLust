const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Listing = require("./models/listing.js")
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const {listingSchema, reviewSchema} = require("./schema.js");
const Review = require("./models/review.js")

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "/public")));
app.engine("ejs", ejsMate);

main()
    .then((res) => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    })

async function main () {
    await mongoose.connect(MONGO_URL);
}

app.get("/", (req, res) => {
    res.send("Hi, root here");
});

const validateListing = (req, res, next) => {
    let {error} = listingSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((ele) => ele.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

const validateReview = (req, res, next) => {
    let {error} = reviewSchema.validate(req.body);
    if(error) {
        console.log(error);
        let errMsg = error.details.map((ele) => ele.message).join(",");
        throw new ExpressError(400, errMsg);
    }
    else {
        next();
    }
};

// INDEX ROUTE
app.get("/listings",  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", {allListings});
}));


//NEW ROUTE
app.get("/listings/new", (req, res) => {
    // res.send("Add");
    res.render("./listings/new")
});


// SHOW ROUTE
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    res.render("./listings/show", {listing});
}));


//CREATE ROUTE
app.post("/listings", validateListing, wrapAsync (async (req, res, next) => {
    // let {title, description, image, price, location, country} = req.body;
    // let listing = req.body.listing;

    //Don't write this much amount of if's, use Joi to validate schema from server side
//    { if(!req.body.listing) {
//         throw new ExpressError(400, "Send valid data for listing");
//     }
//     const newList = new Listing(req.body.listing);
//     if(!newList.title) {
//         throw new ExpressError(400, "Title is missing!");
//     }
//     if (!newList.description) {
//         throw new ExpressError(400, "Description is missing!");
//     }
//     if (!newList.price) {
//         throw new ExpressError(400, "Price is missing!");
//     }
//     if (!newList.country) {
//         throw new ExpressError(400, "Country is missing!");
//     }
//     if (!newList.location) {
//         throw new ExpressError(400, "Location is missing!");
//     }}
    
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings"); 
})
);


//EDIT ROUTE
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    res.render("./listings/edit", {listing});
}));


//UPDATE ROUTE
app.put("/listings/:id", validateListing, wrapAsync(async (req, res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id, {...req.body.listing})
    res.redirect(`/listings/${id}`);
}));


//DELETE ROUTE
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}));

//REVIEWS POST ROUTE
app.post("/listings/:id/reviews", validateReview, wrapAsync(async (req, res) => {
    const { id } = req.params;
    let listing = await Listing.findById(id);
    console.log(listing);
    
    let newReview = new Review(req.body.review);

    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    res.redirect(`/listings/${id}`);
}));

//REVIEWS DELETE ROUTE
app.delete("/listings/:id/reviews/:reviewId", wrapAsync(async (req, res) => {
    let { id, reviewId } = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewId}});
    await Review.findByIdAndDelete(reviewId);

    res.redirect(`/listings/${id}`);
}));

// app.get("/testlist", async (req, res) => {
//     let sampleListing = new Listing({
//         title: "My New Villa",
//         description: "Near beach",
//         price: 1200,
//         location: "Goa",
//         country: "India",
//     });
//     await sampleListing.save();
//     console.log("Sample listed");
//     res.send("Success");
// })

app.all(/.*/, (req, res, next) => {
    next(new ExpressError(404, "Page not found!"));
});

app.use((err, req, res, next) => {
    let { status = 500, message = "Something went wrong" } = err;
    // res.status(status).send(message);
    res.status(status).render("error", {err});
});

app.listen(8080, () => {
    console.log("Server listening to port 8080");
})