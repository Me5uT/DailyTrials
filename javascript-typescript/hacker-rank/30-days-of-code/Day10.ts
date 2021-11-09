function main() {
  const n = parseInt(readLine().trim(), 10);
  let ikiTabani = [];
  let num;

  const converter = (n) => {
    if (n < 2) {
      ikiTabani.push(1);
    } else if (n % 2 === 1) {
      ikiTabani.push(1);
      converter((n - 1) / 2);
    } else {
      ikiTabani.push(0);
      converter(n / 2);
    }
  };

  converter(n);

  const result = ikiTabani
    .join("")
    .split(0)
    .map((arr) => arr.length)
    .sort((a, b) => b - a)[0];

  console.log(result);
}
