import "react-toastify/dist/ReactToastify.css";

import { toast } from "react-toastify";

// For both admin and customer {login and sign up}
export const allFieldErrorToastMessage = () => {
  toast.error("Please insert all fields", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const noAdminFoundToastMessage = () => {
  toast.error("Invalid username or password", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const adminLoginSuccessToastMessage = () => {
  toast.success("Admin logged in successfully.", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const adminLoggedOutToastMessage = () => {
  toast.success("Admin logged out successfully.", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// For Customer {login and sign up}
export const customerSignInSuccessToastMessage = (name) => {
  toast.success(<div>Welcome {name} !</div>, {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const customerSignUpSuccessToastMessage = (name) => {
  toast.success(<div>{name}, your account is created successfully.</div>, {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const customerDeletedToastMessage = () => {
  toast.success("Customer deleted successful", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const customerDeletedSuccessToastMessage = (name) => {
  toast.success(<div>{name}'s account deleted successfully.</div>, {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const customerLoggedOutToastMessage = (name) => {
  toast.success(<div>{name} logged out successfully.</div>, {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// For both admin and customer {login and sign up}
export const invalidEmailToastMessage = () => {
  toast.error("Please enter a valid email", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// For both admin and customer {login and sign up}
export const invalidPasswordToastMessage = () => {
  toast.error("Please enter a valid password", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const customerAlreadyRegisteredToastMessage = () => {
  toast.warn("Customer is already register", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Product insertion message
export const productInsertedToastMessage = () => {
  toast.success("Product inserted successfully", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Product updated message
export const productUpdatedToastMessage = () => {
  toast.success("Product updated successfully", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Product deletion message
export const productDeletionToastMessage = () => {
  toast.success("Product is deleted successfully", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Product Quantity increased
export const productQuantityIncreasedToastMessage = () => {
  toast.success("Product Quantity is increased by 1", {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Product Quantity decreased
export const productQuantityDecreasedToastMessage = () => {
  toast.success("Product Quantity is decreased by 1", {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Category inserted message
export const categoryInsertedToastMessage = () => {
  toast.success("New category is inserted successfully", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Category updated message
export const emptyCategoryToastMessage = () => {
  toast.error("Please enter a category name", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Category deleted message
export const categoryDeletedToastMessage = () => {
  toast.success("Category is deleted successfully", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Brand inserted message
export const brandInsertedToastMessage = () => {
  toast.success("New brand is inserted successfully", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Brand deletion message
export const brandDeletedToastMessage = () => {
  toast.success("Brand is deleted successfully", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Brand updated message
export const emptyBrandToastMessage = () => {
  toast.error("Please enter a brand name", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Item added to card message
export const itemAddedToCartToastMessage = () => {
  toast.success("Item is successfully added to cart", {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Item deleted to card message
export const itemIsDeletedFromCartToastMessage = () => {
  toast.success("Product is removed from cart", {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const itemRemoveToCartToastMessage = () => {
  toast.success("Item is successfully removed from cart", {
    position: "bottom-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Cart is empty message
export const cartIsEmptyToastMessage = () => {
  toast.warn("Your cart is empty", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const searchEmptyToastMessage = () => {
  toast.warn("Please enter something to search", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

// Shipping address toast message
export const newShippingAddress = () => {
  toast.success("Shipping Address for customer is created successful", {
    position: "top-right",
    autoClose: 500,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};
