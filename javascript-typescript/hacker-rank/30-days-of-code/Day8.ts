function processData(input) {
  const inputArray = input.split("\n");

  const totalNoOfEntries = parseInt(inputArray.splice(0, 1));

  const nameQueries = inputArray.splice(totalNoOfEntries); // all remaining names in query

  const phoneBookArray = inputArray.map((item) => item.split(" ")); // converted into array

  const phoneBookMap = new Map(phoneBookArray); // created the map

  nameQueries.map((name) => {
    if (phoneBookMap.has(name)) {
      console.log(name + "=" + phoneBookMap.get(name));
    } else {
      console.log("Not found");
    }
  });
}

const data =
  "3\nsam 99912222\ntom 11122222\nharry 12299933\nsam\nedward\nharry";

processData(data);
