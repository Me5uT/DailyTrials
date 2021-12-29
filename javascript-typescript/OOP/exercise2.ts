/**
 * Task description: Write a method that returns a deep array like [[key, value]]
 * Expected Result: ({ a: 1, b: 2 }) => [['a', 1], ['b', 2]]
 * Task complexity: 1 of 5
 * @param {Object} object - Any object to transform into array
 * @returns {Array} - a deep array
 */
const makePairs = (obj: any): any[] => {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  let result = [];

  for (let i = 0; i < keys.length; i++) {
    result.push([keys[i], values[i]]);
  }

  return result;
};

makePairs({ a: 1, b: 2 });

//

const makePairs2 = (obj: any): any[] => {
  return Object.keys(obj).map((elem: string) => [elem, obj[elem]]);
};

makePairs2({ a: 1, b: 2 });

//

const makePairs3 = (obj: any): any[] => {
  return Object.entries(obj);
};
