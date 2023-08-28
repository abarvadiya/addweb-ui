import * as yup from "yup";

export const signInValidationSchema = yup.object({
  userNameOrEmail: yup.string().required("Username or email is required"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

export const signUpValidationSchema = yup.object({
  fullName: yup.string().required("Full Name is required"),
  profilePic: yup.string(),
  userName: yup.string().required("Username is required"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  mobileNo: yup
    .string()
    .required("Mobile No is required")
    .length(10, "Mobile No must be exactly 10 digits")
    .matches(/^\d+$/, "${label} must contain only digits"),
  password: yup
    .string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
  confirmPassword: yup.string().required("Confirm Password is required"),
});
