import { Router } from "express";
import { createNewUser, deleteUser, findUsersByTeam, getAllUsers, getById, updateUser } from "./users.controllers.js";
import logging from "../middlewares/logging.js";
import auth from "../middlewares/auth.js";
const router = Router();
router.use(logging)
// GET /users/
// POST /users/
router.get("/", getAllUsers);
router.post("/", auth, createNewUser);

// GET /users/:id
// PATCH /users/:id
// DELETE /users/:id
router
	.route("/:id")
	.get(getById)
	.patch(auth, updateUser)
	.delete(auth, deleteUser);

router.get("/team/:teamName", findUsersByTeam)

export default router;