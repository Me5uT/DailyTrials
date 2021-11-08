function processData(input) {
  const arr = input.split("\n");
  const removedElem = arr.shift();

  arr.forEach((str) => {
    let o = [];
    let e = [];

    str.split("").forEach((s, i) => {
      i % 2 === 0 ? e.push(s) : o.push(s);
    });

    console.log(e.join(""), o.join(""));
  });
}

processData("2\nHacker\nRank");
// output ->
// 'Hce' 'akr'
// 'Rn' 'ak'
