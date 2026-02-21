const mongoose=require("mongoose");
const initData=require("./data.js");
const Listing=require("../models/listing.js");

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

main().then(() =>{
    console.log("Connected to db");
}).catch(err =>{
    console.log(err);
})

const initDB=async () =>{
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj)=>({...obj,owner:new mongoose.Types.ObjectId("6995b008f35143e13c0af1c9")}));
    await Listing.insertMany(initData.data);
    console.log("data was imserted");
}

initDB();