import { expect, test, describe } from "vitest";
import store from "./store";

describe("store function", () => {
  describe("Successful storage", () => {
    test("should return an object with an id when given a Buffer", () =>
      new Promise((done) => {
        const buffer = Buffer.from("Test data");
        store(buffer, (error, data) => {
          expect(error).to.be.null;
          expect(data).to.have.property("id");
          expect(data?.id).to.be.a("string");
          expect(data?.id).to.have.lengthOf(4);
          done();
        });
      }));
  });

  describe("Input validation", () => {
    test("should call the callback with an error when the input is not a Buffer", () =>
      new Promise((done) => {
        const input = "Not a buffer";
        store(input, (error, data) => {
          if (error instanceof Error) {
            expect(error).to.be.an("error");
            expect(error.message).to.equal("input must be a buffer");
            expect(data).to.be.undefined;
            done();
          }
        });
      }));
  });

  describe("Asynchronous operation", () => {
    test("should take at least 300 ms to return a result", () =>
      new Promise((done) => {
        const buffer = Buffer.from("Test data");
        const startTime = Date.now();
        store(buffer, (error, data) => {
          const endTime = Date.now();
          expect(endTime - startTime).to.be.at.least(300);
          done();
        });
      }));
  });
});
