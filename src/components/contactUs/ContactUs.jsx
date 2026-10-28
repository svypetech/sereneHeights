"use client";
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { RingLoader } from "react-spinners";
import DropdownRadio from "./DropdownRadio";
import InputField from "./InputField";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { trackGenerateLead } from "@/lib/analytics";
import { useLeadSubmit } from "@/lib/submitLead";
import Turnstile from "@/components/turnstile/Turnstile";

function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [dropdownValues, setDropdownValues] = useState({
    interestedIn: "",
    subInterest: "",
  });

  const router = useRouter();
  const { submitLead, turnstileProps } = useLeadSubmit("contact_form");

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

    const phone = values.phoneNumber.trim();
    if (!/^\+?\d{7,15}$/.test(phone)) {
      errors.phoneNumber = "Enter valid phone number";
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
    try {
      setLoading(true);
      await submitLead({ ...values, ...dropdownValues });

      trackGenerateLead({
        method: "contact_form",
        interested_in: dropdownValues.interestedIn || undefined,
        sub_interest: dropdownValues.subInterest || undefined,
      });
      resetForm();
      setDropdownValues({
        interestedIn: "",
        subInterest: "",
      });
      router.push("/thank-you");
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
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
    website: "",
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
              {/* Honeypot: hidden from people, bots fill it. */}
              <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                <Field name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>
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

                  <Turnstile {...turnstileProps} />

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
