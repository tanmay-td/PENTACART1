import * as Yup from "yup";

export const adminValidationSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),

  password: Yup.string()
    .required("Please enter your password")
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(/\d/, "Password must have a number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must have a special character"
    )
    .min(8, "Password must be of minimum 8 characters")
    .max(15, "Password must be of maximum 15 characters"),
});

// Regular expression for strong password :
// ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
// It includes :
//   1} Alphabets
//   2} Numbers
//   3} Special Characters
//   4} Minimum Length : 8
