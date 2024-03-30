import mongoose from "mongoose";

const linkSchema = mongoose.Schema({
  ogLink: { type: String, required: true },
  shortLink: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  totalClicks: { type: Number, default: 0 },
  linkCrationTime: { type: String, default: Date.now() },
});

let TelegramShorten = mongoose.model("telegram", linkSchema);

export default TelegramShorten;
