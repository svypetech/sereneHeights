import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Contact from "@/dbSchema/contactUsSchema";
// import mongoose from "mongoose";

// const MONGODB_URI = process.env.MONGODB_URI;

// if (!MONGODB_URI) {
//   throw new Error("MONGODB_URI is not defined in .env.local");
// }

// if (!mongoose.connection.readyState) {
//   await mongoose.connect(MONGODB_URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   console.log("MongoDB connected!");
// }


// export async function POST(request) {
//   try {
//     const { userName, email, phoneNumber, city, interestedIn, subInterest, check } = await request.json();

//     console.log("Form data:", { userName, email, phoneNumber, city, interestedIn, subInterest, check });

//     // Convert interestedIn to lowercase to match schema enum
//     const normalizedInterestedIn = interestedIn?.toLowerCase();

//     let existingContact = await Contact.findOne({ email });

//     if (existingContact) {
//       existingContact.userName = userName;
//       existingContact.phoneNumber = phoneNumber;
//       existingContact.city = city;
//       existingContact.interestedIn = normalizedInterestedIn;
//       existingContact.subInterest = subInterest;
//       existingContact.check = check;
//       existingContact = await existingContact.save();

//       console.log("Contact updated successfully:", existingContact);

//       const transporter = nodemailer.createTransport({
//         // user: "texinitytesting123@gmail.com",
//         // pass: "qndx pkan luvz ",

//         service: "gmail",
//         auth: {
//           user: "mkashan2912@gmail.com",
//           pass: "lkzs rusb arup axgn",
//         },
//         // tls: { rejectUnauthorized: false },
//       });

//       const mailOptions = {
//         // from: "texinitytesting123@gmail.com",

//         from: "mkashan2912@gmail.com",
//         replyTo: email,
//         to: "kashan.ashraf2912@gmail.com",
//         subject: "New Lead from Website",
//         html: `
//         <p>You have received an existing contact us submission:</p>
//         <ul>
//           <li>User Name: ${existingContact.userName}</li>
//           <li>Email: ${existingContact.email}</li>
//           <li>Phone Number: ${existingContact.phoneNumber}</li>
//           <li>City: ${existingContact.city}</li>
//           <li>Interested In: ${existingContact.interestedIn}</li>
//           <li>Sub Interest: ${existingContact.subInterest}</li>
//         </ul>
//       `,
//       };

//       await transporter.sendMail(mailOptions);
//       return NextResponse.json(existingContact, { status: 200 });

//     } else {
//       const userContact = new Contact({
//         userName,
//         email,
//         phoneNumber,
//         city,
//         interestedIn: normalizedInterestedIn,
//         subInterest,
//         check,
//       });

//       const data = await userContact.save();

//       console.log(userContact, "userContact");

//       const transporter = nodemailer.createTransport({
//         // user: "texinitytesting123@gmail.com",
//         // pass: "qndx pkan luvz ",

//         service: "gmail",
//         auth: {
//           user: "mkashan2912@gmail.com",
//           pass: "lkzs rusb arup axgn",
//         },
//         // tls: { rejectUnauthorized: false },
//       });

//       const mailOptions = {
//         // from: "texinitytesting123@gmail.com",

//         from: "mkashan2912@gmail.com",
//         replyTo: email,
//         to: "kashan.ashraf2912@gmail.com",
//         subject: "New Lead from Website",
//         html: `
//         <p>You have received a new contact us submission:</p>
//         <ul>
//           <li>User Name: ${data.userName}</li>
//           <li>Email: ${data.email}</li>
//           <li>Phone Number: ${data.phoneNumber}</li>
//           <li>City: ${data.city}</li>
//           <li>Interested In: ${data.interestedIn}</li>
//           <li>Sub Interest: ${data.subInterest}</li>
//         </ul>
//       `,
//       };

//       await transporter.sendMail(mailOptions);
//       console.log("Email sent successfully!!");

//       return NextResponse.json(data, { status: 201 });
//     }
//   } catch (error) {
//     console.log("error", error);
//     return NextResponse.json({ message: "failed to submit form", status: false });
//   }
// }

// ================================== WITHOUT MONGODB DATABASE ==========================================

export async function POST(request) {
  try {
    const { userName, email, phoneNumber, city, interestedIn, subInterest, check } = await request.json();

    console.log("Form data:", { userName, email, phoneNumber, city, interestedIn, subInterest, check });

      const userContact = new Contact({
        userName,
        email,
        phoneNumber: String(phoneNumber),
        city,
        interestedIn,
        subInterest,
        check,
      });

      console.log(userContact, "userContact");

      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "info@svype.net",
          pass: "ekvs kamh prar zkhu",
        },
        // tls: { rejectUnauthorized: false },
      });

      const mailOptions = {
        from: "info@svype.net",
        replyTo: email,
        to: "info@sereneheightsnathiagali.com",
        subject: "New Lead from Website",
        html: `
        <p>You have received a new contact us submission:</p>
        <ul>
          <li>User Name: ${userContact.userName}</li>
          <li>Email: ${userContact.email}</li>
          <li>Phone Number: ${userContact.phoneNumber}</li>
          <li>City: ${userContact.city}</li>
          <li>Interested In: ${userContact.interestedIn}</li>
          <li>Sub Interest: ${userContact.subInterest}</li>
        </ul>
      `,
      };

      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully!!");

      return NextResponse.json(userContact, { status: 201 });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "failed to submit form", status: false });
  }
}
