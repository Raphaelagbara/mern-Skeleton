const mongoose = require("mongoose");
require("dotenv").config();

connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      `mongodb+srv://ralphagbara:${process.env.atlasPassword}@mernpractice.8ji2ks2.mongodb.net/mernPractice?`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log(`mongodb connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error:${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
