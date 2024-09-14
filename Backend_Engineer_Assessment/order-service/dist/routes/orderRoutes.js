"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const orderController_1 = require("../controllers/orderController");
const router = (0, express_1.Router)();
router.post('/', orderController_1.createOrder);
router.get('/', orderController_1.getOrders);
router.get('/:id', orderController_1.getOrder);
router.put('/:id', orderController_1.updateOrder);
exports.default = router;
