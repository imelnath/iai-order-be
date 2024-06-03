const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
    {
        userId: { type: String, required: false },
        items: [
            {
                name: { type: String, required: true },
                size: { type: String, enum: ["S", "M", "L"], required: true },
                quantity: { type: Number, required: true, min: 1 },
            },
        ],
        total: { type: String, required: true },
        status: { type: String, required: true },
        date: { type: Date, required: false, default: Date.now() },
    },
    {
        timestamps: true,
    }
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
