import mongoose from "mongoose";

const RequestProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        required: true
    },

    description: {
        type: String
    },

    size: {
        type: String,
        required: true
    }
},
{timestamps: true})

const RequestedProduct = mongoose.model("RequestedProduct", RequestProductSchema);

export default RequestedProduct;
