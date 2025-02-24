"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const user_route_1 = __importDefault(require("./routes/user.route"));
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGO_URI || "mongodb://localhost:27017/trademaster";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
mongoose_1.default.connect(mongoUri);
mongoose_1.default.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});
mongoose_1.default.connection.on("error", (err) => {
    console.error("Error connecting to MongoDB:", err);
});
try {
    app.use("/users", user_route_1.default);
    app.use("/", (_, res) => {
        res.json("Hello buddy!");
    });
    app.listen(port, () => {
        console.log(`Server running on port http://localhost:${port}/`);
    });
}
catch (error) {
    console.error("Error setting up the server:", error);
}
