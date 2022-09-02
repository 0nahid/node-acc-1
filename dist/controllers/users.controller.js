"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const data_json_1 = __importDefault(require("../utils/data.json"));
const welcomeMessage = (req, res) => {
    res.send(`
    <h1>Welcome to the User API</h1>
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
};
const getAllUsers = (req, res) => {
    res.json(data_json_1.default);
};
const getRandomUser = (req, res) => {
    // suffle the array and send only one element as response
    const shuffled = data_json_1.default.sort(() => 0.5 - Math.random());
    let selected = shuffled.slice(0, 1);
    res.json(selected);
};
const createUser = (req, res) => {
    //   console.log(req.body);
    //   testData.push(req.body);
    //   res.json(testData);
    //   create dynamic id
    const id = data_json_1.default.length + 1;
    const user = Object.assign({ id }, req.body);
    //  if any of the required field is missing then send 400 status code
    if (!user || !user.name || !user.gender || !user.contact || !user.address) {
        res.status(400).send({
            message: "Bad Request",
            status: 400,
        });
    }
    //   console.log(user);
    data_json_1.default.push(user);
    res.json(data_json_1.default);
};
const getUserById = (req, res) => {
    const id = req.params.id;
    const user = data_json_1.default.find((user) => user.id == Number(id));
    // if user not found then send 404 status code
    if (!user) {
        res.status(404).send({
            message: "User not found",
            status: 404,
        });
    }
    res.json(user);
};
const updateUser = (req, res) => {
    const id = req.params.id;
    const user = data_json_1.default.find((user) => user.id == Number(id));
    // if user not found then send 404 status code
    if (!user) {
        res.status(404).send({
            message: "User not found",
            status: 404,
        });
    }
    //   console.log(user);
    //   console.log(req.body);
    const updatedUser = Object.assign(Object.assign({}, user), req.body);
    //   console.log(updatedUser);
    const index = data_json_1.default.indexOf(user); // type assertion
    data_json_1.default.splice(index, 1, updatedUser);
    res.json({
        message: "User updated successfully",
        status: 200,
        data: updatedUser,
    });
};
const deleteUser = (req, res) => {
    const id = req.params.id;
    const user = data_json_1.default.find((user) => user.id == Number(id));
    // if user not found then send 404 status code
    if (!user) {
        res.status(404).send({
            message: "User not found",
            status: 404,
        });
    }
    const index = data_json_1.default.indexOf(user); // type assertion
    data_json_1.default.splice(index, 1);
    res.json({
        message: "User deleted successfully",
        status: 200,
        data: data_json_1.default,
    });
};
const bulkUpdate = (req, res) => {
    const { users } = req.body;
    console.log(users);
    //   console.log(testData);
    const updatedUsers = data_json_1.default.map((user) => {
        const updatedUser = users.find((u) => u.id === user.id); // type assertion
        return updatedUser ? Object.assign(Object.assign({}, user), updatedUser) : user;
    });
    //   console.log(updatedUsers);
    res.json({
        message: "Users updated successfully",
        status: 200,
        data: updatedUsers,
    });
};
exports.userRouter = {
    welcomeMessage,
    getRandomUser,
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    bulkUpdate,
};