import * as Yup from 'yup';

export const CategoryValidationSchema = Yup.object({
  categoryName: Yup.string()
    .trim()
    .min(3, "Category name must be greater than 3 characters")
    .max(20, "Category name must be less than 3 characters")
    .required("Please enter category name"),
    
    categoryImageUrl: Yup.string()
    .trim()
    .min(3, "Category image URL must be greater than 3 characters")
    .max(20, "Category image URL must be less than 3 characters")
    .required("Please enter category image URL"),
});
