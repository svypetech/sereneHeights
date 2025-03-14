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
  // .required("Please enter your phone number"),
  message: Yup.string()
    .min(50, "Message must be 50 characters")
    .max(300, "Message must not be greater then 300 characters")
    .required("Please enter how can we help you!"),
});
