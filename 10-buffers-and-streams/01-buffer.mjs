import fs from "node:fs/promises";

const data = await fs.readFile("../readme.md", "utf8")
console.log(data)

console.log(Buffer.from("this is a string", "utf8").toString("utf8"))

console.log(Buffer.alloc(100))