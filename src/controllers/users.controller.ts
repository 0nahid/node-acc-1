import { Request, Response } from "express";
import testData from "../utils/data.json";
type User = {
  id: number;
  name: string;
  gender: string;
  contact: string;
  address: string;
  photoUrl: string;
};
const welcomeMessage = (req: Request, res: Response) => {
  res.send(`
    <h1>Welcome to the User API</h1>
    <p>Here are the available routes</p>
    <ul>
        <li><a href="/user">/user</a></li>
        <li><a href="/user/random">/user/random</a></li>
        <li><a href="/user/1">/user/:id</a></li>
        <li><a href="/user/all">/user/all</a></li>
        <li><a href="/user/save">/user/save</a></li>
        <li><a href="/user/patch">/user/patch</a></li>
        <li><a href="/user/patch/bulk-update">/user/patch/bulk-update</a></li>
        <li><a href="/user/:id">/user/delete</a></li>
    </ul>
    `);
};

const getAllUsers = (req: Request, res: Response) => {
  res.json(testData);
};

const getRandomUser = (req: Request, res: Response) => {
  // suffle the array and send only one element as response
  const shuffled = testData.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 1);
  res.json(selected);
};

const createUser = (req: Request, res: Response) => {
  //   console.log(req.body);
  //   testData.push(req.body);
  //   res.json(testData);
  //   create dynamic id
  const id = testData.length + 1;
  const user = { id, ...req.body };
  //  if any of the required field is missing then send 400 status code
  if (!user || !user.name || !user.gender || !user.contact || !user.address) {
    res.status(400).send({
      message: "Bad Request",
      status: 400,
    });
  }

  //   console.log(user);
  testData.push(user);
  res.json(testData);
};

const getUserById = (req: Request, res: Response) => {
  const id = req.params.id;
  const user = testData.find((user) => user.id == Number(id));
  // if user not found then send 404 status code
  if (!user) {
    res.status(404).send({
      message: "User not found",
      status: 404,
    });
  }
  res.json(user);
};

const updateUser = (req: Request, res: Response) => {
  const id = req.params.id;
  const user = testData.find((user) => user.id == Number(id));
  // if user not found then send 404 status code
  if (!user) {
    res.status(404).send({
      message: "User not found",
      status: 404,
    });
  }
  //   console.log(user);
  //   console.log(req.body);
  const updatedUser = { ...user, ...req.body };
  //   console.log(updatedUser);
  const index = testData.indexOf(user as User); // type assertion
  testData.splice(index, 1, updatedUser);
  res.json({
    message: "User updated successfully",
    status: 200,
    data: updatedUser,
  });
};

const deleteUser = (req: Request, res: Response) => {
  const id = req.params.id;
  const user = testData.find((user) => user.id == Number(id));
  // if user not found then send 404 status code
  if (!user) {
    res.status(404).send({
      message: "User not found",
      status: 404,
    });
  }
  const index = testData.indexOf(user as User); // type assertion
  testData.splice(index, 1);
  res.json({
    message: "User deleted successfully",
    status: 200,
    data: testData,
  });
};

export const userRouter = {
  welcomeMessage,
  getRandomUser,
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
