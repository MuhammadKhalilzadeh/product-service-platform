"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
try {
    app.use("/", (req, res) => {
        res.json("Hello buddy!");
    });
    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}/`);
    });
}
catch (error) {
    console.error("Error setting up the server:", error);
}
