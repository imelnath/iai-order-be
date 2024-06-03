const express = require("express");
const order = require("../controllers/orderController.js");
const router = express.Router();

router.post("/", order.create);
router.get("/", order.findAll);
router.get("/:userId", order.findByUserId);
router.delete("/:id", order.delete);

module.exports = router;
