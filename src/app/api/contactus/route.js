import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

import Contact from "@/dbSchema/contactUsSchema";

export async function POST(request) {
  try {
    const { userName, email, phoneNumber, message, check } =
      await request.json();

    let existingContact = await Contact.findOne({ email });

    if (existingContact) {
      // If email exists, update the existing contact
      existingContact.userName = userName;
      existingContact.phoneNumber = phoneNumber;
      existingContact.message = message;
      existingContact.check = check;
      existingContact = await existingContact.save();

      console.log("Contact updated successfully:", existingContact);
      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          // user: "texinitytesting123@gmail.com",
          // pass: "qndx pkan luvz ",
          user: "",
          pass: "",
        },
      });
      const mailOptions = {
        // from: "texinitytesting123@gmail.com",
        from: "",
        to: "info@gmail.com",
        subject: "New Contact Us Submission",
        html: `
        <p>You have received a new contact us submission:</p>
        <ul>
          <li>User Name: ${existingContact.userName}</li>
          <li>Email: ${existingContact.email}</li>
          <li>Phone Number: ${existingContact.phoneNumber}</li>
          <li>Message: ${existingContact.message}</li>
        </ul>
      `,
      };
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!!");
      return NextResponse.json(existingContact, { status: 200 });
    } else {
      const userContact = new Contact({
        userName,
        email,
        phoneNumber,
        message,
        check,
      });
      const data = await userContact.save();
      console.log(data, "data");

      const transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
          // user: "texinitytesting123@gmail.com",
          user: "",
          // pass: "qndx pkan luvz ",
          pass: "",
        },
      });
      const mailOptions = {
        // from: "texinitytesting123@gmail.com",
        from: "",
        to: "info@gmail.com",
        subject: "New Contact Us Submission",
        html: `
        <p>You have received a new contact us submission:</p>
        <ul>
          <li>User Name: ${data.userName}</li>
          <li>Email: ${data.email}</li>
          <li>Phone Number: ${data.phoneNumber}</li>
          <li>Message: ${data.message}</li>
        </ul>
      `,
      };
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!!");

      return NextResponse.json(data, { status: 201 });
    }
  } catch (error) {
    console.log("errror", error);
    return NextResponse.json({
      message: "failed to submit form",
      status: false,
    });
  }
}
