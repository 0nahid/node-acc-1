import { Router } from "express";
import { userRouter } from "../../controllers/users.controller";

const router: Router = Router();

// @route  get random user user/random
router.route("/random").get(userRouter.getRandomUser);

// @route  get all users user/all
router.route("/all").get(userRouter.getAllUsers);

// @route  create user user/create
router.post("/create", userRouter.createTest);

export default router;
