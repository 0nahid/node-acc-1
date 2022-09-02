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
    res.send(`
  <h1>Welcome to the User API</h1>
  <p>Here are the available routes</p>
  <ul>
    <li><a href="/">/home</a></li>
    <li><a href="/user/random">/user/random</a></li>
    <li><a href="/user/1">/user/:id</a></li>
    <li><a href="/user/all">/user/all</a></li>
    <li><a href="/user/save">/user/save</a></li>
    <li><a href="/user/patch">/user/patch</a></li>
    <li><a href="/user/patch/bulk-update">/user/patch/bulk-update</a></li>
    <li><a href="/user/:id">/user/delete</a></li>
  </ul>`);
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
