import { ErrorMessage, Field } from "formik";
import React from "react";

function InputField({ label, placeholder, type, name }) {
  return (
    <div className="z-10 w-full flex flex-col  popping">
      <label className="text-sm  ">{label}</label>
      <Field
        type={type}
        placeholder={placeholder}
        name={name}
        className="w-full border shadow-sm rounded-md mb-2 placeholder:text-sm bg-transparent p-2 focus:border-b-white focus:outline-none"
      />
      <ErrorMessage
        name={name}
        component="div"
        className=" py-1 text-red-600"
      />
    </div>
  );
}

export default InputField;
