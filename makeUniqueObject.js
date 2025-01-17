// * Here's a JavaScript function to make the array of objects unique based on the id, summing up the duration and merging the data
// arrays for duplicate ids:
// **
const arr = [
  { id: 2, duration: 20, data: ["a", "b"] },
  { id: 2, duration: 50, data: ["c"] },
  { id: 1, duration: 10, data: ["a", "b"] },
  { id: 2, duration: 10, data: ["d"] },
  { id: 3, duration: 30, data: ["e"] },
];

const makeUnique = (array) => {
  const result = array.reduce((acc, curr) => {
    const existing = acc.find((item) => item.id === curr.id);
    if (existing) {
      existing.duration += curr.duration; // Add the durations
      existing.data = [...existing.data, ...curr.data];
    } else {
      acc.push({ ...curr }); // Add a new object to the result
    }
    return acc;
  }, []);
  return result;
};

const uniqueArray = makeUnique(arr);

console.log(uniqueArray);
