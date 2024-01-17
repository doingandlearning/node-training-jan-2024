import { createReadStream, createWriteStream } from "node:fs";
import { Transform, TransformCallback } from "node:stream";

// Create a Transform stream that converts the input to upper case.
// Use the following signature for the transform() method:
// transform(chunk, encoding, callback)
// The transform() method is called for each chunk of data.
// The chunk argument is a Buffer.
// The callback argument is a function that must be called when the current chunk
const upperCaseTransform = () => {};

// Create a readable and writable stream.
// Pass the path to the input file to createReadStream().
// Pass the path to the output file to createWriteStream().
const readableStream = () => {};
const writableStream = () => {};

// Pipe the readable stream to the transform stream.
// Pipe the transform stream to the writable stream.
// Listen for the finish event on the writable stream.
// The finish event is emitted when all data has been flushed to the underlying system.

// Listen for the error event on the readable and writable streams.
// The error event is emitted if there was an error receiving or writing data.
