const Order = require("../models/orderModel");

exports.create = (req, res) => {
    const order = new Order({
        items: req.body.items.map((item) => ({
            name: item.name,
            size: item.size,
            quantity: item.quantity,
        })),
        total: req.body.total,
        status: req.body.status,
        userId: req.body.userId,
    });

    order
        .save()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while creating the order.",
            });
        });
};

exports.findAll = (req, res) => {
    Order.find()
        .then((result) => {
            res.status(200).send(result);
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while retrieving order.",
            });
        });
};

exports.findByUserId = (req, res) => {
    const userId = req.params.userId;

    Order.find({ userId: userId })
        .then((data) => {
            if (data.length > 0) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Orders for User ${userId} do not exist`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    `Error while retrieving orders for User with id = ${userId}`,
            });
        });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Order.findByIdAndDelete(id)
        .then((result) => {
            if (!result) {
                res.status(404).send({
                    message: `Cannot delete order with id = ${id}. Maybe order was not found!`,
                });
            } else {
                res.status(200).send({
                    message: "Order was deleted successfully.",
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message:
                    err.message ||
                    "Some error occurred while deleting the order.",
            });
        });
};
