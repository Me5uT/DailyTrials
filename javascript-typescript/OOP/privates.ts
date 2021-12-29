class MySafe {
  private secretKey = 12345;
  #secretKey = 11111;
}

const s = new MySafe();

// Not allowed during type checking
// console.log(s.secretKey);
console.log(s["secretKey"]);
console.log(s["#secretKey"]);
