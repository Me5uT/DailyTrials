interface Pingable {
  ping(): void;
}

interface Pongable {
  pong(): void;
}

class Sonar implements Pingable, Pongable {
  ping() {
    console.log("ping!");
  }
  pong() {
    console.log("pong!");
  }
}

// class Ball implements Pingable {
//   pong() {
//     console.log("pong!");
//   }
// }

const a = new Sonar();

interface Checkable {
  check(name: string): boolean;
}

class NameChecker implements Checkable {
  check(s: string) {
    // Notice no error here
    return s.toLowerCase() === "ok";
  }
}
