import { test, expect, beforeEach, vi } from "vitest";
import { fakeFetch } from "./req.js";

beforeEach(() => {
	vi.useFakeTimers()
})

test("responds with data", async () => {
	const response = await fakeFetch("https://goodurl.com")
	expect(Buffer.isBuffer(response)).toBe(true)
	expect(response.toString()).toBe("some data")
})

test("responds with error", async () => {
	expect(() => fakeFetch("http://error.com")).rejects
})

