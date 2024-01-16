import { describe, test, expect, vi } from 'vitest';
import { fakeFetch } from './req.js';

describe('fakeFetch tests', () => {
	// Use fake timers
	vi.useFakeTimers();

	test("responds with data", async () => {
		const fakeFetchPromise = fakeFetch("https://goodurl.com");

		// Advance timers
		vi.runAllTimers();

		const response = await fakeFetchPromise;
		expect(Buffer.isBuffer(response)).toBe(true);
		expect(response.toString()).toBe("some data");
	});

	test("responds with error", async () => {
		// Use a try-catch block or change the test to expect a Promise rejection
		try {
			const fakeFetchPromise = fakeFetch("http://error.com");
			vi.runAllTimers();
			await fakeFetchPromise;
		} catch (error) {
			// Expect an error to be thrown
			expect(error).toBeDefined();
			expect(error).toMatchInlineSnapshot(`[Error: network error]`)
		}
	});

	// Clear all timers after tests
	vi.clearAllTimers();
});
