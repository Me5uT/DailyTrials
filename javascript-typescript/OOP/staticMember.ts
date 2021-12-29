class MyClass {
  static x = 0;
  static printX() {
    console.log(MyClass.x);
  }
}
console.log(MyClass.x);
MyClass.printX();

class MyClass2 {
  private static x = 0;
}
console.log(MyClass2.x);
// Property 'x' is private and only accessible within class 'MyClass2'.
