const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.static("q2/public"));

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB Connected"))
    .catch(err => console.log(err));

const orderSchema = new mongoose.Schema({
    orderId: String,
    customerName: String,
    productName: String,
    quantity: Number,
    price: Number,
    orderStatus: String
});

const Order = mongoose.model("Order", orderSchema);

// Display all orders
app.get("/orders", async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

// Update order status using orderId
app.put("/orders/:orderId", async (req, res) => {

    const order = await Order.findOneAndUpdate(
        { orderId: req.params.orderId },
        { orderStatus: req.body.orderStatus },
        { new: true }
    );

    if (!order) {
        return res.status(404).json({
            message: "Order not found"
        });
    }

    res.json({
        message: "Order status updated successfully",
        order: order
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});