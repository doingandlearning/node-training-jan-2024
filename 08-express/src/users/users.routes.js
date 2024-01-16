import { Router } from "express";
import { createNewUser, deleteUser, getAllUsers, getById, updateUser } from "./users.controllers.js";

const router = Router();

// GET /users/
// POST /users/
router.get("/", getAllUsers);
router.post("/", createNewUser);

// GET /users/:id
// PATCH /users/:id
// DELETE /users/:id
router
	.route("/:id")
	.get(getById)
	.patch(updateUser)
	.delete(deleteUser);

export default router;