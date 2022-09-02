import { Router } from "express";
import { userRouter } from "../../controllers/users.controller";

const router: Router = Router();

// @route  get api/v1/test
router.route("/").get(userRouter.getRandomUser).post(userRouter.createTest);

export default router;
