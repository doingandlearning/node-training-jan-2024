import { test, expect } from "vitest"
import { multiply } from "../mathFunctions"

test("multiplies numbers correctly", () => {
	// Given  - Arrange
	// When   - Act
	// Then   - Assert
	expect(multiply(4, 10)).toBe(40)
	expect(multiply(-4, 10)).toBe(-40)
	expect(multiply(-4, -10)).toBe(40)
})

test("throws when i don't pass numbers", () => {
	// Given   - Arrange
	// When   - Act
	// Then   - Assert

	expect(() => multiply(true, [])).toThrow()
	expect(() => multiply(true, [])).toThrowErrorMatchingInlineSnapshot(`[Error: Both parameters must be numbers.]`)
	expect(() => multiply(true, 2)).toThrowErrorMatchingSnapshot()
})