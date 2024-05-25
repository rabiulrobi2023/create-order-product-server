import mongoose from "mongoose";
import config from "./config";
import app from "./app";

async function main() {
  try {
    await mongoose.connect(config.DB_URL as string);
    app.listen(config.PORT, () => {
      console.log(
        `Example app listening on port ${config.PORT} and You successfully connected to MongoDB!`
      );
    });
  } catch (error) {
    console.log(error);
  }
}
main();
