class Box {
  content: string = "";
  sameAs(other: this) {
    return other.content === this.content;
  }
}

//

class DerivedBox extends Box {
  otherContent: string = "?";
}

const base = new Box();
const derived = new DerivedBox();

// derived.sameAs(base);

// Argument of type 'Box' is not assignable to parameter of type 'DerivedBox'.
//   Property 'otherContent' is missing in type 'Box' but required in type 'DerivedBox'.
