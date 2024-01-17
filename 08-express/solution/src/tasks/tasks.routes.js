import { Router } from "express";
import { createNewTask, deleteTask, getAllTasks, getById, updateTask } from "./tasks.controllers.js";
import { validateUserInput } from "../middlewares/validateInput.js";
const router = Router();
// GET /tasks/
// POST /tasks/
router.get("/", getAllTasks);
router.post("/", validateUserInput, createNewTask);

// GET /tasks/:id
// PATCH /tasks/:id
// DELETE /tasks/:id
router
	.route("/:id")
	.get(getById)
	.patch(updateTask)
	.delete(deleteTask);

export default router;