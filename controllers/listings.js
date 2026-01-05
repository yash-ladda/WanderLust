const Listing = require("../models/listing");

//Index route
module.exports.index = async (req, res) => {
    const allListings = await Listing.find({});
    res.render("./listings/index.ejs", { allListings });
};

//New route
module.exports.renderNewForm = (req, res) => {
    res.render("./listings/new")
};

//Show route
module.exports.showListing = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id)
        .populate({
            path: "reviews", 
            populate: {
                path: "author"
            },
        })
        .populate("owner");
    if(!listing) {
        req.flash("error", "Listing Does Not Exist! ");
        return res.redirect("/listings");
    }

    //calculate avg rating
    let total = 0;
    for (let review of listing.reviews) {
        total += review.rating;
    }

    const avgRating = listing.reviews.length
        ? (total / listing.reviews.length).toFixed(1)
        : 0;

    res.render("./listings/show", {listing, avgRating});
};

//Create route
module.exports.createListing = async (req, res, next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    const newListing = new Listing(req.body.listing);
    newListing.owner = req.user._id;
    newListing.image = {url, filename};
    await newListing.save();
    req.flash("success", "New Listing Created! ");
    res.redirect("/listings"); 
};

//Edit route
module.exports.renderEditForm = async (req, res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
        req.flash("error", "Listing Does Not Exist! ");
        return res.redirect("/listings");
    }
    res.render("./listings/edit", {listing});
};

//Update route
module.exports.updateListing = async (req, res) => {
    let {id} = req.params; 

    // 1️⃣ update text fields
    let listing = await Listing.findByIdAndUpdate(
        id,
        { ...req.body.listing },
        { new: true }
    );
            
    // 2️⃣ if user uploaded new image → update image
    if (req.file) {
        listing.image = {
            url: req.file.path,
            filename: req.file.filename,
        };
        await listing.save();
    }
    
    req.flash("success", "Listing Updated! ");
    res.redirect(`/listings/${id}`);
};

//Destroy route
module.exports.destroyListing = async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted! ");
    res.redirect("/listings");
};