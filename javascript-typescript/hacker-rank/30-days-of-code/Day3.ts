function main(N: number) {
  //   const N: number = parseInt(readLine().trim(), 10);

  if (N <= 100 && N >= 1) {
    if (N % 2 === 1 || (N % 2 === 0 && N >= 6 && N <= 20)) {
      console.log("Weird");
    } else if (N === 2 || N === 4 || (N % 2 === 0 && N >= 20)) {
      console.log("Not Weird");
    }
  }
}

//

function main(N: number) {
  // const N: number = parseInt(readLine().trim(), 10);

  if (N <= 100 && N >= 1) {
    if (N % 2 === 1) {
      console.log("Weird");
    } else if (N === 2 || N === 4) {
      console.log("Not Weird");
    } else if (N % 2 === 0 && N >= 6 && N <= 20) {
      console.log("Weird");
    } else {
      console.log("Not Weird");
    }
  }
}
