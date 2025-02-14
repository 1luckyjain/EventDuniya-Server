import { Document, Schema, model } from "mongoose";
import { IContactForm } from "./types/IContact";



const ContactFormSchema = new Schema<IContactForm>(
  {
    name: { type: String },
    email: { type: String, required: true },
    phone: { type: String },
    subject: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

// 3. Export the model
const ContactForm = model<IContactForm>("ContactForm", ContactFormSchema);
export default ContactForm;
