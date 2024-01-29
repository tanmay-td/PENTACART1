import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Flip, ToastContainer } from "react-toastify";

import AdminHomePage from "./admin/adminhome/AdminHomePage";
import AdminLogin from "./admin/adminlogin/AdminLogin";
import CustomerHomePage from "./components/home/CustomerHomePage";
import HomePage from "./components/home/HomePage";
import HomeNavigation from "./components/navigation/HomeNavigation";
import CreateProductBrand from "./screens/brands/createproductbrand/CreateProductBrand";
import ShowAllProductBrands from "./screens/brands/showallproductbrands/ShowAllProductBrands";
import CustomerCart from "./screens/cart/CustomerCart";
import CreateProductCategory from "./screens/categories/createproductcategory/CreateProductCategory";
import ShowAllProductCategories from "./screens/categories/showallproductcategories/ShowAllProductCategories";
import CustomerSignIn from "./screens/customers/customersignin/CustomerSignIn";
import CustomerSignInWithPhone from "./screens/customers/customersignin/CustomerSignInWithPhone";
import CustomerSignUp from "./screens/customers/customersignup/CustomerSignUp";
import ShowAllCustomers from "./screens/customers/showallcustomers/ShowAllCustomers";
import Order from "./screens/order/Order";
import CreateProduct from "./screens/products/createproduct/CreateProduct";
import DisplaySingleProduct from "./screens/products/getsingleproduct/DisplaySingleProduct";
import ShowAllProducts from "./screens/products/showallproducts/ShowAllProducts";
import Search from "./screens/search/Search";
import { itemRemoveToCartToastMessage } from "./toastify/AllToastMessages";
import { ProductContext } from "./utils/ProductContext";
import UpdateProduct from "./screens/products/updateproduct/UpdateProduct";
import CustomerProfile from "./screens/profile/CustomerProfile";
import SubFooter from "./components/footer/SubFooter";
import Developers from "./components/developers/Developers";
import ContactForm from "./components/contactus/ContactForm";
import AdminProfile from "./screens/profile/AdminProfile";

