"use client";
import React, { useState } from "react";
import { Formik, Form } from "formik";
import { RingLoader } from "react-spinners";
import DropdownRadio from "./DropdownRadio";
import InputField from "./InputField";
import Swal from "sweetalert2";

function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [dropdownValues, setDropdownValues] = useState({
    interestedIn: "",
    subInterest: "",
  });

  const handleDropdownChange = (name, value) => {
    setDropdownValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (values) => {
    const errors = {};

    // Validate regular form fields
    if (!values.userName.trim()) {
      errors.userName = "Name is required";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    if (!values.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    }

    if (!values.city.trim()) {
      errors.city = "City is required";
    }

    // Validate dropdown values
    if (!dropdownValues.interestedIn.trim()) {
      errors.interestedIn = "Interest selection is required";
    }

    if (!dropdownValues.subInterest.trim()) {
      errors.subInterest = "Sub interest selection is required";
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    console.log("Form data:", { ...values, ...dropdownValues });

    try {
      setLoading(true);
      const submitData = {
        ...values,
        ...dropdownValues,
        check: "This form is submitted from Svype website",
      };

      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      if (response.ok) {
        resetForm();
        setDropdownValues({
          interestedIn: "",
          subInterest: "",
        });

        // Mock success alert (replace with your SweetAlert2)
        // alert("Message Sent! Your message has been submitted successfully!");
        Swal.fire({
          title: "Message Sent!",
          text: "Your message has been submitted successfully!",
          icon: "success",
          confirmButtonText: "OK",
          backdrop: true,
          scrollbarPadding: false,
        });
      } else {
        throw new Error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // alert(
      //   "Error! An error occurred while submitting your message. Please try again later."
      // );
      Swal.fire({
        title: "Error!",
        text: "An error occurred while submitting your message. Please try again later.",
        icon: "error",
        confirmButtonText: "OK",
        backdrop: true,
        scrollbarPadding: false,
      });
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  const initialValues = {
    userName: "",
    email: "",
    phoneNumber: "",
    city: "",
  };

  return (
    <div className="relative border rounded-lg shadow-sm p-2 w-full max-w-4xl mx-auto">
      <div className="px-2 md:px-16 text-left my-10 w-full">
        <Formik
          initialValues={initialValues}
          validate={validateForm}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, errors, touched, setFieldTouched }) => (
            <Form>
              <div className="my-2">
                <div>
                  <InputField
                    label="Name"
                    name="userName"
                    placeholder="Enter First Name"
                    type="text"
                  />

                  <div className="flex items-end flex-col md:flex-row gap-0 md:gap-3">
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

                  <InputField
                    label="City"
                    name="city"
                    placeholder="Enter your city"
                    type="text"
                  />

                  <div className="grid grid-cols-1 gap-0">
                    <DropdownRadio
                      label="Interested in"
                      name="interestedIn"
                      options={[]}
                      selectedValue={dropdownValues.interestedIn}
                      onChange={handleDropdownChange}
                      placeholder="Select your interest"
                      errors={errors}
                      touched={touched}
                      setFieldTouched={setFieldTouched}
                    />

                    {dropdownValues.interestedIn && (
                      <DropdownRadio
                        label="Sub Interest"
                        name="subInterest"
                        options={[]}
                        selectedValue={dropdownValues.subInterest}
                        onChange={handleDropdownChange}
                        placeholder="Select sub interest"
                        errors={errors}
                        touched={touched}
                        setFieldTouched={setFieldTouched}
                        parentValue={dropdownValues.interestedIn} // Pass the parent value
                      />
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={loading || isSubmitting}
                    className="group w-full relative mt-5 inline-flex items-center justify-center overflow-hidden rounded-full bg-[#37584F] px-12 py-3 font-mono text-xl font-medium tracking-tighter text-white border-[1px] border-[#00000033] disabled:opacity-50"
                  >
                    <span className="absolute h-0 w-0 rounded-full bg-[#37584F] transition-all duration-500 ease-out group-hover:h-56 group-hover:w-56"></span>
                    <span className="absolute inset-0 -mt-1 h-full w-full rounded-lg bg-gradient-to-b from-transparent via-transparent to-gray-700 opacity-30"></span>
                    <span className="relative font-[Poppins] tracking-wide font-medium text-[20px] text-[#FEFEFB]">
                      {loading ? (
                        <RingLoader color="white" size={30} />
                      ) : (
                        "Message Us"
                      )}
                    </span>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default ContactUs;
