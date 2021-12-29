"use strict";
class Dog {
  #barkAmount = 0;
  personality = "happy";

  constructor() {}
}

//
var _Dog_barkAmount;
class Dog2 {
  personality: string;
  constructor() {
    _Dog_barkAmount.set(this, 0);
    this.personality = "happy";
  }
}
_Dog_barkAmount = new WeakMap();
