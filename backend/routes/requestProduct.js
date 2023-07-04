import express from "express";
import multer from "multer";
import fs from "fs";

const router = express.Router();

import { getAllRequestedProducts, createRequestedProduct } from "../controllers/requestProduct.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const folderPath = "D:\\Downloads\\Final year project 2023\\Damas Diamond Jewelry Store\\requestedProducts/";
    // Create the folder if it doesn't exist
    fs.mkdirSync(folderPath, { recursive: true });
    cb(null, folderPath);
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.get('/', getAllRequestedProducts);
router.post('/', upload.single("file"), createRequestedProduct);

export default router;