function App() {
  const [customerStatus, setCustomerStatus] = useState(false);
  const [adminStatus, setAdminStatus] = useState(false);
  const [customerDetails, setCustomerDetails] = useState(false);
  const [adminDetails, setAdminDetails] = useState(false);

  // for cart
  const [cart, setCart] = useState([]);

  const setCustomerDetailsFunction = (value) => {
    setCustomerDetails(value);
  };

  // Admin details set function :
  const setAdminDetailsFunction = (value) => {
    setAdminDetails(value);
  };

  // ? Cart functionalities :
  const addProduct = (data) => {
    const productExists = cart.find((item) => item._id === data._id);
    if (productExists) {
      setCart(
        cart.map((items) =>
          items._id === data._id
            ? {
              ...productExists,
              productStockQuantity: productExists.productStockQuantity + 1,
            }
            : items
        )
      );
    } else {
      setCart([...cart, { ...data, productStockQuantity: 1 }]);
    }
  };

  const removeProduct = (data) => {
    const productExists = cart.find((item) => item._id === data._id);
    if (productExists.productStockQuantity === 1) {
      itemRemoveToCartToastMessage();
      setCart(cart.filter((items) => items._id !== data._id));
    } else {
      setCart(
        cart.map((items) =>
          items._id === data._id
            ? {
              ...productExists,
              productStockQuantity: productExists.productStockQuantity - 1,
            }
            : items
        )
      );
    }
  };
  const removeQuantityAndProduct = (data) => {
    setCart(cart.filter((items) => items._id !== data._id));
  };

  useEffect(() => {
    // Everything in the local storage is stored in the form of string
    if (cart !== null) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  useEffect(() => {
    // Everything in the local storage is stored in the form of string
    if (customerDetails !== null) {
      localStorage.setItem("customerdetail", JSON.stringify(customerDetails));
    }
  }, [customerDetails]);

  // Store admin details to local storage
  useEffect(() => {
    if (adminDetails !== null) {
      localStorage.setItem("adminDetails", JSON.stringify(adminDetails));
    }
  }, [adminDetails]);

  // Customer status
  useEffect(() => {
    // Everything in the local storage is stored in the form of string
    if (customerStatus !== null) {
      localStorage.setItem("customerstatus", JSON.stringify(customerStatus));
    }
  }, [customerStatus]);

  // Admin status
  useEffect(() => {
    // Everything in the local storage is stored in the form of string
    if (adminStatus !== null) {
      localStorage.setItem("adminStatus", JSON.stringify(adminStatus));
    }
  }, [adminStatus]);

  const cartData = JSON.parse(localStorage.getItem("cart"));
  useEffect(() => {
    // 'cart' is user defined key used to get cart

    setCart(cartData);
  }, []);

  // Set customer status
  const UserStatus = JSON.parse(localStorage.getItem("customerstatus"));
  useEffect(() => {
    setCustomerStatus(UserStatus);
  }, []);

  // Set admin status
  const AdminStatus = JSON.parse(localStorage.getItem("adminStatus"));
  useEffect(() => {
    setAdminStatus(AdminStatus);
  }, []);

  const UserData = JSON.parse(localStorage.getItem("customerdetail"));
  useEffect(() => {
    setCustomerDetails(UserData);
  }, []);

  // Get admin details stored on local storage
  const AdminData = JSON.parse(localStorage.getItem("adminDetails"));
  useEffect(() => {
    setAdminDetails(AdminData);
  }, []);

  const customerStatusSetter = (data) => {
    setCustomerStatus(data);
  };

  const adminStatusSetter = (data) => {
    setAdminStatus(data);
  };
  return (
    <BrowserRouter>
      <ProductContext.Provider
        value={{
          cart,
          setCart,
          addProduct,
          removeProduct,
          setCustomerDetailsFunction,
          customerDetails,
          customerStatus,
          setAdminStatus,
          adminStatus,
          adminDetails,
          setAdminDetailsFunction,
          adminStatusSetter,
          customerStatusSetter,
          removeQuantityAndProduct,
        }}
      >
        <HomeNavigation />
        <Routes>
          <Route exact path="/" element={<HomePage />} />

          {/* Admin Routes */}
          <Route exact path="/admin" element={<AdminLogin />} />

          {/* Admin Profile */}
          <Route exact path="/admin/profile" element={<AdminProfile />} />

          <Route exact path="/admin/home" element={<AdminHomePage />} />

          {/* About Us -- Developers Information Page */}
          <Route exact path='/developers' element={<Developers />} />

          {/* Contact Us */}
          <Route exact path='/contact' element={<ContactForm />} />

          {/* Products */}
          <Route exact path="/products" element={<ShowAllProducts />} />

          <Route exact path="/products/create" element={<CreateProduct />} />

          <Route
            exact
            path="/products/:id"
            element={<DisplaySingleProduct />}
          />

          <Route
            exact
            path="/products/update/:id"
            element={<UpdateProduct />}
          />

          {/* Categories */}
          <Route
            exact
            path="/categories"
            element={<ShowAllProductCategories />}
          />

          <Route
            exact
            path="/categories/add"
            element={<CreateProductCategory />}
          />

          {/* Brands */}
          <Route exact path="/brands" element={<ShowAllProductBrands />} />

          <Route exact path="/brands/add" element={<CreateProductBrand />} />


          {/* Customers */}
          <Route exact path="/customers" element={<ShowAllCustomers />} />

          <Route exact path="/customers/signin" element={<CustomerSignIn />} />

          <Route
            exact
            path="/customers/phone"
            element={<CustomerSignInWithPhone />}
          />

          <Route
            exact
            path="/customers/customersignup"
            element={<CustomerSignUp />}
          />

          <Route exact path="/customer/home" element={<CustomerHomePage />} />

          <Route
            exact
            path="/customers/profile"
            element={<CustomerProfile />}
          />



          {/* Cart */}
          <Route exact path="/cart" element={<CustomerCart />} />

          {/* Search */}
          <Route exact path="/search/:id" element={<Search />} />

          {/* Order */}
          <Route exact path="/order" element={<Order />} />
        </Routes>

        <ToastContainer transition={Flip} />
      </ProductContext.Provider>
    </BrowserRouter>
  );
}

export default App;
