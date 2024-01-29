import * as Yup from "yup";

export const BrandValidationSchema = Yup.object({
  brandName: Yup.string()
    .trim()
    .min(2, "Brand name must contains at least 2 characters.")
    .max(40, "Brand name must contains maximum 40 characters.")
    .required("Please enter brand name"),

  brandImageUrl: Yup.string()
    .trim()
    .min(2, "Brand image URL must contains at least 2 characters.")
    .max(40, "Brand image URL must contains maximum 40 characters.")
    .required("Please enter brand image URL"),
});
