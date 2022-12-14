const express = require("express");
const router = express.Router();
const product = require("../model/product");
const productController = require("../controllers/product-controllers")


router.get("/", productController.getAllProducts);
router.post("/", productController.addProduct);
router.put("/:id",productController.updateProduct);
router.get("/:id",productController.getById);
router.delete("/:id",productController.deleteById);
router.patch("/:id",productController.updateItem);



module.exports = router;