"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_controller_1 = require("../../controllers/users.controller");
const router = (0, express_1.Router)();
// here will be all the routes
//  @route get / a welcome message
router.get("/", users_controller_1.userRouter.welcomeMessage);
// @route  get random user user/random
router.route("/random").get(users_controller_1.userRouter.getRandomUser);
// @route  get all users user/all
router.route("/all").get(users_controller_1.userRouter.getAllUsers);
// @route  create user user/save
router.post("/save", users_controller_1.userRouter.saveUser);
// @route  get user by id user/:id
router
    .route("/:id")
    .get(users_controller_1.userRouter.getUserById)
    .patch(users_controller_1.userRouter.updateUser)
    .delete(users_controller_1.userRouter.deleteUser);
// @route  bulk update user user/bulk-update
router.patch("/bulk-update/", users_controller_1.userRouter.bulkUpdate);
exports.default = router;
