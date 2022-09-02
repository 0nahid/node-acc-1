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

const getAllUsers = (req: Request, res: Response) => {
  res.send(testData);
};

const getRandomUser = (req: Request, res: Response) => {
  // suffle the array and send only one element as response
  const shuffled = testData.sort(() => 0.5 - Math.random());
  let selected = shuffled.slice(0, 1);
  res.send(selected);
};

const createTest = (req: Request, res: Response) => {
  res.send({
    message: "createTest",
    status: 200,
    body: req.body,
  });
};

export const userRouter = { getRandomUser, getAllUsers, createTest };
