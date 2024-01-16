/**
 * Given an array it returns the numbers bigger than a given minimum
 * @example
 * ([1, -3, 8, 7]) -> [1, 8, 7]
 * ([3, 5, 9], 4) -> [5, 9]
 */
export default function filterBiggestNumbers(
  numbers,
  min = 0
) {
  if (!Array.isArray(numbers)) {
    throw Error("The first argument must be an array");
  }

  if (typeof min != "number") {
    throw Error("The second argument must be a number");
  }

  return numbers.filter((val) => val > min);
}
