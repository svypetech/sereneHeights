import { ErrorMessage, Field } from "formik";
import React from "react";

const InputField = ({ label, name, placeholder, type }) => (
  <div className="z-10 w-full flex flex-col popping mb-4">
    <label className="text-xs text-[#222222] font-medium mb-1">{label}</label>

    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className="w-full border shadow-sm rounded-md placeholder:text-xs bg-transparent p-2 focus:border-b-white focus:outline-none text-sm text-[#37584F]"
    />

    <ErrorMessage name={name} component="div" className="py-1 text-red-600 text-xs" />
  </div>
);

export default InputField;