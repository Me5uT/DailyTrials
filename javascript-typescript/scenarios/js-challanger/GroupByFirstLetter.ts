// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

// My Solution
function myFunction(arr: string[]) {
  const reduced = arr.reduce((acc, val) => {
    let char = val[0].toLowerCase();
    acc[char] = [].concat(acc[char] || [], val);
    return acc;
  }, {});
}

myFunction(["Alf", "Alice", "Ben"]);
//myFunction(['Ant', 'Bear', 'Bird']);
//myFunction(['Berlin', 'Paris', 'Prague']);

// Alt Solution
function myFunction2(array) {
  return array.reduce((acc, cur) => {
    const firstLetter = cur.toLowerCase().charAt(0);
    return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
  }, {});
}
