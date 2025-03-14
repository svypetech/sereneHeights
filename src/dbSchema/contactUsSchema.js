import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
  userName: String,
  email: {
    type: String,
    required: [true, "Email Required!"],
  },
  phoneNumber: Number,
  message: String,
  check: String,
  feedback: String,
});

const Contact =
  mongoose.models.contact || mongoose.model("contact", contactSchema);

export default Contact;
