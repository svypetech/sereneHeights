"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { RingLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function InvestContactForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validate = (values) => {
    const errors = {};

    if (!values.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }

    const phone = values.phoneNumber.trim();
    if (!phone) {
      errors.phoneNumber = "Phone number is required";
    } else if (!/^\+?\d{7,15}$/.test(phone)) {
      errors.phoneNumber = "Enter a valid phone number";
    }

    return errors;
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setLoading(true);
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userName: "Investment Inquiry",
          email: values.email,
          phoneNumber: values.phoneNumber,
          city: "Not provided",
          interestedIn: "Investment",
          subInterest: "Investment Analysis Request",
          check: "Invest page — Get Investment Analysis form",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      resetForm();
      router.push("/thank-you");
    } catch {
      alert(
        "Something went wrong. Please try again or contact us directly."
      );
    } finally {
      setLoading(false);
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ email: "", phoneNumber: "" }}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="text-left max-w-lg mx-auto">
          <div className="mb-4 popping">
            <label className="text-xs text-[#222222] font-medium mb-1 block">
              Email Address *
            </label>
            <Field
              type="email"
              name="email"
              placeholder="your@email.com"
              className="w-full border shadow-sm rounded-md placeholder:text-xs bg-transparent p-3 focus:outline-none text-sm text-[#37584F]"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="py-1 text-red-600 text-xs"
            />
          </div>

          <div className="mb-6 popping">
            <label className="text-xs text-[#222222] font-medium mb-1 block">
              Phone Number *
            </label>
            <Field
              type="tel"
              name="phoneNumber"
              placeholder="+92 300 1234567"
              className="w-full border shadow-sm rounded-md placeholder:text-xs bg-transparent p-3 focus:outline-none text-sm text-[#37584F]"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="py-1 text-red-600 text-xs"
            />
          </div>

          <button
            type="submit"
            disabled={loading || isSubmitting}
            className="group w-full relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#37584F] px-8 py-3 font-medium text-[#FEFEFB] disabled:opacity-50 transition-opacity"
          >
            {loading ? (
              <RingLoader color="white" size={24} />
            ) : (
              "Send Me Investment Analysis"
            )}
          </button>

          <p className="text-center text-sm text-[#475467] inter mt-4">
            ✓ No pressure. ✓ No calls unless you request. ✓ Analysis sent within
            24 hours.
          </p>
        </Form>
      )}
    </Formik>
  );
}

export default InvestContactForm;
