export default function uppercase(str) {
  if (typeof str !== "string") throw Error("input must be a string");
  return str.toUpperCase();
}
