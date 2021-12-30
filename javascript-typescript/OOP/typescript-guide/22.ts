class Base {
  protected num = 10;
}

class Derived extends Base {
  // No Modifier, so default is "public"
  num = 5;
}

const n = new Derived();
console.log("n.num", n.num); // 5
