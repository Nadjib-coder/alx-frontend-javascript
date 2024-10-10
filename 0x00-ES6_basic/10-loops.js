export default function appendToEachArrayValue(array, appendString) {
  for (const value in array) {
    let newArray = [];
    newArray.push(appendString + value);
  }
  return arr;
}
