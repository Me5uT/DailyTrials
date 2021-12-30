function greeter(fn: (a: string) => void) {
  fn("Hello world");
}

function printToConsole(s: string) {
  console.log("s", s);
}

greeter(printToConsole);
