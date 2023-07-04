import RequestProduct from "../models/requestProduct.js";
import asyncHandler from "express-async-handler";


const getAllRequestedProducts = asyncHandler(async (req, res) => {
    try {
        const products = await RequestProduct.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json(error)
    }
})

const createRequestedProduct = asyncHandler(async (req, res) => {
    console.log(req)
    console.log("hello dsfal")
    console.log(req.body)
    try {
        const {name, email, description, size} = req.body;
        await RequestProduct.create({name, email, description, size, image: req.file.originalname});
    
    if (req.file) {
        res.status(200).send("Product Requested Successfully");
    //   res.json({ message: "File uploaded successfully" });
    } else {
      res.status(400).json({ message: "No file selected" });
    }
        
    } catch (error) {
        res.status(500).json("error " + error)
    }
})

export {getAllRequestedProducts, createRequestedProduct}