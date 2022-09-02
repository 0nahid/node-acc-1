"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const cors_1 = __importDefault(require("cors"));
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
exports.app = app;
/* middleware  */
app.use((0, cors_1.default)());
app.use(express_1.default.json());
/* here will be all the imports routes */
const users_route_1 = __importDefault(require("./routes/v1/users.route"));
/* here will be the all the routes */
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
/* Here is the User Routes */
app.use("/user", users_route_1.default);
// 404 response
app.all("*", (req, res) => {
    res.status(404).send({
        message: "Not Found",
        status: 404,
    });
});
