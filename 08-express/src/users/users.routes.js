import { Router } from "express";

const router = Router();

// GET /users/
// POST /users/
router.get("/", (req, res) => res.send("Not implemented yet."));
router.post("/", (req, res) => res.send("Not implemented yet."));

// GET /users/:id
// PATCH /users/:id
// DELETE /users/:id
router
	.route("/:id")
	.get((req, res) => res.send("Not implemented yet."))
	.patch((req, res) => res.send("Not implemented yet."))
	.delete((req, res) => res.send("Not implemented yet."));

export default router;