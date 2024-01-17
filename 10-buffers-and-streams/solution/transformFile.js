import { createReadStream, createWriteStream } from "node:fs";
import { Transform, TransformCallback } from "node:stream";

const upperCaseTransform = new Transform({
  transform(
    chunk,
    encoding,
    callback
  ) {
    this.push(chunk.toString().toUpperCase());
    callback();
  },
});

const readableStream = createReadStream("bigfile.txt");
const writableStream = createWriteStream("transformed.txt");

readableStream
  .pipe(upperCaseTransform)
  .pipe(writableStream)
  .on("finish", () => {
    console.log("Finished writing to the file.");
  });

readableStream.on("error", (err) => {
  console.error("Error reading file:", err);
});

writableStream.on("error", (err) => {
  console.error("Error writing file:", err);
});
