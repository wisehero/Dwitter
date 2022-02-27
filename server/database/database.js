import mongoose from "mongoose";
import { config } from "../config.js";

export function useVirtualId(schema) {
  schema.virtual("id").get(function () {
    return this._id.toString();
  });
  schema.set("toJSON", { virtuals: true });
  schema.set("toObject", { virtuals: true });
}

export async function connectDB() {
  return mongoose.connect(config.db.host);
}

let db;

export function getTweets() {
  return db.collection("tweets");
}
