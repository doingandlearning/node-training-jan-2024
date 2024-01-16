import { setTimeout } from "timers/promises";

export default async function store(value) {
  if (Buffer.isBuffer(value) === false) {
    throw Error("input must be a buffer");
  }
  await setTimeout(300);
  const id = Math.random().toString(36).split(".")[1].slice(0, 4);
  return { id };
}
