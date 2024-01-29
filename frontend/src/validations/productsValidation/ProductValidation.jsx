import * as Yup from "yup";

export const ProductValidationSchema = Yup.object({
  productName: Yup.string()
    .trim()
    .min(3, "Product name must be greater than 3 characters")

    .required("Please enter category name"),

  productDescription: Yup.string()
    .min(3, "Product name must be greater than 3 characters")
    .required("Please enter product description"),

  productPrice: Yup.number()
    .typeError("Product price must be an integer")
    .positive("A product price can't start with a minus")
    .integer("A product price can't include a decimal point")
    .required("Please enter product price"),

  productStockQuantity: Yup.number()
    .typeError("Product stock quantity must be an integer")
    .positive("A product stock quantity can't start with a minus")
    .integer("A product stock quantity can't include a decimal point")
    .required("Please enter product stock quantity"),

  productOffers: Yup.string()
    .min(2, "Category name must be greater than 3 characters")
    .max(20, "Category name must be less than 3 characters")
    .required("Please enter product offer"),

  productImageUrl: Yup.string()
    .min(2, "Category name must be greater than 3 characters")
    .required("Please enter product image url"),

  //   brandId: Yup.string().required("Please select product brand"),

  //   categoryId: Yup.string().required("Please select product category"),
});

// {productImageUrl: "",
//     productName: "",
//     productDescription: "",
//     productPrice: "",
//     productStockQuantity: "",
//     productOffers: "",
//     brandId: "",
//     categoryId: "",}
