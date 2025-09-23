const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then((res) => {
    console.log("connection successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  initdata.data = initdata.data.map((obj) => ({
    ...obj,
    owner: "68beeca585adc871e20f613a",
  }));
  await Listing.insertMany(initdata.data);
  console.log("Data is intiallised");
};

initDB();
