class Base {
  protected num = 10;
  private secretKey = 12345;
}

class Derived extends Base {
  // No modifier, so default is 'public'
  num = 15;
}

const n = new Derived();
console.log("n.num", n.num); // 15

const s = new Base();
// console.log(s.secretKey); // error
console.log(s["secretKey"]);
