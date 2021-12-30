function welcomePeople(x: string[] | string) {
  if (x instanceof Array) {
    console.log(`Hello ${x.join(" and ")}`);
  } else {
    console.log(`Welcome ${x}`);
  }
}

welcomePeople(["Ahmet", "Mehmet"]);
welcomePeople("Ali");
