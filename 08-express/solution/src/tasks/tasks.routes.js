import { Router } from "express";
import { createNewTask, deleteTask, getAllTasks, getById, updateTask } from "./tasks.controllers.js";
const router = Router();
// GET /tasks/
// POST /tasks/
router.get("/", getAllTasks);
router.post("/", createNewTask);

// GET /tasks/:id
// PATCH /tasks/:id
// DELETE /tasks/:id
router
	.route("/:id")
	.get(getById)
	.patch(updateTask)
	.delete(deleteTask);

export default router;