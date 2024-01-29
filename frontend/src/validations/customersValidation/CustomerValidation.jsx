import * as Yup from "yup";

const phoneNumberRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const customerLoginValidationSchema = Yup.object({
  customerEmail: Yup.string()
    .email("Please enter valid email")
    .required("Please enter your email"),

  customerPassword: Yup.string()
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

export const createCustomerValidationSchema = Yup.object({
  customerFirstName: Yup.string()
    .min(2, "First name must contains minimum 2 characters")
    .max(20, "First name must contains maximum 20 characters")
    .required("Please enter your first name"),

  customerLastName: Yup.string()
    .min(2, "Last name must contains minimum 2 characters")
    .max(20, "Last name must contains maximum 20 characters")
    .required("Please enter your last name"),

  customerPhone: Yup.number("Phone number must be a number")
    .typeError("That doesn't look like a phone number")
    .positive("A phone number can't start with a minus")
    .integer("A phone number can't include a decimal point")
    .min(6000000000, "That's is not a valid phone number")
    .max(9999999999, "That's is not a valid phone number")
    .required("Please enter your phone number"),

  customerAddress: Yup.string()
    .min(2, "Address must contains minimum 2 characters")
    .max(20, "Address must contains maximum 20 characters")
    .required("Please enter your address"),

  customerEmail: Yup.string()
    .email("Please enter a valid email")
    .required("Please enter your email"),

  customerPassword: Yup.string()
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
