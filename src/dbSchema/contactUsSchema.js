import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  userName: String,
  email: {
    type: String,
    required: [true, "Email Required!"],
  },
  phoneNumber: String,
  city: {
    type: String,
    required: [true, "City is required!"],
  },
  interestedIn: {
    type: String,
    enum: ["smart property unit", "full apartment"],
    required: [true, "Interested In is required!"],
  },
  subInterest: {
    type: String,
    required: [true, "Sub Interest is required!"],
  },
  check: String,
  feedback: String,
});

const Contact =
  mongoose.models.contact || mongoose.model("contact", contactSchema);

export default Contact;