const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const Listing = require("../models/listing");
const initData = require("./data");

const dbUrl = process.env.ATLASDB_URL;

if (!dbUrl) {
  throw new Error("❌ ATLASDB_URL not found in .env");
}

const ownerId = new mongoose.Types.ObjectId("699963d8649e48b054d72da8"); // MUST exist in users

async function seedDB() {
  try {
    await mongoose.connect(dbUrl);
    console.log("✅ Connected to DB");

    await Listing.deleteMany({});
    console.log("🗑️ Old listings deleted");

    const listings = initData.data.map(item => ({
      ...item,
      owner: ownerId
    }));

    await Listing.insertMany(listings);
    console.log(`🌱 ${listings.length} listings inserted`);

  } catch (err) {
    console.log("❌ Seed error:", err.message);
  } finally {
    await mongoose.connection.close();
    console.log("🔒 DB connection closed");
  }
}

seedDB();