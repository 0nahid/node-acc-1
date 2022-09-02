import { Router } from "express";
import { userRouter } from "../../controllers/users.controller";

const router: Router = Router();

// here will be all the routes
//  @route get / a welcome message
router.get("/", userRouter.welcomeMessage);

// @route  get random user user/random
router.route("/random").get(userRouter.getRandomUser);

// @route  get all users user/all
router.route("/all").get(userRouter.getAllUsers);

// @route  create user user/save
router.post("/save", userRouter.createUser);

// @route  get user by id user/:id
router.route("/:id").get(userRouter.getUserById)
.patch(userRouter.updateUser)
.delete(userRouter.deleteUser);


export default router;
