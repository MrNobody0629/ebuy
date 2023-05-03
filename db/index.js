const mongoose = require("mongoose");

const connect = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_DB_URL);
    console.log("Database connection successful!");
  } catch (error) {
    console.log("Error while connecting database!");
    process.exit();
  }
};

module.exports = {
  connect,
};
