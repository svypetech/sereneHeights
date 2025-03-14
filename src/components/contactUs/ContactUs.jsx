"use client";
import { Form, Formik, Field, ErrorMessage } from "formik";
import React, { useState } from "react";
import { RingLoader } from "react-spinners";
import Swal from "sweetalert2";

import { contactusSchema } from "@/utils/yupSchema";
import InputField from "./InputField";

function ContactUs({ orbitron, montserrat }) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    console.log("values", values);
    try {
      setLoading(true);
      const formData = {
        ...values,
        check: "This form is submitted from texinity webiste",
      };
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        resetForm();
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been submitted successfully!",
          icon: "success",
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: "Error!",
        text: "An error occurred while submitting your message. Please try again later.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="relative border rounded-lg shadow-sm p-2 w-full">
      <Formik
        initialValues={{
          userName: "",
          email: "",
          phoneNumber: "",
          message: "",
        }}
        validationSchema={contactusSchema}
        onSubmit={handleSubmit}
      >
        <div className="px-2 md:px-16 text-left my-10 w-full ">
          <Form className={`  my-2`}>
            <div>
              <div className=" ">
                <InputField
                  label="Name"
                  name="userName"
                  placeholder="Enter First Name"
                  type="text"
                />
                <div className="flex  items-end flex-col md:flex-row gap-0 md:gap-3">
                  <InputField
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    type="text"
                  />
                  <InputField
                    label="Email"
                    name="email"
                    placeholder="Email"
                    type="email"
                  />
                </div>
              </div>
              <div className="flex flex-col popping">
                <label htmlFor="message" className="text-sm">
                  Message
                </label>
                <Field
                  as="textarea"
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Enter Message"
                  className=" rounded-lg border shadow-sm placeholder:text-sm bg-transparent px-3 py-3 text-lg focus:border-white focus:outline-none"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className=" py-1 text-red-600"
                />
              </div>
              <button
                type="submit"
                className="group w-full relative mt-5 inline-flex items-center justify-center overflow-hidden rounded-full bg-[#37584F] px-12 py-2 font-mono text-xl font-medium tracking-tighter text-white"
              >
                <span className="absolute h-0 w-0 rounded-full bg-[#37584F] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
                <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-700 opacity-30"></span>
                <span className="relative popping tracking-wide  ">
                  {loading ? (
                    <RingLoader color="white" size={30} />
                  ) : (
                    "Message Us"
                  )}
                </span>
              </button>
            </div>
          </Form>
        </div>
      </Formik>
    </div>
  );
}

export default ContactUs;
