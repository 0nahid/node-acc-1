import { Request, Response } from "express";
import fs from "fs";
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
  res.send(
    ` <div style="color:red;font-size:25px; ">
    <h1>Welcome to the User API</h1>
    <p>Here are the available routes</p>
    <ol>
      <li><a href="/">/home</a></li>
      <li><a href="/user/random">/user/random</a></li>
      <li><a href="/user/1">/user/:id</a></li>
      <li><a href="/user/all">/user/all</a></li>
      <li><a href="/user/save">/user/save</a></li>
      <li><a href="/user/patch">/user/patch</a></li>
      <li><a href="/user/bulk-update">/user/bulk-update</a></li>
      <li><a href="/user/:id">/user/delete</a></li>
    </ol> 
    </div>
    `
  );
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

const saveUser = (req: Request, res: Response) => {
  const id = testData.length + 1;
  const user = { id, ...req.body };
  //  if any of the required field is missing then send 400 status code
  if (!user || !user.name || !user.gender || !user.contact || !user.address) {
    res.status(400).send({
      message: "Bad Request",
      status: 400,
    });
  }
  // push with file system to save data
  testData.push(user);
  fs.writeFileSync("./src/utils/data.json", JSON.stringify(testData));
  res.json({
    message: "User saved successfully",
    status: 200,
    data: user,
  });
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

const bulkUpdate = (req: Request, res: Response) => {
  const { users } = req.body;
  console.log(users);
  //   console.log(testData);
  const updatedUsers = testData.map((user) => {
    const updatedUser = users.find((u: User) => u.id === user.id); // type assertion
    return updatedUser ? { ...user, ...updatedUser } : user;
  });
  //   console.log(updatedUsers);
  res.json({
    message: "Users updated successfully",
    status: 200,
    data: updatedUsers,
  });
};

export const userRouter = {
  welcomeMessage,
  getRandomUser,
  getAllUsers,
  saveUser,
  getUserById,
  updateUser,
  deleteUser,
  bulkUpdate,
};
