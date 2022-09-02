import { Request, Response } from "express";
const testData = [
  {
    id: 1,
    name: "John 1",
    gender: "male",
    contact: "+91-123-4567-89",
    address: "Bangalore",
    photoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 2,
    name: "John 2",
    gender: "male",
    contact: "+91-123-4567-89",
    address: "Bangalore",
    photoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 3,
    name: "John 3",
    gender: "male",
    contact: "+91-123-4567-89",
    address: "Bangalore",
    photoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 4,
    name: "John 4",
    gender: "male",
    contact: "+91-123-4567-89",
    address: "Bangalore",
    photoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 5,
    name: "John 5",
    gender: "male",
    contact: "+91-123-4567-89",
    address: "Bangalore",
    photoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 6,
    name: "John 6",
    gender: "male",
    contact: "+91-123-4567-89",
    address: "Bangalore",
    photoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 7,
    name: "John 7",
    gender: "male",
    contact: "+91-123-4567-89",
    address: "Bangalore",
    photoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 8,
    name: "John 8",
    gender: "male",
    contact: "+91-123-4567-89",
    address: "Bangalore",
    photoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
  {
    id: 9,
    name: "John 9",
    gender: "male",
    contact: "+91-123-4567-89",
    address: "Bangalore",
    photoUrl:
      "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png",
  },
];

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

export const userRouter = {
  welcomeMessage,
  getRandomUser,
  getAllUsers,
  createUser,
  getUserById,
};
