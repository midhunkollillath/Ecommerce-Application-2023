import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
  productFilterController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController,
} from "../controller/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete rproduct
router.delete("/delete-product/:pid", deleteProductController);
//filter product 
router.post('/product-filter',productFilterController);
//product count
router.get("/product-count", productCountController);

//product per page
router.get("/product-list/:page", productListController);

//search product controller
router.get('/search/:keyword',searchProductController);
//similar product
router.get('/related-product/:pid/:cid',relatedProductController)
//category wise product
router.get('/product-category/:slug',productCategoryController)
//payment routes
//token
router.get('/braintree/token',braintreeTokenController)
//payment
router.post('/braintree/payment',requireSignIn,brainTreePaymentController)
export default router;