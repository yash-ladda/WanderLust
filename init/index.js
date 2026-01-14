const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb+srv://yash-ladda:yashladdaincredible@cluster0.s3cv2yc.mongodb.net/?appName=Cluster0";

main()
    .then((res) => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

async function main() {
    await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({ ...obj, owner: "69676fab92a3bbce4054279f"}));
    await Listing.insertMany(initData.data);
    console.log("Data initialized");
}

initDB();