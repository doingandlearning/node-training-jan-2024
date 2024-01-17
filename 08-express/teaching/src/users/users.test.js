import { test, expect } from "vitest";
import supertest from "supertest";
import { app } from "../server";

test("the user array is returned", async () => {
	const response = await supertest(app).get("/api/v1/users")
	expect(response.status).toBe(200)
	expect(response.body).toEqual([])
})

test("it fails when i don't send incorrect body", async () => {
	// Arrange/Act
	const response = await supertest(app)
		.post("/api/v1/users")
		.set("x-api-key", "supersecret")
		.send({ name: "Kevin" })

	// Assert
	expect(response.status).toBe(400)
	expect(response.body).toMatchInlineSnapshot(`
		{
		  "message": "You need to send the name and team.",
		  "route": "/api/v1/users",
		}
	`)
})

test("it posts correctly", async () => {
	// Arrange/Act
	const response = await supertest(app)
		.post("/api/v1/users")
		.set("x-api-key", "supersecret")
		.send({ name: "Kevin", team: "Node" })

	// Assert
	expect(response.status).toBe(201);
	expect(response.body).toEqual({ name: "Kevin", team: "Node", id: 1 })

})

// Update/Delete
test("it updates correctly", async () => {
	// Arrange
	const mockApi = supertest(app)
	const response = await mockApi
		.post("/api/v1/users")
		.set("x-api-key", "supersecret")
		.send({ name: "Kevin", team: "Node" })

	// Act 
	const updateResponse = await mockApi
		.patch("/api/v1/users/1")
		.set("x-api-key", "supersecret")
		.send({ team: "TypeScript" })


	// Assert
	expect(updateResponse.body).toMatchInlineSnapshot(`
		{
		  "message": "User not found.",
		}
	`)
	expect(updateResponse.status).toBe(200)

})
