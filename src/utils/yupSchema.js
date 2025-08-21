import * as Yup from "yup";

export const contactusSchema = Yup.object().shape({
  userName: Yup.string()
    .min(3, "Too Short!")
    .max(20, "Too Long!")
    .required("Name must be required!"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your email")
    .matches(
      /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
      "Email format is not valid try eg : someone@gmail.com"
    ),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Phone number must contain only digits")
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits"),

  city: Yup.string().required("City is required!"),

  interestedIn: Yup.string()
    .oneOf(["smart property unit", "full apartment"], "Invalid selection")
    .required("Please select an option"),
  subInterest: Yup.string()
    .required("Please select a sub-option"),
});


