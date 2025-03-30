import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  videoUrl: { type: String, required: true },
  thumbnailUrl: { type: String },
  duration: { type: Number, required: true }, // in seconds
  category: { type: String, enum: ["Education", "Entertainment", "Music", "Sports", "Other"], default: "Other" },
  likes: { type: Number, default: 0 },
  views: { type: Number, default: 0 },
  comments: [
    {
      userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      comment: { type: String, required: true },
      timestamp: { type: Date, default: Date.now },
    }
  ],
  uploader: {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true }
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

// Middleware to update 'updatedAt' before saving
videoSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const Video = mongoose.model("Video", videoSchema);

module.exports = Video;


videoSchema.plugin(mongooseAggregatePaginate)