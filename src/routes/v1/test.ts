import { Router } from "express";
import { testRouter } from "../../controllers/test";

const router: Router = Router();

// @route  get user/random
router.route("/random").get(testRouter.getAllTest);
// @route create an user
router.post("/create", testRouter.createTest);

export default router;
