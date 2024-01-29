// Base Path : http://localhost:4040/products/getallproducts

const express = require("express");

const cors = require("cors");

require("../src/database/mongodbConnection");

const bodyParser = require("body-parser");

const productRoutes = require("./controller/productController");
const customerRoutes = require("./controller/customerController");

const productCategoryRoutes = require("./controller/productCategoryController");

const productBrandRoutes = require("./controller/productBrandController");
const customerAddress = require("./controller/customerAddressController");

const productOrderRoutes = require("./controller/productOrderController");

const cartRouters = require("./controller/cartController");

const orderRouters = require("./controller/orderController");

const adminLoginRoutes = require("./controller/adminLoginController");

const adminHomeRoutes = require("./controller/adminHomeController");

const app = express();
app.use(cors());

app.use(express.json());

app.use(bodyParser.json());

const PORT = process.env.PORT || 4040;

// app.use(cors({origin : 'https://localhost:4200'}))

// endpoint for products
app.use("/products", productRoutes.router);

// endpoint for customers
app.use("/customers", customerRoutes.router);

// endpoint for product categories
app.use("/productcategories", productCategoryRoutes.router);

// endpoint for product brands
app.use("/productbrands", productBrandRoutes.router);

// endpoint for customer address
app.use("/customeraddresses", customerAddress.router);

// endpoint for product orders
app.use("/productorders", productOrderRoutes.router);

// endpoint for admin login
app.use("/adminlogin", adminLoginRoutes.router);

// endpoint for cart
app.use("/carts", cartRouters.router);

app.use("/orders", orderRouters.router);

app.use("/adminhomeimages", adminHomeRoutes.router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
