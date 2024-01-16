import { expect, test, describe } from "vitest";
import store from "./store-async";

describe("store function", () => {
  describe("Successful storage", () => {
    test("should return an object with an id when given a Buffer", async () => {
      const buffer = Buffer.from("Test data");
      const result = await store(buffer);
      expect(result).to.have.property("id");
      expect(result.id).to.be.a("string");
      expect(result.id).to.have.lengthOf(4);
    });
  });

  describe("Input validation", () => {
    test("should throw an error when the input is not a Buffer", async () => {
      const input = "Not a buffer";
      try {
        await store(input); // Type assertion to bypass TypeScript type checking
        throw new Error("store did not throw an error with invalid input"); // Fail test if no error thrown
      } catch (error) {
        if (error instanceof Error) {
          expect(error).to.be.instanceOf(Error);
          expect(error.message).to.equal("input must be a buffer");
        }
      }
    });
  });

  describe("Asynchronous operation", () => {
    test("should take at least 300 ms to return a result", async () => {
      const buffer = Buffer.from("Test data");
      const startTime = Date.now();
      await store(buffer);
      const endTime = Date.now();
      expect(endTime - startTime).to.be.at.least(300);
    });
  });
});
