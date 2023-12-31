import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getProductByCategory,
  getLastestProducts,
  getCustomCategories
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, admin, createProduct);
router.route("/home").get(getLastestProducts);
router.route("/custom").get(getCustomCategories);
router.route("/:id/reviews").post(protect, createProductReview);
router.get("/top", getTopProducts);
router
.route("/:id")
.get(getProductById)
.delete(protect, admin, deleteProduct)
.put(protect, admin, updateProduct);
router.get("/category/:id", getProductByCategory);
// router.get('/custom', getCustomCategories)

export default router;
