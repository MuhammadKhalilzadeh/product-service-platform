"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const db_1 = require("./database/db");
const app = (0, express_1.default)();
const PORT = 3000;
const user_route_1 = __importDefault(require("./routes/user.route"));
const mongoUri = "mongodb://localhost:27017/trademaster";
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/users", user_route_1.default);
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, db_1.checkAndCreateDatabase)();
            yield (0, db_1.checkAndCreateTables)();
            // Continue with your server initialization
        }
        catch (err) {
            console.error("Failed to initialize database:", err);
            process.exit(1);
        }
    });
}
initializeDatabase();
try {
    mongoose_1.default.connect(mongoUri);
    mongoose_1.default.connection.on("connected", () => {
        console.log("Connected to MongoDB");
    });
    mongoose_1.default.connection.on("error", (err) => {
        console.log("Error connecting to MongoDB", err);
    });
    app.get("/", (req, res) => {
        res.send("Hello, TypeScript with Node.js!");
    });
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}
catch (error) {
    console.error("An error occurred while starting the server", error);
}
